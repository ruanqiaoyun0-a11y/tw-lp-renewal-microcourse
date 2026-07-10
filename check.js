
// ============================================================
// 课程数据 — 在此配置
// ============================================================
const courseData = {
  title: '台湾LP续费全流程实战微课',
  sections: [
    {
  id: 's1', title: '续费政策与策略', duration: '8–10分钟', icon: '1',
  type: 'content_quiz', quizId: 'quiz1',
  content: `
    <div class="section-header">
      <span class="section-badge">第一章</span>
      <h1>续费政策与策略</h1>
      <div class="duration">⏱ 8–10分钟</div>
    </div>
    <div class="card">
      <div class="card-title">课包生命周期划分</div>
      <p>以<strong>新签课包整体生命周期的 1/3</strong>划分。运营每月初会提供「一续至三续池」学员，需重点跟进促进转化。</p>
      <div class="highlight-box" style="margin-top:16px;">
        <p><strong>升舱期</strong>：可购买升舱课包，优惠力度较大。</p>
        <p><strong>早鸟期 / 结课期</strong>：可购买普通课包。</p>
      </div>
    </div>
    <div class="card">
      <div class="card-title">益智续费策略（以台湾当月为例）</div>
      <p>根据「一续池 / 多续池」及不同课包生命周期，设置对应的「服务月」与优惠节点，形成拆标跟进节奏。</p>
      <div style="margin-top:16px;text-align:center;">
        <img src="renewal-strategy-chart.png" alt="续费策略拆标逻辑" style="max-width:100%;border-radius:8px;border:1px solid var(--border);">
      </div>
    </div>
  `
},
{
  id: 's2', title: '谈单核心逻辑', duration: '6–8分钟', icon: '2',
  type: 'content_quiz', quizId: 'quiz2',
  content: `
    <div class="section-header">
      <span class="section-badge">第二章</span>
      <h1>谈单核心逻辑</h1>
      <div class="duration">⏱ 6–8分钟</div>
    </div>
    <div class="card">
      <div class="card-title">消费决策的本质：性价比</div>
      <div class="highlight-box">
        <p style="font-size:18px;font-weight:700;text-align:center;">性价比 = 学习效果 × 服务质量 / 续费价格</p>
      </div>
      <ul style="margin-top:16px;padding-left:20px;line-height:2;">
        <li><strong>学习效果</strong>：当下孩子学习的<strong>外化</strong> + 未来家长的<strong>期望</strong>。</li>
        <li><strong>服务质量</strong>：教学质量、与 LP 的粘合度，让家长感受到「想他所想，急他所需」。</li>
        <li><strong>续费价格</strong>：公司政策支撑，优惠是相对的、有限的、来之不易的。</li>
      </ul>
    </div>
    <div class="card">
      <div class="card-title">续费流程四步思路</div>
      <div class="flow-steps">
        <div class="flow-step"><div class="step-num">1</div><h4>学情反馈</h4><p>专题内容 + 效果外化</p></div>
        <div class="flow-arrow">→</div>
        <div class="flow-step"><div class="step-num">2</div><h4>课程规划</h4><p>九阶体系 + 后续重点</p></div>
        <div class="flow-arrow">→</div>
        <div class="flow-step"><div class="step-num">3</div><h4>提出课包方案</h4><p>长期 / 短期方案</p></div>
        <div class="flow-arrow">→</div>
        <div class="flow-step"><div class="step-num">4</div><h4>推单收单</h4><p>逼单 + 带付</p></div>
      </div>
    </div>
  `
},
{
  id: 's3', title: '学情反馈 + 课程规划', duration: '12–15分钟', icon: '3',
  type: 'content_chart_dialogue', quizId: 'dialogue1',
  content: `
    <div class="section-header">
      <span class="section-badge">第三章</span>
      <h1>学情反馈 + 课程规划</h1>
      <div class="duration">⏱ 12–15分钟</div>
    </div>
    <div class="card">
      <div class="card-title">第一步：学情反馈</div>
      <p><strong>1. 学习专题内容描述</strong></p>
      <p>结合孩子实际学习情况，说明近期专题（如《构建策略》《观察推理》）及培养的能力：空间想象力、有序思维、推理能力、表述能力。</p>
      <p style="margin-top:12px;"><strong>2. 效果外化 — 结合家长报名初衷</strong></p>
      <ul style="padding-left:20px;line-height:1.9;">
        <li>知识内容 + 方法/能力</li>
        <li>学习习惯：学习闭环数据、积极性、独立性、细心程度</li>
        <li>课堂表现：表达、专注度、规则意识</li>
      </ul>
      <p style="margin-top:12px;"><strong>3. 提出待提升点 + 建议</strong></p>
      <p>指出需要进步的地方，并给出家长可配合的具体建议，然后过渡到询问家长期望。</p>
    </div>
    <div class="card">
      <div class="card-title">第二步：课程规划</div>
      <p><strong>思维培养是长期、系统化的过程。</strong></p>
      <div class="flash-cards" style="margin-top:16px;">
        <div class="flash-card"><h4>幼儿园阶段</h4><p>思维启蒙，让孩子对思考有兴趣。</p></div>
        <div class="flash-card"><h4>国小一至三年级</h4><p>抽象逻辑思维萌芽，最关键的形成期，做好学习习惯与能力衔接。</p></div>
        <div class="flash-card"><h4>国小四至六年级</h4><p>抽象逻辑思维建立，进入综合运用期，强调归纳、迁移与举一反三。</p></div>
      </div>
      <p style="margin-top:16px;">豌豆九阶体系（S1–S9）贴合台湾 108 课纲，S2–S3 是幼儿园升国小的衔接关键期，基础打稳才能快速进入思维形成期。</p>
    </div>
  `
},
{
  id: 's4', title: '课包方案 + 推单收单', duration: '10–12分钟', icon: '4',
  type: 'content_chart_dialogue', quizId: 'dialogue2',
  content: `
    <div class="section-header">
      <span class="section-badge">第四章</span>
      <h1>课包方案 + 推单收单</h1>
      <div class="duration">⏱ 10–12分钟</div>
    </div>
    <div class="card">
      <div class="card-title">第三步：提出课包方案</div>
      <p>先告知剩余课时、可学习月份、完成 S2 / S3 分别还需多少课时，再给出两个方案：</p>
      <div class="strategy-grid" style="margin-top:16px;">
        <div class="strategy-card"><div class="icon">📅</div><h4>方案一：长期方案</h4><p>课时多、总价高、单价低。突出赠送课时、豌豆币、打卡次数、学习周期。</p></div>
        <div class="strategy-card"><div class="icon">🎯</div><h4>方案二：短期方案</h4><p>课时少、总价低、单价高一些。突出报名差价对比与有效赠送。</p></div>
      </div>
      <div class="highlight-box warning" style="margin-top:16px;">
        <p><strong>试探话术：</strong>「妈妈您是更倾向学习到 S3 结束，还是 S2 结束呢？/ 您更倾向长期还是短期？」</p>
      </div>
    </div>
    <div class="card">
      <div class="card-title">第四步：推单收单</div>
      <p><strong>逼单话术：</strong></p>
      <ul style="padding-left:20px;line-height:1.9;">
        <li><strong>性价比（紧迫性）</strong>：确认预算与需求，强调额外优惠、录播课、豌豆币、服务打包，折算单节课成本。</li>
        <li><strong>理念（重要性）</strong>：思维能力是终身核心能力，不会被 AI 取代；持续学习才能提升思维上限。</li>
      </ul>
      <p style="margin-top:12px;"><strong>带付话术：</strong>「我马上把报名链接传给您，截图发给我后立刻登记，所有赠品和专属优惠都会帮您兑换好。」</p>
    </div>
  `
},
{
  id: 's5', title: '异议处理 + 价值塑造', duration: '12–15分钟', icon: '5',
  type: 'content_chart_dialogue', quizId: 'dialogue3',
  content: `
    <div class="section-header">
      <span class="section-badge">第五章</span>
      <h1>异议处理 + 价值塑造</h1>
      <div class="duration">⏱ 12–15分钟</div>
    </div>
    <div class="card">
      <div class="card-title">第五步：异议处理核心方向</div>
      <div class="flow-steps">
        <div class="flow-step"><div class="step-num">1</div><h4>理解共情</h4><p>先共情，稳情绪</p></div>
        <div class="flow-arrow">→</div>
        <div class="flow-step"><div class="step-num">2</div><h4>挖掘根源</h4><p>辨真假，找根源</p></div>
        <div class="flow-arrow">→</div>
        <div class="flow-step"><div class="step-num">3</div><h4>精准破局</h4><p>给具体方案</p></div>
        <div class="flow-arrow">→</div>
        <div class="flow-step"><div class="step-num">4</div><h4>理念强化</h4><p>推动决策</p></div>
      </div>
    </div>
    <div class="card">
      <div class="card-title">价值塑造：三性</div>
      <div class="callout-grid">
        <div class="callout-item"><h4>重要性</h4><p>续费是必要教育投入；思维终身能力、课程完整性、关键期价值、已有沉淀。</p></div>
        <div class="callout-item"><h4>紧迫性</h4><p>时间窗口限制、学习进度压力、优惠时效约束。</p></div>
        <div class="callout-item"><h4>唯一性</h4><p>课程产品、服务保障、师生适配、优惠福利的不可替代。</p></div>
      </div>
      <div class="highlight-box success" style="margin-top:16px;">
        <p><strong>核心：</strong>让家长认同「续费不是额外开支，而是教育刚需投入」。</p>
      </div>
    </div>
  `
},
{
  id: 's6', title: '注意事项 + 付费方式', duration: '8–10分钟', icon: '6',
  type: 'content_quiz', quizId: 'quiz3',
  content: `
    <div class="section-header">
      <span class="section-badge">第六章</span>
      <h1>注意事项 + 付费方式</h1>
      <div class="duration">⏱ 8–10分钟</div>
    </div>
    <div class="card">
      <div class="card-title">注意事项</div>
      <ol style="padding-left:20px;line-height:2;">
        <li>优惠不要一次性全部给出去，保留底牌。</li>
        <li>设置优惠节点、名额限制。</li>
        <li>若家长说还要考虑，约定再次跟进时间。</li>
        <li>不论续不续，最终结语落脚在学习上，突出服务。</li>
        <li>若非电话中直接付款，要说明支付时效，并持续跟进。</li>
      </ol>
    </div>
    <div class="card">
      <div class="card-title">付费方式</div>
      <p><strong>1. 官方链接支付</strong>：LP 工作台 → 学员详情页 → 续费 → 选择课时包 → 复制链接 → 发给家长。</p>
      <div style="margin:12px 0;display:flex;gap:12px;flex-wrap:wrap;">
        <img src="renewal-button.png" alt="续费入口" style="max-width:48%;border-radius:8px;border:1px solid var(--border);">
        <img src="package-select.png" alt="选择续费套餐" style="max-width:48%;border-radius:8px;border:1px solid var(--border);">
      </div>
      <p><strong>2. 其他付款方式</strong>：AFTEE 等。链接 24 小时内有效，支持卡支付（Visa、Mastercard 等）。</p>
      <p style="margin-top:12px;"><strong>3. 到账核对与凭证</strong>：付款后 LP 需后台核对新增课时及赠送内容；电子合同在家长端 APP 查看；电子发票在【审批申请】提交。</p>
      <p style="margin-top:12px;"><strong>4. 续费确认表</strong>：家长付款后，台湾主要使用 LINE 手动发送，留痕报备；每周日截止质检。</p>
      <div style="margin:12px 0;display:flex;gap:12px;flex-wrap:wrap;">
        <img src="renewal-confirm-msg.png" alt="续费确认表示范" style="max-width:48%;border-radius:8px;border:1px solid var(--border);">
        <img src="renewal-confirm-table.png" alt="续费确认表" style="max-width:48%;border-radius:8px;border:1px solid var(--border);">
      </div>
      <div style="text-align:center;margin-top:12px;">
        <img src="renewal-confirm-order.png" alt="续费确认单" style="max-width:60%;border-radius:8px;border:1px solid var(--border);">
      </div>
    </div>
  `
},
{
  id: 's7', title: '终极考核', duration: '15–20分钟', icon: '🏆',
  type: 'content',
  content: `
    <div class="section-header">
      <span class="section-badge">第七章</span>
      <h1>🏆 终极考核</h1>
      <div class="duration">⏱ 15–20分钟</div>
    </div>
    <div class="card">
      <div class="card-title">考核场景</div>
      <p>你作为台湾 LP，即将为学员<b>果果</b>的妈妈进行续费沟通。请基于以下完整学情，写一段完整的话术（300–500 字）。</p>
      <table style="width:100%;border-collapse:collapse;margin:16px 0;font-size:13px;">
        <tr style="background:var(--primary);color:#fff;"><th style="padding:8px;border:1px solid var(--border);">项目</th><th style="padding:8px;border:1px solid var(--border);">详情</th></tr>
        <tr><td style="padding:8px;border:1px solid var(--border);font-weight:700;">学员</td><td style="padding:8px;border:1px solid var(--border);">果果，7岁，女孩，二年级，中国台湾</td></tr>
        <tr><td style="padding:8px;border:1px solid var(--border);font-weight:700;">学习负责人</td><td style="padding:8px;border:1px solid var(--border);">妈妈</td></tr>
        <tr><td style="padding:8px;border:1px solid var(--border);font-weight:700;">池子/阶段</td><td style="padding:8px;border:1px solid var(--border);">老生结课期；7月份刚升阶；当前学习 S5 第1讲</td></tr>
        <tr><td style="padding:8px;border:1px solid var(--border);font-weight:700;">上课时间</td><td style="padding:8px;border:1px solid var(--border);">北京时间每周六日早10点</td></tr>
        <tr><td style="padding:8px;border:1px solid var(--border);font-weight:700;">主讲老师</td><td style="padding:8px;border:1px solid var(--border);">小泡芙老师 S4</td></tr>
        <tr><td style="padding:8px;border:1px solid var(--border);font-weight:700;">首次报名课包</td><td style="padding:8px;border:1px solid var(--border);">5888元；45赠5 + 打卡24次</td></tr>
        <tr><td style="padding:8px;border:1px solid var(--border);font-weight:700;">剩余课时</td><td style="padding:8px;border:1px solid var(--border);">10节</td></tr>
        <tr><td style="padding:8px;border:1px solid var(--border);font-weight:700;">转介绍关系</td><td style="padding:8px;border:1px solid var(--border);">有上级转介绍（大宝已续费）；也有推荐下级</td></tr>
        <tr><td style="padding:8px;border:1px solid var(--border);font-weight:700;">打卡情况</td><td style="padding:8px;border:1px solid var(--border);">偶尔打卡；有豌豆币未兑换</td></tr>
        <tr><td style="padding:8px;border:1px solid var(--border);font-weight:700;">学员身份</td><td style="padding:8px;border:1px solid var(--border);">SVIP学员，多娃在读</td></tr>
        <tr><td style="padding:8px;border:1px solid var(--border);font-weight:700;">家长特点</td><td style="padding:8px;border:1px solid var(--border);">理念较好，陪伴上课，大宝已在读很多年</td></tr>
        <tr><td style="padding:8px;border:1px solid var(--border);font-weight:700;">学习表现</td><td style="padding:8px;border:1px solid var(--border);">出勤100%、作业100%；请假及时补课，小老师视频会完成</td></tr>
        <tr><td style="padding:8px;border:1px solid var(--border);font-weight:700;">优缺点</td><td style="padding:8px;border:1px solid var(--border);">很喜欢老师，比较需要被关注；害羞腼腆，需要鼓励才敢表达；注意力有限，数学基础不错</td></tr>
        <tr><td style="padding:8px;border:1px solid var(--border);font-weight:700;">合同规则</td><td style="padding:8px;border:1px solid var(--border);">请假机会共8次（已使用2次）；停课机会1次（尚未使用）</td></tr>
      </table>
      <p>话术需覆盖以下环节：</p>
      <ul style="padding-left:20px;line-height:2;">
        <li>学情反馈 + 效果外化（结合果果的优点、进步与性格特点）</li>
        <li>课程规划（S5 衔接 / 九阶体系 / 小泡芙老师风格）</li>
        <li>课包方案推荐（基于首次课包、剩余课时、多娃 / SVIP / 老带新优惠）</li>
        <li>推单逼单（紧迫性 / 重要性 / 唯一性）</li>
        <li>异议处理 / 价值塑造（妈妈可能担心孩子害羞、注意力、时间冲突等）</li>
        <li>闭环承诺（豌豆币兑换、请假 / 补课 / 停课权益说明）</li>
      </ul>
    </div>
    <div class="card final-task-container" id="finalTaskContainer">
      <h3 style="margin-bottom:12px;">📝 请在这里撰写你的续费话术</h3>
      <textarea class="final-task-input" id="finalTaskInput" placeholder="请写一段完整、口语化的 LP 续费话术…"></textarea>
      <div class="char-counter" id="finalCharCount">0 / 500字</div>
      <div style="display:flex;gap:12px;margin-top:16px;">
        <button class="btn" id="finalSubmitBtn" onclick="submitFinalTask()">提交考核</button>
        <button class="btn btn-outline" onclick="resetFinalTask()">重新作答</button>
      </div>
      <div id="finalFeedback" style="display:none;margin-top:20px;"></div>
    </div>
  `
}
  ]
};

