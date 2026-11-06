
const translations = {
  en: {
    // Navigation
    logo: "JINGTING YANG",
    navAbout: "About",
    navProjects: "Projects",
    navSkills: "Skills",
    navContact: "Contact",

    // Hero
    heroEyebrow: "FINANCE · DATA SCIENCE · RESEARCH",
    heroTitle: "Jingting Yang",
    heroSubtitle: "Finance & Data Science Graduate",
    heroDescription:
      "MSc Finance with Data Science at University College London. Interested in quantitative research, financial modelling and investment analysis.",
    explore: "Explore My Work",
    getInTouch: "Get in Touch",

    // About
    aboutEyebrow: "01 / ABOUT",
    aboutTitle: "About Me",
    aboutDescription:
      "I combine financial theory, econometrics and programming to investigate financial markets and investment strategies. My academic work includes cross-sectional asset return prediction, financial time-series analysis and portfolio performance evaluation.",

    // Education
    educationTitle: "Education",
    ucl: "University College London",
    uclDegree: "MSc Finance with Data Science",
    liverpool: "University of Liverpool",
    liverpoolDegree:
      "BSc Economics · Upper Second-Class Honours (2:1)",

    // Projects
    projectsEyebrow: "02 / SELECTED WORK",
    projectsTitle: "Research & Projects",
    projectsDescription:
      "Selected projects in financial markets, valuation, econometrics, derivatives and data analytics.",

    // Carry Trade
    carryTag: "FOREIGN EXCHANGE",
    carryTitle: "FX Carry Trade Strategy",
    carryDescription:
      "Exploring interest rate differentials, exchange rate movements and uncovered interest rate parity to understand currency carry trade returns and risks.",
    carryTech: "FX Markets · UIP · Risk Analysis",

    // Valuation
    valuationTag: "CORPORATE FINANCE",
    valuationTitle: "Corporate Valuation & Investment Analysis",
    valuationDescription:
      "Applying discounted cash flow valuation, comparable company analysis and cost of capital estimation to evaluate corporate value and investment decisions.",
    valuationTech: "DCF · WACC · Comparable Valuation",

    // Time Series
    timeTag: "FINANCIAL ECONOMETRICS",
    timeTitle: "Financial Time-Series Analysis",
    timeDescription:
      "Investigating financial time-series behaviour, stationarity and volatility dynamics using econometric models and statistical testing.",
    timeTech: "Python · ARIMA · GARCH",

    // Derivatives
    derivativesTag: "DERIVATIVES",
    derivativesTitle: "Futures & Options Analysis",
    derivativesDescription:
      "Exploring futures pricing, option valuation and hedging strategies using financial derivatives theory and quantitative methods.",
    derivativesTech: "Futures · Black-Scholes · Hedging",

    // SQL
    sqlTag: "DATA ANALYTICS",
    sqlTitle: "SQL Data Cleaning & Transformation",
    sqlDescription:
      "Using SQL to clean, transform and organise structured datasets, including handling missing values, duplicates and data inconsistencies.",
    sqlTech: "SQL · Data Cleaning · Data Transformation",

    // Big Data
    bigTag: "BIG DATA & MACHINE LEARNING",
    bigTitle: "Big Data & Machine Learning in Finance",
    bigDescription:
      "Analysing large-scale financial datasets and investigating the predictive power of firm characteristics for stock returns. Applying machine learning techniques and evaluating investment strategies through risk-adjusted performance metrics.",
    bigTech:
      "Python · Pandas · Scikit-learn · Machine Learning",
    viewProject: "View Project →",

    // Skills
    skillsEyebrow: "03 / EXPERTISE",
    skillsTitle: "Technical Skills",
    skillBloomberg: "Bloomberg Terminal",
    skillML: "Machine Learning",
    skillEconometrics: "Financial Econometrics",
    skillModelling: "Financial Modelling",
    skillPortfolio: "Portfolio Analytics",

    // Contact
    contactEyebrow: "04 / CONTACT",
    contactTitle: "Let's Connect",
    contactDescription:
      "Open to opportunities in financial research, investment analytics and quantitative finance.",
    emailMe: "Email Me",

    // Footer
    footer: "© 2026 Jingting Yang. All rights reserved."
  },

  zh: {
    // 导航栏
    logo: "杨景亭",
    navAbout: "关于我",
    navProjects: "研究项目",
    navSkills: "专业技能",
    navContact: "联系方式",

    // 首页
    heroEyebrow: "金融 · 数据科学 · 投资研究",
    heroTitle: "杨景亭",
    heroSubtitle: "金融与数据科学硕士",
    heroDescription:
      "就读于伦敦大学学院金融与数据科学硕士项目，关注量化研究、金融建模和投资分析。",
    explore: "查看研究项目",
    getInTouch: "联系我",

    // 关于我
    aboutEyebrow: "01 / 关于我",
    aboutTitle: "个人简介",
    aboutDescription:
      "结合金融理论、计量经济学与编程方法研究金融市场及投资策略。学术项目涉及股票横截面收益预测、金融时间序列分析与投资组合绩效评估。",

    // 教育背景
    educationTitle: "教育背景",
    ucl: "伦敦大学学院（UCL）",
    uclDegree: "金融与数据科学理学硕士",
    liverpool: "利物浦大学",
    liverpoolDegree:
      "经济学理学学士 · 英国二等一荣誉学位（2:1）",

    // 研究项目
    projectsEyebrow: "02 / 研究作品",
    projectsTitle: "研究与项目经历",
    projectsDescription:
      "涵盖外汇市场、公司估值、金融计量、衍生品和数据分析的研究项目。",

    // 外汇套息交易
    carryTag: "外汇市场",
    carryTitle: "外汇套息交易策略",
    carryDescription:
      "研究利差、汇率变动与无抛补利率平价（UIP），分析外汇套息交易的收益来源及相关风险。",
    carryTech: "外汇市场 · UIP · 风险分析",

    // 公司估值
    valuationTag: "公司金融",
    valuationTitle: "公司估值与投资分析",
    valuationDescription:
      "运用现金流折现法（DCF）、可比公司分析及资本成本估算，评估企业价值和投资决策。",
    valuationTech: "DCF · WACC · 可比公司估值",

    // 时间序列
    timeTag: "金融计量经济学",
    timeTitle: "金融时间序列分析",
    timeDescription:
      "运用计量模型与统计检验研究金融时间序列的平稳性、动态特征及波动率变化。",
    timeTech: "Python · ARIMA · GARCH",

    // 期货与期权
    derivativesTag: "金融衍生品",
    derivativesTitle: "期货与期权分析",
    derivativesDescription:
      "结合衍生品定价理论与定量方法，研究期货定价、期权估值和风险对冲策略。",
    derivativesTech: "期货 · Black-Scholes · 风险对冲",

    // SQL
    sqlTag: "数据分析",
    sqlTitle: "SQL 数据清洗与转换",
    sqlDescription:
      "使用 SQL 清洗、转换和整理结构化数据，包括处理缺失值、重复记录及数据不一致问题。",
    sqlTech: "SQL · 数据清洗 · 数据转换",

    // 大数据与机器学习
    bigTag: "金融大数据与机器学习",
    bigTitle: "金融大数据与机器学习研究",
    bigDescription:
      "基于大规模金融数据，研究公司特征对股票收益率的预测能力，并通过机器学习模型评估投资策略的风险调整后表现。",
    bigTech:
      "Python · Pandas · Scikit-learn · 机器学习",
    viewProject: "查看研究项目 →",

    // 专业技能
    skillsEyebrow: "03 / 专业能力",
    skillsTitle: "专业技能",
    skillBloomberg: "彭博终端",
    skillML: "机器学习",
    skillEconometrics: "金融计量经济学",
    skillModelling: "金融建模",
    skillPortfolio: "投资组合分析",

    // 联系方式
    contactEyebrow: "04 / 联系方式",
    contactTitle: "保持联系",
    contactDescription:
      "关注金融研究、投资分析和量化金融领域的职业机会。",
    emailMe: "发送邮件",

    // 页脚
    footer: "© 2026 杨景亭。保留所有权利。"
  }
};

// Language switching
function switchLanguage(lang) {
  if (!translations[lang]) return;

  document.querySelectorAll("[data-i18n]").forEach(element => {
    const key = element.getAttribute("data-i18n");

    if (Object.prototype.hasOwnProperty.call(translations[lang], key)) {
      element.textContent = translations[lang][key];
    }
  });

  document.documentElement.lang =
    lang === "zh" ? "zh-CN" : "en";

  document.querySelectorAll(".language-switch button").forEach(button => {
    const active = button.dataset.lang === lang;

    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });

  try {
    localStorage.setItem("preferredLanguage", lang);
  } catch (e) {
    // Storage may be unavailable
  }
}

// Restore preferred language
document.addEventListener("DOMContentLoaded", () => {
  let lang = "en";

  try {
    lang = localStorage.getItem("preferredLanguage") || "en";
  } catch (e) {
    // Use English by default
  }

  switchLanguage(lang);
});

