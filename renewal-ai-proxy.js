// ============================================================
// 台湾 LP 续费全流程实战微课 · MiMo 代理（零依赖 Node）—— 持有 API Key，前端永不接触 Key
// 运行：MIMO_API_KEY=xxxx node renewal-ai-proxy.js   （或把 key 放进同目录 mimo.key）
// 可选环境变量：
//   PORT       监听端口（默认 3000）
//   MIMO_MODEL 模型名（默认 mimo-v2.5-pro）
//   MIMO_BASE_URL OpenAI 兼容基址（默认 https://api.xiaomimimo.com/v1）
// 端点：
//   GET  /health  -> { ok, model, key }
//   POST /chat    { scenario:{title,html,persona,objection,opening,solvePoints}, history:[{role,content}] } -> { reply }
//   POST /score   { scenario, transcript } -> { dims, total, weak, comment }（固定 7 维，前端兼容）
//   POST /coach   { scenario, transcript, weak } -> { model: '示范话术' }（未达 80 分时）
// 上游为 OpenAI 兼容接口：{BASE_URL}/chat/completions
// ============================================================
const http = require('http');
const https = require('https');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;
const MODEL = process.env.MIMO_MODEL || 'mimo-v2.5-pro';
const BASE_URL = (process.env.MIMO_BASE_URL || 'https://api.xiaomimimo.com/v1').replace(/\/$/, '');
const ENDPOINT = BASE_URL + '/chat/completions';

function loadKey() {
  if (process.env.MIMO_API_KEY) return process.env.MIMO_API_KEY;
  try { return fs.readFileSync(path.join(__dirname, 'mimo.key'), 'utf8').trim(); } catch (e) { return ''; }
}
const API_KEY = loadKey();

// OpenAI 兼容调用：messages -> { choices:[{ message:{ content } }] }
function callMiMo(messages, opts, cb) {
  opts = opts || {};
  const body = JSON.stringify({
    model: MODEL,
    stream: false,
    messages: messages,
    max_tokens: opts.max_tokens || 900,
    temperature: typeof opts.temperature === 'number' ? opts.temperature : 0.9,
    top_p: typeof opts.top_p === 'number' ? opts.top_p : 0.9
  });
  const u = new URL(ENDPOINT);
  const req = https.request({
    hostname: u.hostname, path: u.pathname, method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + API_KEY,
      'Accept': 'application/json'
    }
  }, (res) => {
    let d = '';
    res.on('data', c => d += c);
    res.on('end', () => { try { cb(null, JSON.parse(d)); } catch (e) { cb(e, d); } });
  });
  req.on('error', e => cb(e));
  req.write(body);
  req.end();
}