// ============================================================
// 互动练习数据 — 在此配置
// ============================================================
const quizzes = {
  quiz1: {
  quizId: 'quiz1',
  question: '按照续费政策，课包生命周期通常如何划分？',
  options: [
    { label: 'A', text: '按新签课包整体生命周期的 1/2 划分' },
    { label: 'B', text: '按新签课包整体生命周期的 1/3 划分' },
    { label: 'C', text: '按学员入学月份划分' },
    { label: 'D', text: '按自然年季度划分' }
  ],
  correct: 1,
  feedback_correct: '✅ 正确！按新签课包整体生命周期的 1/3 划分，是升舱期、早鸟期、结课期制定优惠节奏的基础。',
  feedback_wrong: '❌ 错误。正确答案是 B：按新签课包整体生命周期的 1/3 划分。'
},
quiz2: {
  quizId: 'quiz2',
  question: '续费消费决策的本质「性价比」如何计算？',
  options: [
    { label: 'A', text: '续费价格 / (学习效果 + 服务质量)' },
    { label: 'B', text: '学习效果 × 服务质量 / 续费价格' },
    { label: 'C', text: '服务质量 / 学习效果' },
    { label: 'D', text: '学习效果 + 服务质量' }
  ],
  correct: 1,
  feedback_correct: '✅ 正确！性价比 = 学习效果 × 服务质量 / 续费价格。要让家长感到「物超所值」。',
  feedback_wrong: '❌ 错误。正确答案是 B：学习效果 × 服务质量 / 续费价格。'
},
quiz3: {
  quizId: 'quiz3',
  question: '以下哪一项是正确的续费跟进动作？',
  options: [
    { label: 'A', text: '一次性把所有优惠全部给家长' },
    { label: 'B', text: '家长说还要考虑时，不约定下次跟进时间' },
    { label: 'C', text: '非电话中直接付款时，说明支付时效并持续跟进' },
    { label: 'D', text: '续费确认表无需发送，留痕不重要' }
  ],
  correct: 2,
  feedback_correct: '✅ 正确！支付时效、持续跟进、留痕报备都是降低风险、提高转化的关键动作。',
  feedback_wrong: '❌ 错误。正确答案是 C：非电话中直接付款时，说明支付时效并持续跟进。'
},
dialogue1: {
  isDialogue: true,
  question: '「老师，最近孩子上课有时跟不上，但课后作业完成还可以。您觉得后面要怎么学？」',
  scenario: '家长主动询问学情与后续规划。请你以 LP 身份，先进行学情反馈，再过渡到课程规划与期望询问。',
  expectedKeywords: [
    { concept: '学习专题反馈', terms: ['专题','构建策略','观察推理','空间想象力','有序思维','解决问题','推理能力'], weight: 15 },
    { concept: '效果外化', terms: ['进步','提升','老师反馈','自评','正确率','积极性','配合','独立','细心'], weight: 18 },
    { concept: '待提升点+建议', terms: ['待提升','需要进步','建议','课后','家长','配合','练习','巩固'], weight: 15 },
    { concept: '过渡询问期望', terms: ['期望','后期','学习规划','培养','提升','想让孩子','哪方面','下一阶段'], weight: 18 },
    { concept: '九阶/课程规划', terms: ['S2','S3','九阶','体系','国小','衔接','基础','思维形成期','108课纲'], weight: 14 },
    { concept: '共情语气', terms: ['理解','放心','不要太着急','慢慢来','一起','帮助','支持'], weight: 10 }
  ]
},
dialogue2: {
  isDialogue: true,
  question: '「你说的这两个方案我再想想，我想比较一下。」',
  scenario: '家长听完长期/短期两个课包方案后表示想再考虑。请你用逼单话术推动即时决策。',
  expectedKeywords: [
    { concept: '确认需求/预算', terms: ['预算','总价','单价','考虑','学到','程度','需求','想让孩子'], weight: 15 },
    { concept: '优惠紧迫性', terms: ['限时','优惠','今天','确定','额外','现在','名额','申请','经理'], weight: 18 },
    { concept: '价值/理念', terms: ['思维','能力','持续','学习','效果','长期','AI','未来','竞争力','受用'], weight: 16 },
    { concept: '具体方案对比', terms: ['长期','短期','S2','S3','课时','单价','总价','学习周期','赠品'], weight: 14 },
    { concept: '带付/行动', terms: ['链接','报名','截图','登记','兑换','缴费','马上','完成'], weight: 15 },
    { concept: '稀缺/唯一', terms: ['只有','专属','老学员','新学员','后续','不会再','仅此一次','错过'], weight: 12 }
  ]
},
dialogue3: {
  isDialogue: true,
  question: '「孩子学校作业已经很多了，哪有时间再上这个课？」',
  scenario: '家长以「没时间」提出异议。请你先共情、再挖掘真实顾虑，并给出解决方案。',
  expectedKeywords: [
    { concept: '共情理解', terms: ['理解','知道','确实','忙','作业多','学校','辛苦','不容易'], weight: 18 },
    { concept: '挖掘根源', terms: ['担心','顾虑','时间是吗','其实还是','请问','是不是'], weight: 15 },
    { concept: '时间规划/效率', terms: ['时间','规划','安排','效率','每周','固定','习惯','碎片化','坚持','节奏'], weight: 16 },
    { concept: '课程连续性', terms: ['中断','断层','之前','进步','效果','巩固','衔接','持续'], weight: 12 },
    { concept: '精准破局', terms: ['方案','调整','优先级','减少','一周','课时','录播','回放','灵活'], weight: 14 },
    { concept: '理念强化', terms: ['关键期','习惯','基础','长期','思维','升学','国小','准备','未来'], weight: 15 }
  ]
}
};

