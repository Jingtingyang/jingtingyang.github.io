const translations = {
  en: {
    back: '← All Projects', category: 'INVESTMENT RESEARCH / MACHINE LEARNING',
    heroTitle: 'Can Machine Learning Help Investors Pick Better Stocks?',
    heroLead: 'I tested whether patterns hidden in financial data could help investors make better stock-selection decisions, not just better predictions.',
    explore: 'Explore the Research ↓', resultsJump: 'See Key Results ↗', meta1: 'UCL MSc Finance with Data Science', meta2: 'Independent Research Case Study',
    stat1: 'Prediction models', stat2: 'Model experiments', stat3: 'Best annualised Sharpe ratio', stat4: 'Feature-set sizes tested',
    labelProblem: 'THE QUESTION', problemTitle: 'Thousands of stocks. Which ones are worth choosing?',
    problemP1: 'Investors have access to huge amounts of information about companies: prices, past returns, profitability, valuation and much more. But having more data does not automatically lead to better decisions.',
    problemP2: 'My research asked a practical question: can machine learning identify useful signals from company data and turn those signals into an investment strategy with attractive returns relative to its risks?',
    problemQuote: 'The goal was not simply to predict stock returns. It was to test whether those predictions could improve investment decisions.',
    labelProcess: 'THE APPROACH', processTitle: 'From raw data to an investment decision', processIntro: 'I designed a four-step process that resembles how an investment research team might evaluate a new strategy.',
    step1Title: 'Gather the evidence', step1Text: 'Organise historical US stock data and company characteristics into five sets, ranging from 20 to 100 indicators.',
    step2Title: 'Train three models', step2Text: 'Compare LASSO, Random Forest and XGBoost to estimate which stocks may perform better or worse.',
    step3Title: 'Build a portfolio', step3Text: 'Use model rankings to form a long–short portfolio: buy higher-ranked stocks and short lower-ranked stocks.',
    step4Title: 'Test real-world value', step4Text: 'Assess risk-adjusted returns, turnover, trading costs and performance across different market conditions.',
    processNote: 'The models were evaluated on out-of-sample data to reduce the risk of judging them only by how well they fit historical training data.',
    labelResults: 'THE RESULTS', resultsTitle: 'Did machine learning improve the investment outcome?',
    resultsIntro: 'For the 20-feature experiment, XGBoost produced the highest risk-adjusted performance of the three models.', highlightLabel: 'XGBoost Sharpe ratio',
    chartTitle: 'Risk-adjusted portfolio performance', chartTag: 'Core20 · Out-of-sample',
    chartExplain: 'Sharpe ratio measures return relative to risk. Higher is generally better, but it does not guarantee future results.',
    chartFootnote: 'Annualised Sharpe ratios, Core20 long–short portfolios: LASSO 1.5428; Random Forest 1.6846; XGBoost 1.8534. Historical backtest, not live investment performance.',
    insight1Title: 'More information is not always better', insight1Text: 'Adding more company characteristics did not consistently improve performance. A smaller, carefully selected set of signals could work better.',
    insight2Title: 'A good prediction must survive trading costs', insight2Text: "The leading strategy's Sharpe ratio fell from about 1.85 before costs to about 1.65 at a 50-basis-point cost assumption.",
    labelReality: 'THE REALITY CHECK', realityTitle: 'What happens outside a perfect backtest?',
    realityIntro: 'Strong historical results are only a starting point. I also examined what could make the strategy less reliable in practice.',
    reality1Title: 'Trading is not free', reality1Text: 'Transaction costs reduce performance, especially when a portfolio changes its holdings frequently.', costLabel: 'Sharpe at 50 bps',
    reality2Title: 'Markets behave differently', reality2Text: 'I compared bull and bear market periods. Bear-market findings should be treated cautiously because that sample covered only 12 months.', bearLabel: 'Bear-market sample', bearValue: '12 months',
    reality3Title: 'Models need explanations', reality3Text: 'SHAP analysis helped identify which signals mattered, with short-term reversal and momentum among the most influential.', signalLabel: 'Important signals', signalValue: 'Momentum + Reversal',
    labelTakeaway: 'THE TAKEAWAY', takeawayTitle: 'Better investing takes more than a clever algorithm.',
    takeawayP1: 'This project showed that machine learning can uncover useful stock-selection signals, but the best approach is not necessarily the most complex or the one with the most input variables.',
    takeawayP2: 'For me, the key lesson was to connect statistical modelling with the questions investors actually face: Is the strategy profitable after costs? How much risk does it take? And can we explain why it works?',
    labelTechnical: 'FOR TECHNICAL READERS', technicalTitle: 'Want to go deeper?', technicalIntro: 'A short summary of the methods behind the research, for readers who want more detail.', optional: 'OPTIONAL READING',
    detail1Title: 'Which models did you compare?', detail1Text: 'LASSO is a regularised linear model that can shrink less useful coefficients. Random Forest combines many decision trees. XGBoost builds trees sequentially to correct earlier errors. Each was tested across five feature sets (Core20, Core40, Core60, Core80 and Core100), producing 15 combinations.',
    detail2Title: 'How did you measure investment value?', detail2Text: 'I ranked stocks by predicted returns, formed an equally weighted top-minus-bottom decile long–short portfolio, and evaluated annualised returns, volatility, Sharpe ratio, maximum drawdown and turnover. Trading cost assumptions included 10, 25 and 50 basis points.',
    detail3Title: 'How did you guard against overfitting?', detail3Text: 'The research separated model development from out-of-sample evaluation using historical training, validation and test periods. It also compared performance across feature-set sizes and market regimes. Historical backtests still carry data, implementation and regime-change risks.',
    detail4Title: 'What were the main limitations?', detail4Text: 'Results depend on the historical sample, data quality, rebalancing assumptions and transaction cost estimates. The bear-market subsample was short. Backtested returns should not be interpreted as guaranteed or directly investable returns.',
    footerDesc: 'Finance · Data Science · Investment Research', footerBack: '← Back to all projects', copyright: '© 2026 Jingting Yang. Research portfolio; not investment advice.'
  },
  zh: {
    back: '← 返回全部项目', category: '投资研究 / 机器学习',
    heroTitle: '机器学习真的能帮助投资者选出更好的股票吗？',
    heroLead: '我研究金融数据中隐藏的规律，能否帮助投资者做出更好的选股决策，而不只是让模型的预测数字更准确。',
    explore: '了解研究过程 ↓', resultsJump: '直接查看研究结果 ↗', meta1: '伦敦大学学院 · 金融与数据科学硕士', meta2: '独立研究项目',
    stat1: '种预测模型', stat2: '组模型实验', stat3: '最佳年化夏普比率', stat4: '种特征集规模',
    labelProblem: '研究问题', problemTitle: '面对成千上万只股票，怎样找到更值得投资的公司？',
    problemP1: '投资者可以获得大量企业信息，例如股价、历史收益、盈利能力和估值指标。但数据越多，并不意味着投资决策就一定越好。',
    problemP2: '我的研究希望回答一个实际问题：机器学习能否从企业数据中找出有用的投资信号，并将这些信号转化为风险与收益表现更有吸引力的投资策略？',
    problemQuote: '研究的目标不只是预测股票收益，而是检验这些预测能否真正改善投资决策。',
    labelProcess: '研究过程', processTitle: '从原始数据到投资决策', processIntro: '我将研究设计成四个步骤，模拟投资研究团队评估新策略的过程。',
    step1Title: '整理研究数据', step1Text: '整理美国股票历史数据与公司特征，构建从20项到100项指标的五组数据。',
    step2Title: '训练三种模型', step2Text: '比较 LASSO、随机森林和 XGBoost，预测哪些股票未来可能表现较好或较差。',
    step3Title: '模拟构建投资组合', step3Text: '根据模型预测排序，买入排名靠前的股票，同时卖空排名靠后的股票。',
    step4Title: '检验投资价值', step4Text: '比较风险调整后收益、换手率、交易成本，以及策略在不同市场环境下的表现。',
    processNote: '模型在训练样本之外的数据上接受检验，以减少仅凭历史训练表现评价模型的风险。',
    labelResults: '研究成果', resultsTitle: '机器学习有没有改善投资组合表现？',
    resultsIntro: '在使用20项核心指标的实验中，XGBoost 在三种模型里取得了最高的风险调整后表现。', highlightLabel: 'XGBoost 夏普比率',
    chartTitle: '投资组合的风险调整后表现', chartTag: 'Core20 · 样本外测试',
    chartExplain: '夏普比率衡量投资者每承担一单位波动风险所获得的收益表现。通常越高越好，但不能保证未来收益。',
    chartFootnote: 'Core20 多空投资组合的年化夏普比率：LASSO 1.5428；随机森林 1.6846；XGBoost 1.8534。以上为历史回测，不是真实账户投资业绩。',
    insight1Title: '更多指标，不一定意味着更好结果', insight1Text: '增加公司特征并没有持续改善模型表现。较少但更有用的指标，有时反而能带来更好的投资结果。',
    insight2Title: '好的预测还需要经受交易成本考验', insight2Text: '在假设每次交易成本为50个基点时，领先策略的夏普比率从约1.85下降至约1.65。',
    labelReality: '现实检验', realityTitle: '离开理想化的回测环境，策略还能可靠吗？',
    realityIntro: '漂亮的历史结果只是起点。我还研究了哪些现实因素可能削弱策略表现。',
    reality1Title: '交易并不是免费的', reality1Text: '买卖股票会产生交易成本，尤其是投资组合频繁调整持仓时。', costLabel: '50基点成本下的夏普比率',
    reality2Title: '不同市场环境会改变结果', reality2Text: '我比较了牛市与熊市的表现。但熊市样本只有12个月，因此相关结论需要谨慎解读。', bearLabel: '熊市样本长度', bearValue: '12个月',
    reality3Title: '模型的判断需要解释', reality3Text: '通过 SHAP 分析，我发现短期反转和动量是影响预测结果的重要信号。', signalLabel: '重要预测信号', signalValue: '动量 + 短期反转',
    labelTakeaway: '核心结论', takeawayTitle: '好的投资研究，不只是拥有一个聪明的算法。',
    takeawayP1: '研究表明，机器学习可以帮助识别有用的选股信号，但最复杂的模型或最多的输入指标，并不一定带来最佳结果。',
    takeawayP2: '对我而言，最重要的收获是将统计模型与真实投资问题联系起来：扣除成本后还赚钱吗？承担了多少风险？我们能解释策略为什么有效吗？',
    labelTechnical: '专业技术说明', technicalTitle: '想进一步了解研究方法？', technicalIntro: '为金融和技术背景的读者准备了简明的研究方法说明。', optional: '选读内容',
    detail1Title: '比较了哪些模型？', detail1Text: 'LASSO 是一种能压缩不重要系数的线性模型；随机森林综合多棵决策树的判断；XGBoost 则逐步修正先前预测的误差。三种模型分别使用 Core20、Core40、Core60、Core80、Core100 五组特征，总计15种实验组合。',
    detail2Title: '如何衡量实际投资价值？', detail2Text: '根据预测收益对股票排序，构建等权重的前10%减后10%多空组合，评估年化收益、波动率、夏普比率、最大回撤和换手率，并测试10、25和50个基点的交易成本假设。',
    detail3Title: '如何降低过拟合风险？', detail3Text: '研究将历史数据划分为训练、验证和样本外测试阶段，并比较不同特征规模及市场状态下的结果。但历史回测仍可能受到数据质量、交易实施和市场环境变化的影响。',
    detail4Title: '研究有哪些局限？', detail4Text: '结果取决于历史样本、数据质量、调仓规则和交易成本假设；熊市样本也较短。历史回测结果不代表未来收益保证，也不等于可以直接实现的投资回报。',
    footerDesc: '金融 · 数据科学 · 投资研究', footerBack: '← 返回全部研究项目', copyright: '© 2026 杨景亭。本页为研究作品展示，不构成投资建议。'
  }
};
function switchLanguage(lang) {
  if (!translations[lang]) return;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (Object.prototype.hasOwnProperty.call(translations[lang], key)) el.textContent = translations[lang][key];
  });
  document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
  document.querySelectorAll('.lang-switch button').forEach(button => {
    const active = button.dataset.lang === lang;
    button.classList.toggle('active', active);
    button.setAttribute('aria-pressed', String(active));
  });
  try { localStorage.setItem('preferredLanguage', lang); } catch (_) {}
}
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.lang-switch button').forEach(button => button.addEventListener('click', () => switchLanguage(button.dataset.lang)));
  let lang = 'en';
  try { lang = localStorage.getItem('preferredLanguage') || 'en'; } catch (_) {}
  switchLanguage(lang);
});