function sendJSON(res, code, obj) {
  const s = JSON.stringify(obj);
  res.writeHead(code, { 'Content-Type': 'application/json; charset=utf-8',
    'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'POST,GET,OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type' });
  res.end(s);
}

function readBody(req, cb) {
  let d = '';
  req.on('data', c => d += c);
  req.on('end', () => { try { cb(null, JSON.parse(d || '{}')); } catch (e) { cb(e, {}); } });
}

// 兼容「推理模型」：正文 content 可能为空，真正内容在 reasoning_content
function getMessageText(data, includeReasoning) {
  const m = data && data.choices && data.choices[0] && data.choices[0].message;
  if (!m) return '';
  if (m.content) return m.content;
  if (includeReasoning && m.reasoning_content) return m.reasoning_content;
  return '';
}

// 从文本里抽出第一个完整 JSON 对象（兼容 ```json 包裹 / 前后多余文字）
function extractJSON(text) {
  if (!text) return null;
  let t = String(text).replace(/```json|```/g, '').trim();
  try { return JSON.parse(t); } catch (e) {}
  const a = t.indexOf('{'); const b = t.lastIndexOf('}');
  if (a >= 0 && b > a) { try { return JSON.parse(t.slice(a, b + 1)); } catch (e) {} }
  return null;
}

// 台湾家长角色（续费场景驱动）：AI 演台湾家长，动态回应、抛顾虑、有情绪
const CHAT_SYS = (sc) => `你是台湾教培机构 VIP THINK 的学员家长「妈妈」（偶尔爸爸也接电话），正在接一通班导（LP）打来的续费沟通电话。
孩子 5 岁半、幼儿园大班、下学期升国小一年级，目前在 VIP THINK 上 S2 阶段（思维启蒙），已学约 28 课时，剩余 12 课时；课后练习正确率从 60% 提升到 85%。
【学员与场景】${sc && sc.html ? sc.html : '（未提供）'}
【家长人设】${sc && sc.persona ? sc.persona : '（未提供）'}
【你最在意的顾虑】${sc && sc.objection ? sc.objection : '（未提供）'}
要求：
- 全程用中文（台湾家长口吻，简体即可），贴合上面家长的性格与顾虑；可自然使用台湾用语：国小/国中/课纲/108课纲/会考/幼儿园/卡支付/LINE/AFTEE/蛮/超/啦/喔 等。
- 每次只回 1–3 句（不超过 60 字），像真实家长一样简短、有情绪、会追问。
- 若 LP 话术到位（开场得体、共情、核对信息、讲清政策/课程体系/课包/权益、化解你的顾虑、给出可落地方案、约定跟进时间与方式），你可逐渐松口、表示愿意配合或想了解；若 LP 生硬、只照念推销、忽略你的顾虑、答非所问或催你，你要提出质疑、敷衍或抛出新的顾虑。
- 绝不能跳出家长角色，不要给 LP 打分或教学。`;

// 续费电话能力评委：按场景 scoreDims 动态生成维度（每章独立，加权和 = 100，dims 值 0~1）
function scoreSys(sc) {
  const dims = (sc && sc.scoreDims) ? sc.scoreDims
    : [['流程规范（五步走完）', 15, '是否走完五步'], ['学情反馈质量', 15, '学情外化'],
       ['课程规划合理性', 12, '三阶段+9阶'], ['课包方案针对性', 13, '长短期方案'],
       ['推单促成', 15, '性价比/理念'], ['异议处理', 15, '四大方向'],
       ['台湾家长亲和度/用语', 15, '台湾用语']];
  let json = '{ "dims": {';
  dims.forEach(function(d, i) {
    if (i > 0) json += ',';
    json += '"' + d[0] + '": <0-1>';
  });
  json += ' }, "total": <0-100 整数，加权和 = ' + dims.map(function(d){ return d[0] + d[1]; }).join(' + ')
        + '>, "weak": ["覆盖不足或部分覆盖的维度名"], "comment": "一句话总评与改进建议" }';
  let desc = '';
  dims.forEach(function(d) { desc += '- ' + d[0] + '(' + d[1] + ') = ' + d[2] + '；\n'; });
  return '你是严格的台湾 VIP THINK 班导（LP）续费电话能力评委。依据下面 ' + dims.length
    + ' 个维度为班导这通续费电话的表现打分（每个维度给出 0~1 的覆盖度：1=完整覆盖、0.5=部分覆盖、0=未覆盖），返回 JSON：\n'
    + json + '\n只返回 JSON，不要多余解释。\n维度说明：\n' + desc;
}

// 教练示范（未达 80 分时）
const COACH_SYS = `你是台湾 VIP THINK 的资深「续费电话培训教练」。学员（LP）在一次家长对练中表现不达标，请针对他的弱项，以 LP 的口吻示范 1–2 段正确回应，要求：
- 紧扣弱项要点逐条回应，给出可直接照搬的完整话术；
- 先共情家长，再按解决思路化解，最后软性促成；
- 简体中文，每段 60–120 字，自然口语，像真实班导说话（带台湾用语）。
只输出示范话术正文，不要解释、不要加标题。`;

const server = http.createServer((req, res) => {
  if (req.method === 'OPTIONS') { sendJSON(res, 204, {}); return; }
  if (req.url === '/health' && req.method === 'GET') { sendJSON(res, 200, { ok: true, model: MODEL, key: API_KEY ? 'set' : 'missing' }); return; }

  if (req.url === '/chat' && req.method === 'POST') {
    readBody(req, (err, body) => {
      if (err) return sendJSON(res, 400, { error: 'bad json' });
      const sc = body.scenario || {};
      const history = Array.isArray(body.history) ? body.history : [];
      // assistant 当成家长、user 当成 LP，喂给模型维持角色一致性
      const convo = history.slice(-12).map(m => ({
        role: m.role === 'assistant' ? 'assistant' : 'user',
        content: m.content
      }));
      const messages = [{ role: 'system', content: CHAT_SYS(sc) }].concat(convo);
      callMiMo(messages, { temperature: 0.95, top_p: 0.9, max_tokens: 1000 }, (e, data) => {
        if (e) return sendJSON(res, 502, { error: 'mimo_error', detail: String(e) });
        const reply = getMessageText(data, false);
        if (!reply) return sendJSON(res, 502, { error: 'empty_reply', raw: getMessageText(data, true) });
        sendJSON(res, 200, { reply: reply });
      });
    });
    return;
  }

  if (req.url === '/score' && req.method === 'POST') {
    readBody(req, (err, body) => {
      if (err) return sendJSON(res, 400, { error: 'bad json' });
      const sc = body.scenario || {};
      const transcript = body.transcript || '';
      const userMsg = `【学员场景】${(sc && sc.html) || ''}\n【家长人设】${(sc && sc.persona) || ''}\n【家长顾虑】${(sc && sc.objection) || ''}\n\n【班导这通续费电话的逐句实录】\n${transcript}\n\n请按系统指示输出 JSON 评分。`;
      const messages = [
        { role: 'system', content: scoreSys(sc) },
        { role: 'user', content: userMsg }
      ];
      callMiMo(messages, { temperature: 0.2, top_p: 0.8, max_tokens: 3000 }, (e, data) => {
        if (e) return sendJSON(res, 502, { error: 'mimo_error', detail: String(e) });
        const text = getMessageText(data, true);
        let parsed = extractJSON(text);
        if (!parsed) return sendJSON(res, 502, { error: 'bad_score', raw: text ? text.slice(0, 800) : '(empty)' });
        // 加权求和兜底（按场景 scoreDims）
        if (typeof parsed.total !== 'number' && parsed.dims) {
          const dims = (sc && sc.scoreDims) ? sc.scoreDims
            : [['流程规范（五步走完）', 15], ['学情反馈质量', 15], ['课程规划合理性', 12],
               ['课包方案针对性', 13], ['推单促成', 15], ['异议处理', 15], ['台湾家长亲和度/用语', 15]];
          let t = 0;
          dims.forEach(d => { t += (Number(parsed.dims[d[0]]) || 0) * d[1]; });
          parsed.total = Math.round(t);
        }
        if (parsed.dims) {
          Object.keys(parsed.dims).forEach(k => {
            let v = Number(parsed.dims[k]); if (isNaN(v)) v = 0;
            parsed.dims[k] = Math.max(0, Math.min(1, v));
          });
        }
        sendJSON(res, 200, parsed);
      });
    });
    return;
  }

  if (req.url === '/coach' && req.method === 'POST') {
    readBody(req, (err, body) => {
      if (err) return sendJSON(res, 400, { error: 'bad json' });
      const sc = body.scenario || {};
      const transcript = body.transcript || '';
      const weak = (body.weak || []).join('、') || '整体表现';
      const userMsg = `【学员场景】${(sc && sc.html) || ''}\n【家长顾虑】${(sc && sc.objection) || ''}\n【弱项维度】${weak}\n\n【本次对练实录】\n${transcript}\n\n请按系统指示输出示范话术。`;
      const messages = [
        { role: 'system', content: COACH_SYS },
        { role: 'user', content: userMsg }
      ];
      callMiMo(messages, { temperature: 0.6, top_p: 0.9, max_tokens: 1500 }, (e, data) => {
        if (e) return sendJSON(res, 502, { error: 'mimo_error', detail: String(e) });
        const text = getMessageText(data, true);
        if (!text) return sendJSON(res, 502, { error: 'empty_reply' });
        sendJSON(res, 200, { model: text.trim() });
      });
    });
    return;
  }

  sendJSON(res, 404, { error: 'not found' });
});

server.listen(PORT, () => console.log(`Renewal AI proxy on http://localhost:${PORT}  (model=${MODEL}, endpoint=${ENDPOINT}, key=${API_KEY ? 'set' : 'MISSING'})`));