// ============================================================
// 状态管理
// ============================================================
const LS_PREFIX = 'tw_lp_renewal';
let currentSection = 0;
let completedSections = new Set();
let quiz1Answered = false;
let quiz2Answered = false;
let quiz3Answered = false;
let dialogue1Answered = false;
let dialogue1Score = 0;
let dialogue2Answered = false;
let dialogue2Score = 0;
let dialogue3Answered = false;
let dialogue3Score = 0;
let quiz1Selected = -1;
let quiz2Selected = -1;
let quiz3Selected = -1;
let dialogue1Text = '';
let dialogue2Text = '';
let dialogue3Text = '';
let finalTaskSubmitted = false;
let finalScore = 0;

let studySeconds = 0;
let timerInterval = null;

// ============================================================
// 初始化
// ============================================================
function init() {
  renderSidebar();
  renderSections();
  navigateTo(0);
  setupQuizListeners();
  setupFinalTaskListener();
  startTimer();
  loadNotes();
  loadProgress();
  applyLoadedState();
}

function renderSidebar() {
  const nav = document.getElementById('sidebarNav');
  nav.innerHTML = courseData.sections.map((s, i) => `
    <div class="nav-section" data-index="${i}" onclick="navigateTo(${i})">
      <div class="nav-icon">${s.icon}</div>
      <div class="nav-info">
        <div class="nav-label">${s.title}</div>
        <div class="nav-sub">⏱ ${s.duration}</div>
      </div>
    </div>
  `).join('');
  updateSidebarLocks();
}

function updateSidebarLocks() {
  document.querySelectorAll('.nav-section').forEach((el, i) => {
    const check = canNavigateTo(i);
    if (!check.ok && i !== currentSection) {
      el.classList.add('locked');
    } else {
      el.classList.remove('locked');
    }
  });
}

function renderSections() {
  const main = document.getElementById('mainContent');
  main.innerHTML = courseData.sections.map((s, i) => `
    <div class="section" data-section="${i}">
      ${s.content}
      ${s.type === 'content_quiz' ? renderQuiz(quizzes[s.quizId], i) : ''}
      ${s.type === 'content_chart_dialogue' ? renderDialogue(quizzes[s.quizId], i) : ''}
      <div class="section-nav-buttons">
        <div>${i > 0 ? `<button class="btn btn-outline" onclick="navigateTo(${i-1})">← 上一章</button>` : ''}</div>
        <div>${i < courseData.sections.length - 1 ? `<button class="btn" onclick="markComplete(${i});navigateTo(${i+1})">下一章 →</button>` : `<button class="btn btn-success" id="completeCourseBtn" onclick="tryCompleteCourse(${i})">✓ 完成课程</button>`}</div>
      </div>
    </div>
  `).join('');
}

// ============================================================
// 导航与锁定
// ============================================================
function canNavigateTo(index) {
  if (index > 0 && !quiz1Answered) return { ok: false, msg: '请先完成第1章的选择题' };
if (index > 1 && !quiz2Answered) return { ok: false, msg: '请先完成第2章的选择题' };
if (index > 2 && (!dialogue1Answered || dialogue1Score < 60)) return { ok: false, msg: '请先完成第3章的AI模拟对话并达到60分' };
if (index > 3 && (!dialogue2Answered || dialogue2Score < 60)) return { ok: false, msg: '请先完成第4章的AI模拟对话并达到60分' };
if (index > 4 && (!dialogue3Answered || dialogue3Score < 60)) return { ok: false, msg: '请先完成第5章的AI模拟对话并达到60分' };
if (index > 5 && !quiz3Answered) return { ok: false, msg: '请先完成第6章的选择题' };
return { ok: true };
}

function navigateTo(index) {
  const check = canNavigateTo(index);
  if (!check.ok) {
    showToast('🔒 ' + check.msg, 'warning');
    return;
  }
  currentSection = index;
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.nav-section').forEach(n => n.classList.remove('active'));
  const section = document.querySelector(`.section[data-section="${index}"]`);
  if (section) section.classList.add('active');
  const navItem = document.querySelector(`.nav-section[data-index="${index}"]`);
  if (navItem) navItem.classList.add('active');
  updateProgress();
  updateNotesForSection(index);
  saveProgress();
  window.scrollTo({ top: 0, behavior: 'smooth' });
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('sidebarOverlay').classList.remove('show');
  const mhTitle = document.getElementById('mhTitle');
  if (mhTitle) mhTitle.textContent = courseData.sections[index].title;
}

function markComplete(index) {
  completedSections.add(index);
  updateProgress();
  saveProgress();
  showToast('「' + courseData.sections[index].title + '」已完成 ✓', 'success');
  checkCertificate();
}

function tryCompleteCourse(index) {
  if (!finalTaskSubmitted) {
  showToast('请先完成终极考核并提交答案', 'warning');
  return;
}
if (finalScore < 60) {
  showToast('终极考核得分未达60分（当前' + finalScore + '分）', 'warning');
  return;
}
markComplete(index);
}

function updateProgress() {
  const total = courseData.sections.length;
  const viewed = new Set([...completedSections, currentSection]);
  const pct = Math.round((viewed.size / total) * 100);
  document.getElementById('progressPercent').textContent = pct + '%';
  document.getElementById('progressFill').style.width = pct + '%';
  const mpbFill = document.getElementById('mpbFill');
  if (mpbFill) mpbFill.style.width = pct + '%';
  document.querySelectorAll('.nav-section').forEach((el, i) => {
    if (completedSections.has(i)) el.classList.add('completed');
  });
}

// ============================================================
// 选择题组件
// ============================================================
function renderQuiz(quiz, sectionIndex) {
  if (!quiz || quiz.isDialogue) return '';
  return `
    <div class="quiz-card" id="quiz-${quiz.quizId || sectionIndex}">
      <div style="display:flex;align-items:center;gap:8px;margin-bottom:12px;">
        <span style="font-size:24px;">✍️</span>
        <h3 style="font-size:16px;font-weight:700;">互动练习：选择题</h3>
      </div>
      <div class="quiz-question">${quiz.question}</div>
      <div class="quiz-options">
        ${quiz.options.map((opt, oi) => `
          <div class="quiz-option" data-option="${oi}" onclick="selectQuizOption(this, ${oi}, '${quiz.quizId || sectionIndex}')">
            <span class="quiz-option-label">${opt.label}</span>
            <span>${opt.text}</span>
          </div>
        `).join('')}
      </div>
      <div class="quiz-feedback" id="feedback-${quiz.quizId || sectionIndex}"></div>
    </div>
  `;
}

function selectQuizOption(el, optionIndex, quizId) {
  const isCorrect = optionIndex === quiz.correct;
if (quizId === 'quiz1') { if (quiz1Answered) return; quiz1Answered = true; quiz1Selected = optionIndex; }
else if (quizId === 'quiz2') { if (quiz2Answered) return; quiz2Answered = true; quiz2Selected = optionIndex; }
else if (quizId === 'quiz3') { if (quiz3Answered) return; quiz3Answered = true; quiz3Selected = optionIndex; }

const card = document.getElementById('quiz-' + quizId);
const feedback = document.getElementById('feedback-' + quizId);
const options = card.querySelectorAll('.quiz-option');

options.forEach(opt => {
  const idx = parseInt(opt.dataset.option);
  if (idx === quiz.correct) opt.classList.add('correct');
  else if (idx === optionIndex) opt.classList.add('wrong');
});

if (isCorrect) {
  card.classList.add('answered-correct');
  feedback.className = 'quiz-feedback show correct';
  feedback.innerHTML = quiz.feedback_correct;
} else {
  card.classList.add('answered-wrong');
  feedback.className = 'quiz-feedback show wrong';
  feedback.innerHTML = quiz.feedback_wrong;
}

saveProgress();
updateSidebarLocks();
}

// ============================================================
// AI 模拟对话组件
// ============================================================
function renderDialogue(quiz, sectionIndex) {
  if (!quiz || !quiz.isDialogue) return '';
  return `
    <div class="dialogue-container" id="dialogue-container">
      <div style="display:flex;align-items:center;gap:8px;margin-bottom:12px;">
        <span style="font-size:24px;">🤖</span>
        <h3 style="font-size:16px;font-weight:700;">互动练习：AI模拟对话</h3>
      </div>
      <div class="dialogue-scenario"><strong>📋 场景设定：</strong>${quiz.scenario}</div>
      <div class="customer-bubble">${quiz.question}</div>
      <textarea class="reply-input" id="dialogueInput" placeholder="请运用所学策略组织回应..."></textarea>
      <div class="dialogue-actions">
        <button class="btn" id="submitDialogueBtn" onclick="submitDialogue()">提交回答</button>
        <button class="btn btn-outline" onclick="resetDialogue()">重新作答</button>
      </div>
      <div class="ai-feedback-panel" id="dialogueFeedback"></div>
    </div>
  `;
}

function submitDialogue() {
  const quizId = courseData.sections[currentSection].quizId;
const quiz = quizzes[quizId];
const input = document.getElementById('dialogueInput');
if (!input || !quiz) return;

const text = input.value.trim();
if (!text) { showToast('请输入你的回应话术', 'warning'); return; }

let score = 0;
let maxScore = 0;
const found = [];
const missing = [];

quiz.expectedKeywords.forEach(k => {
  maxScore += k.weight;
  const hit = k.terms.some(t => text.toLowerCase().includes(t.toLowerCase()));
  if (hit) { score += k.weight; found.push(k.concept); }
  else { missing.push(k.concept); }
});

let lengthBonus = 0;
if (text.length >= 60) lengthBonus += 5;
if (text.length >= 120) lengthBonus += 5;
score += lengthBonus;
maxScore += 10;
score = Math.min(100, Math.round(score));

if (quizId === 'dialogue1') { dialogue1Answered = true; dialogue1Score = score; dialogue1Text = text; }
else if (quizId === 'dialogue2') { dialogue2Answered = true; dialogue2Score = score; dialogue2Text = text; }
else if (quizId === 'dialogue3') { dialogue3Answered = true; dialogue3Score = score; dialogue3Text = text; }

const panel = document.getElementById('dialogueFeedback');
panel.style.display = 'block';
let level = score >= 80 ? 'high' : score >= 60 ? 'medium' : 'low';
const foundTags = found.map(c => `<span class="keyword-tag found">${c}</span>`).join('') || '<span class="keyword-tag missing">暂未命中</span>';
const missingTags = missing.map(c => `<span class="keyword-tag missing">${c}</span>`).join('') || '<span class="keyword-tag found">全部覆盖</span>';

panel.innerHTML = `
  <div class="score-display"><div class="score-circle ${level}">${score}</div></div>
  <p style="text-align:center;font-weight:700;margin:8px 0;">${score >= 60 ? '✅ 通过' : '❌ 未通过（需≥60分）'}</p>
  <p style="margin-top:12px;font-size:13px;"><strong>已覆盖维度：</strong></p>
  <div class="keywords-result">${foundTags}</div>
  <p style="margin-top:12px;font-size:13px;"><strong>未覆盖维度：</strong></p>
  <div class="keywords-result">${missingTags}</div>
  <div class="highlight-box ${score >= 60 ? 'success' : 'warning'}" style="margin-top:16px;">
    <p style="font-size:13px;">${text.length < 60 ? '建议：话术可以再多展开一些，尽量包含具体细节。' : '很好，你的回答已经覆盖了部分关键维度。请继续练习未命中的维度。'}</p>
  </div>
`;

input.disabled = true;
const btn = document.getElementById('submitDialogueBtn');
if (btn) btn.disabled = true;

saveProgress();
updateSidebarLocks();
}

function resetDialogue() {
  const quizId = courseData.sections[currentSection].quizId;
const input = document.getElementById('dialogueInput');
if (input) { input.value = ''; input.disabled = false; }
const btn = document.getElementById('submitDialogueBtn');
if (btn) btn.disabled = false;
const panel = document.getElementById('dialogueFeedback');
if (panel) { panel.style.display = 'none'; panel.innerHTML = ''; }

if (quizId === 'dialogue1') { dialogue1Answered = false; dialogue1Score = 0; dialogue1Text = ''; }
else if (quizId === 'dialogue2') { dialogue2Answered = false; dialogue2Score = 0; dialogue2Text = ''; }
else if (quizId === 'dialogue3') { dialogue3Answered = false; dialogue3Score = 0; dialogue3Text = ''; }

saveProgress();
updateSidebarLocks();
}

// ============================================================
// 终极考核组件
// ============================================================
function setupFinalTaskListener() {
  const input = document.getElementById('finalTaskInput');
  if (input) input.addEventListener('input', function() {
    document.getElementById('finalCharCount').textContent = this.value.length + ' / 500字';
  });
}

function submitFinalTask() {
  const input = document.getElementById('finalTaskInput');
if (!input) return;

const text = input.value.trim();
if (!text) { showToast('请输入你的考核话术', 'warning'); return; }
if (finalTaskSubmitted) return;

const dim1Items = [
  { name: '学情反馈', terms: ['果果','学习','进步','外化','效果','老师反馈','孩子','掌握','作业','出勤'] },
  { name: '课程规划', terms: ['规划','S5','S6','九阶','体系','衔接','基础','阶段','小泡芙'] },
  { name: '方案推荐', terms: ['课包','方案','课时','5888','45','打卡','剩余','10节','长期','短期','多娃','SVIP'] },
  { name: '推单收单', terms: ['优惠','现在','确定','报名','链接','截图','缴费','登记','老带新'] }
];

const dim2Items = [
  { name: '共情理解', terms: ['理解','知道','担心','感受','明白','顾虑','确实','害羞','腼腆','鼓励','关注'], weight: 20 },
  { name: '价值塑造', terms: ['重要性','紧迫性','唯一性','思维','能力','长期','未来','AI','大宝','多娃','SVIP','老学员'], weight: 25 },
  { name: '具体方案', terms: ['方案','课包','课时','价格','单价','总价','赠品','优惠','5888','豌豆币','打卡'], weight: 25 },
  { name: '闭环承诺', terms: ['跟进','反馈','服务','登记','兑换','确认','安排','请假','补课','停课'], weight: 20 }
];

function fluencyScore(len) {
  if (len < 60) return 25;
  if (len < 100) return 45;
  if (len < 150) return 65;
  if (len < 200) return 85;
  return 100;
}

let d1 = 0;
dim1Items.forEach(item => {
  if (item.terms.some(t => text.includes(t))) d1 += 25;
});
let d2 = 0;
dim2Items.forEach(item => {
  if (item.terms.some(t => text.includes(t))) d2 += item.weight;
});
const d3 = fluencyScore(text.length);
finalScore = Math.round((d1 + d2 + d3) / 3);
finalTaskSubmitted = true;

const panel = document.getElementById('finalFeedback');
panel.style.display = 'block';
const getLevel = s => s >= 80 ? 'high' : s >= 60 ? 'medium' : 'low';
const getVerdict = s => s >= 80 ? '优秀' : s >= 60 ? '通过' : '未通过';

panel.innerHTML = `
  <div class="score-display"><div class="score-circle ${getLevel(finalScore)}">${finalScore}</div></div>
  <p style="text-align:center;font-weight:700;font-size:16px;margin:8px 0;">${getVerdict(finalScore)}</p>
  <div class="eval-dimensions" style="margin-top:16px;">
    <div class="eval-dim"><h4>流程规范性</h4><div class="stars">${'⭐'.repeat(Math.round(d1/20))}</div><p>${d1}分</p></div>
    <div class="eval-dim"><h4>说服力</h4><div class="stars">${'⭐'.repeat(Math.round(d2/20))}</div><p>${d2}分</p></div>
    <div class="eval-dim"><h4>流畅度</h4><div class="stars">${'⭐'.repeat(Math.round(d3/20))}</div><p>${d3}分</p></div>
  </div>
  <div class="highlight-box ${finalScore >= 60 ? 'success' : 'warning'}" style="margin-top:20px;">
    <p><strong>${finalScore >= 60 ? '✅ 已通过终极考核' : '❌ 未通过，建议回到对应章节复习后再试'}</strong></p>
    <p style="margin-top:8px;font-size:13px;">维度反馈：流程规范性 ${d1} 分、说服力 ${d2} 分、流畅度 ${d3} 分。</p>
    <p style="margin-top:8px;font-size:13px;">💡 提升建议：确保话术完整覆盖「学情反馈→课程规划→方案推荐→推单收单」，并用具体数字、优惠时效和价值塑造增强说服力。</p>
  </div>
`;

input.disabled = true;
const btn = document.getElementById('finalSubmitBtn');
if (btn) btn.disabled = true;

saveProgress();
updateSidebarLocks();
checkCertificate();
}

function resetFinalTask() {
  finalTaskSubmitted = false;
finalScore = 0;
const input = document.getElementById('finalTaskInput');
if (input) { input.value = ''; input.disabled = false; }
const btn = document.getElementById('finalSubmitBtn');
if (btn) btn.disabled = false;
const panel = document.getElementById('finalFeedback');
if (panel) { panel.style.display = 'none'; panel.innerHTML = ''; }
const cc = document.getElementById('finalCharCount');
if (cc) cc.textContent = '0 / 500字';

saveProgress();
updateSidebarLocks();
}

// ============================================================
// 键盘快捷键
// ============================================================
function setupQuizListeners() {
  document.addEventListener('keydown', function(e) {
    if (e.ctrlKey && e.key === 'Enter') {
      const dialogueInput = document.getElementById('dialogueInput');
      if (dialogueInput && document.activeElement === dialogueInput) submitDialogue();
    }
  });
}

// ============================================================
// 计时器
// ============================================================
function startTimer() {
  const saved = localStorage.getItem(LS_PREFIX + '_study_seconds');
  if (saved) studySeconds = parseInt(saved);
  updateTimerDisplay();
  timerInterval = setInterval(() => {
    studySeconds++;
    updateTimerDisplay();
    if (studySeconds % 10 === 0) localStorage.setItem(LS_PREFIX + '_study_seconds', studySeconds);
  }, 1000);
}

function updateTimerDisplay() {
  const mins = Math.floor(studySeconds / 60);
  const secs = studySeconds % 60;
  const timeStr = String(mins).padStart(2, '0') + ':' + String(secs).padStart(2, '0');
  const el = document.getElementById('timerDisplay');
  if (el) el.textContent = timeStr;
  const mhTimer = document.getElementById('mhTimer');
  if (mhTimer) mhTimer.textContent = '⏱ ' + timeStr;
}

// ============================================================
// 笔记
// ============================================================
function toggleNotes() {
  document.getElementById('notesPanel').classList.toggle('open');
}
function updateNotesForSection(index) {
  document.getElementById('notesChapterLabel').textContent = courseData.sections[index].title;
  const saved = JSON.parse(localStorage.getItem(LS_PREFIX + '_notes') || '{}');
  document.getElementById('notesTextarea').value = saved[index] || '';
}
function loadNotes() {
  const saved = JSON.parse(localStorage.getItem(LS_PREFIX + '_notes') || '{}');
  const ta = document.getElementById('notesTextarea');
  if (ta) {
    ta.value = saved[currentSection] || '';
    ta.addEventListener('input', function() {
      const all = JSON.parse(localStorage.getItem(LS_PREFIX + '_notes') || '{}');
      all[currentSection] = this.value;
      localStorage.setItem(LS_PREFIX + '_notes', JSON.stringify(all));
    });
  }
}

// ============================================================
// 进度持久化
// ============================================================
function saveProgress() {
  const state = {
    completedSections: [...completedSections],
    quiz1Answered, quiz2Answered, quiz3Answered,
quiz1Selected, quiz2Selected, quiz3Selected,
dialogue1Answered, dialogue1Score, dialogue1Text, dialogue2Answered, dialogue2Score, dialogue2Text, dialogue3Answered, dialogue3Score, dialogue3Text,
finalTaskSubmitted, finalScore
  };
  localStorage.setItem(LS_PREFIX + '_progress', JSON.stringify(state));
}

function loadProgress() {
  try {
    const saved = JSON.parse(localStorage.getItem(LS_PREFIX + '_progress'));
    if (saved) {
      completedSections = new Set(saved.completedSections || []);
      quiz1Answered = saved.quiz1Answered || false;
quiz2Answered = saved.quiz2Answered || false;
quiz3Answered = saved.quiz3Answered || false;
quiz1Selected = saved.quiz1Selected !== undefined ? saved.quiz1Selected : -1;
quiz2Selected = saved.quiz2Selected !== undefined ? saved.quiz2Selected : -1;
quiz3Selected = saved.quiz3Selected !== undefined ? saved.quiz3Selected : -1;
dialogue1Answered = saved.dialogue1Answered || false;
dialogue1Score = saved.dialogue1Score || 0;
dialogue1Text = saved.dialogue1Text || '';
dialogue2Answered = saved.dialogue2Answered || false;
dialogue2Score = saved.dialogue2Score || 0;
dialogue2Text = saved.dialogue2Text || '';
dialogue3Answered = saved.dialogue3Answered || false;
dialogue3Score = saved.dialogue3Score || 0;
dialogue3Text = saved.dialogue3Text || '';
finalTaskSubmitted = saved.finalTaskSubmitted || false;
finalScore = saved.finalScore || 0;
      updateProgress();
      updateSidebarLocks();
    }
  } catch (e) {}
}

function applyLoadedState() {
  [1, 2, 3].forEach(i => {
    const answered = i === 1 ? quiz1Answered : i === 2 ? quiz2Answered : quiz3Answered;
    const selected = i === 1 ? quiz1Selected : i === 2 ? quiz2Selected : quiz3Selected;
    const quizId = 'quiz' + i;
    if (!answered) return;
    const quiz = quizzes[quizId];
    const card = document.getElementById('quiz-' + quizId);
    const feedback = document.getElementById('feedback-' + quizId);
    if (!card || !quiz) return;
    const options = card.querySelectorAll('.quiz-option');
    options.forEach(opt => {
      const idx = parseInt(opt.dataset.option);
      if (idx === quiz.correct) opt.classList.add('correct');
      else if (idx === selected) opt.classList.add('wrong');
    });
    const isCorrect = selected === quiz.correct;
    if (isCorrect) {
      card.classList.add('answered-correct');
      feedback.className = 'quiz-feedback show correct';
      feedback.innerHTML = quiz.feedback_correct;
    } else {
      card.classList.add('answered-wrong');
      feedback.className = 'quiz-feedback show wrong';
      feedback.innerHTML = quiz.feedback_wrong;
    }
  });

  const dialogues = [
    { id: 'dialogue1', answered: dialogue1Answered, score: dialogue1Score },
    { id: 'dialogue2', answered: dialogue2Answered, score: dialogue2Score },
    { id: 'dialogue3', answered: dialogue3Answered, score: dialogue3Score }
  ];
  dialogues.forEach(d => {
    if (!d.answered) return;
    const input = document.getElementById('dialogueInput');
    const btn = document.getElementById('submitDialogueBtn');
    const panel = document.getElementById('dialogueFeedback');
    if (input) input.disabled = true;
    if (btn) btn.disabled = true;
    if (!panel) return;
    panel.style.display = 'block';
    const level = d.score >= 80 ? 'high' : d.score >= 60 ? 'medium' : 'low';
    panel.innerHTML = `<div class="score-display"><div class="score-circle ${level}">${d.score}</div></div><p style="text-align:center;font-weight:700;">已提交，${d.score >= 60 ? '✅ 通过' : '❌ 未通过'}</p>`;
  });

  if (finalTaskSubmitted) {
    const input = document.getElementById('finalTaskInput');
    const btn = document.getElementById('finalSubmitBtn');
    const panel = document.getElementById('finalFeedback');
    if (input) input.disabled = true;
    if (btn) btn.disabled = true;
    if (panel) {
      panel.style.display = 'block';
      const getLevel = s => s >= 80 ? 'high' : s >= 60 ? 'medium' : 'low';
      const getVerdict = s => s >= 80 ? '优秀' : s >= 60 ? '通过' : '未通过';
      panel.innerHTML = `<div class="score-display"><div class="score-circle ${getLevel(finalScore)}">${finalScore}</div></div><p style="text-align:center;font-weight:700;">${getVerdict(finalScore)}</p>`;
    }
  }
}

// ============================================================
// 结业证书
// ============================================================
function checkCertificate() {
  let allDone = completedSections.size >= courseData.sections.length;
  allDone = allDone && quiz1Answered && quiz2Answered && quiz3Answered
  && dialogue1Answered && dialogue2Answered && dialogue3Answered
  && finalTaskSubmitted && finalScore >= 60;
  if (allDone) {
    setTimeout(() => {
      showToast('🏆 恭喜完成全部课程！点击领取结业证书', 'success');
      document.getElementById('certStudentName').textContent = '请填写姓名';
      document.getElementById('certScore').textContent = '综合评定：通过';
      document.getElementById('certFinalScore').textContent = '终极考核得分：' + (typeof finalScore !== 'undefined' ? finalScore : '—') + ' 分';
      document.getElementById('certDate').textContent = new Date().toLocaleDateString('zh-CN', { year: 'numeric', month: 'long', day: 'numeric' });
      document.getElementById('certOverlay').style.display = 'flex';
    }, 1000);
  }
}

function closeCertificate() {
  document.getElementById('certOverlay').style.display = 'none';
}

function printCertificate() {
  const cert = document.getElementById('certPaper');
  const win = window.open('', '_blank', 'width=750,height=600');
  win.document.write('<html><head><meta charset="UTF-8"><title>结业证书</title><style>');
  win.document.write('body{font-family:"PingFang SC","Microsoft YaHei",sans-serif;display:flex;justify-content:center;align-items:center;min-height:100vh;margin:0;background:#f1f5f9;}');
  win.document.write('.cert{background:#fff;width:700px;padding:48px 36px;text-align:center;border:2px solid #e2e8f0;border-radius:12px;}');
  win.document.write('.cert h1{font-size:28px;color:#1d4ed8;margin-bottom:4px;}');
  win.document.write('.cert .sub{font-size:12px;color:#64748b;letter-spacing:0.1em;margin-bottom:24px;}');
  win.document.write('.cert .body{font-size:15px;line-height:2;color:#1e293b;}');
  win.document.write('.cert .name{display:inline-block;border-bottom:2px solid #2563eb;min-width:120px;padding:4px 12px;margin:0 4px;}');
  win.document.write('.cert .course{font-weight:700;color:#1d4ed8;margin:8px 0;}');
  win.document.write('.cert .score{margin:20px 0 4px;font-size:16px;font-weight:600;color:#10b981;}');
  win.document.write('.cert .final-score{margin:4px 0 20px;font-size:14px;font-weight:600;color:#1d4ed8;}');
  win.document.write('.cert .footer{display:flex;justify-content:space-between;font-size:12px;color:#64748b;margin-top:32px;border-top:1px solid #e2e8f0;padding-top:16px;}');
  win.document.write('</style></head><body><div class="cert">');
  win.document.write(cert.innerHTML.replace(/<button[^>]*>.*?<\/button>/g, ''));
  win.document.write('</div></body></html>');
  win.document.close();
  setTimeout(() => win.print(), 500);
}

// ============================================================
// Toast & Sidebar Toggle
// ============================================================
function showToast(msg, type) {
  const existing = document.querySelector('.toast');
  if (existing) existing.remove();
  const toast = document.createElement('div');
  toast.className = 'toast ' + type;
  toast.textContent = msg;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 2500);
}

function toggleSidebar() {
  document.getElementById('sidebar').classList.toggle('open');
  document.getElementById('sidebarOverlay').classList.toggle('show');
}

document.addEventListener('DOMContentLoaded', init);
