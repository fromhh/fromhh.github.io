document.documentElement.classList.add("js");

const translations = {
  zh: {
    "meta.title": "黄辉｜个人主页",
    "meta.description": "黄辉的个人主页——机械工程专业硕士在读，记录学习、实践与持续成长。",
    "meta.ogTitle": "黄辉｜个人主页",
    "meta.ogDescription": "在学习与实践中，持续建立自己的判断、方法和表达。",
    "common.skip": "跳到主要内容",
    "common.home": "返回首页",
    "nav.aria": "网站导航",
    "nav.about": "关于",
    "nav.journey": "经历",
    "nav.moments": "片刻",
    "nav.contact": "联系我",
    "language.switch": "切换为英文",
    "hero.location": "桂林 · 中国",
    "hero.statement": "在学习与实践中，持续建立自己的判断、方法和表达。",
    "hero.availability": "2028 届 · 保持开放与探索",
    "hero.alt": "黄辉在桂林山水前的动漫风格侧面肖像",
    "about.title": "认真理解，<br />踏实推进。",
    "about.translation": "Understand deeply.<br />Move with purpose.",
    "about.lead": "我是黄辉，目前就读于桂林电子科技大学机械工程专业。比起快速给出答案，我更习惯先理解问题，再把思路一点点落实。",
    "about.body": "本科阶段学习电气工程及其自动化，硕士阶段接触先进封装装备与高精度视觉对准。不同方向的学习经历，让我更关注系统之间如何连接，也更愿意持续补足自己的能力边界。",
    "profile.status.label": "当前身份",
    "profile.status.secondary": "Current status",
    "profile.status.value": "机械工程专业硕士在读",
    "profile.expertise.label": "能力关键词",
    "profile.expertise.secondary": "Expertise",
    "profile.expertise.value": "Python · MATLAB · 工程分析",
    "profile.languages.label": "语言",
    "profile.languages.secondary": "Languages",
    "profile.languages.value": "中文 · 英语 CET-6",
    "portrait.alt": "黄辉身穿浅色外套的半写实水彩肖像",
    "portrait.caption": "安静生长，持续向前。",
    "journey.title": "循问题而行，<br />向答案靠近。",
    "journey.translation": "Following questions,<br />toward clearer answers.",
    "journey.guet.title": "桂林电子科技大学",
    "journey.guet.secondary": "Guilin University of Electronic Technology",
    "journey.guet.role": "机械工程 · 专业硕士研究生",
    "journey.guet.body": "研究方向涉及先进封装装备与高精度视觉对准，正在学习把算法、成像与工程约束放在同一套问题框架中理解。",
    "journey.project.date": "2025 — 至今",
    "journey.project.title": "芯片热压键合视觉对准研究",
    "journey.project.secondary": "Vision alignment for thermocompression bonding",
    "journey.project.role": "第一作者 · 会议论文审稿中",
    "journey.project.body": "参与局部高倍率成像、标记定位与几何对准等研究工作，围绕视觉对准方案开展仿真分析与方法验证。",
    "journey.syau.title": "沈阳农业大学",
    "journey.syau.secondary": "Shenyang Agricultural University",
    "journey.syau.role": "电气工程及其自动化 · 工学学士",
    "journey.syau.body": "完成电路、电力系统、电力电子与自动控制等课程学习，并通过企业见习了解设备运行、装配和质量检验流程。",
    "moments.title": "光有来处，<br />时间有痕。",
    "moments.body": "研究之外，城市的秩序、山水的松弛与日常的偶然，也构成了我观察世界的方式。",
    "moments.secondary": "Beyond research, I collect places, light, and ordinary moments.",
    "moments.alt": "黄辉与街头钟柱的半写实水彩肖像",
    "moments.caption": "<span>02</span> 城市与时间",
    "contact.title": "很高兴认识你。",
    "contact.body": "若你也有正在思考的问题，或想交换一个有趣的想法，欢迎写信给我。",
    "footer.back": "返回顶部",
    "copy.aria": "复制邮箱 huihui_gold@163.com",
    "copy.ready": "点击邮箱即可复制",
    "copy.success": "邮箱已复制",
    "copy.failure": "复制失败，请手动复制",
  },
  en: {
    "meta.title": "Hui Huang | Personal Profile",
    "meta.description": "Hui Huang's personal profile — an M.Eng. candidate in Mechanical Engineering, documenting study, practice, and continued growth.",
    "meta.ogTitle": "Hui Huang | Personal Profile",
    "meta.ogDescription": "Building judgment, method, and expression through continuous study and practice.",
    "common.skip": "Skip to main content",
    "common.home": "Back to home",
    "nav.aria": "Site navigation",
    "nav.about": "About",
    "nav.journey": "Journey",
    "nav.moments": "Moments",
    "nav.contact": "Contact",
    "language.switch": "Switch to Chinese",
    "hero.location": "Guilin · China",
    "hero.statement": "Building judgment, method, and expression through continuous study and practice.",
    "hero.availability": "Class of 2028 · Open to learning and possibility",
    "hero.alt": "Anime-style side portrait of Hui Huang in front of Guilin's mountain landscape",
    "about.title": "Understand deeply,<br />move with purpose.",
    "about.translation": "认真理解。<br />踏实推进。",
    "about.lead": "I'm Hui Huang, currently pursuing an M.Eng. in Mechanical Engineering at Guilin University of Electronic Technology. Rather than rushing to an answer, I prefer to understand the problem first and turn the reasoning into steady progress.",
    "about.body": "My undergraduate training was in Electrical Engineering and Automation. During my master's studies, I have been exploring advanced packaging equipment and high-precision vision alignment. Moving across disciplines has made me more attentive to how systems connect—and more willing to keep expanding the boundaries of what I can do.",
    "profile.status.label": "Current status",
    "profile.status.secondary": "当前身份",
    "profile.status.value": "M.Eng. Candidate in Mechanical Engineering",
    "profile.expertise.label": "Expertise",
    "profile.expertise.secondary": "能力关键词",
    "profile.expertise.value": "Python · MATLAB · Engineering Analysis",
    "profile.languages.label": "Languages",
    "profile.languages.secondary": "语言",
    "profile.languages.value": "Chinese · English (CET-6)",
    "portrait.alt": "Semi-realistic watercolor portrait of Hui Huang in a light-colored jacket",
    "portrait.caption": "Growing quietly, moving forward.",
    "journey.title": "Following questions,<br />toward clearer answers.",
    "journey.translation": "循问题而行，<br />向答案靠近。",
    "journey.guet.title": "Guilin University of Electronic Technology",
    "journey.guet.secondary": "桂林电子科技大学",
    "journey.guet.role": "M.Eng. Candidate · Mechanical Engineering",
    "journey.guet.body": "My research focuses on advanced packaging equipment and high-precision vision alignment, with an emphasis on understanding algorithms, imaging, and engineering constraints within one problem framework.",
    "journey.project.date": "2025 — Present",
    "journey.project.title": "Vision Alignment for Thermocompression Bonding",
    "journey.project.secondary": "芯片热压键合视觉对准研究",
    "journey.project.role": "First Author · Conference Paper Under Review",
    "journey.project.body": "I contribute to high-magnification imaging, marker localization, and geometric alignment, using simulation analysis and method validation to explore vision alignment solutions.",
    "journey.syau.title": "Shenyang Agricultural University",
    "journey.syau.secondary": "沈阳农业大学",
    "journey.syau.role": "B.Eng. · Electrical Engineering and Automation",
    "journey.syau.body": "I completed coursework in circuits, power systems, power electronics, and automatic control, with industry visits that provided exposure to equipment operation, assembly, and quality inspection.",
    "moments.title": "Light falls,<br />time stays.",
    "moments.body": "Beyond research, the order of cities, the ease of landscapes, and the accidents of everyday life also shape how I observe the world.",
    "moments.secondary": "光有来处，时间有痕。",
    "moments.alt": "Semi-realistic watercolor portrait of Hui Huang beside a street clock",
    "moments.caption": "<span>02</span> City and Time",
    "contact.title": "Good to meet you.",
    "contact.body": "If you have a question on your mind or an idea worth exchanging, feel free to write.",
    "footer.back": "Back to top",
    "copy.aria": "Copy email address huihui_gold@163.com",
    "copy.ready": "Click the email to copy",
    "copy.success": "Email copied",
    "copy.failure": "Copy failed. Copy manually",
  },
};

const languageToggle = document.querySelector("[data-language-toggle]");
const languageCurrent = document.querySelector("[data-language-current]");
const languageNext = document.querySelector("[data-language-next]");
const requestedLanguage = new URLSearchParams(window.location.search).get("lang");
let storedLanguage = "zh";

try {
  storedLanguage = window.localStorage.getItem("profile-language") || "zh";
} catch {
  storedLanguage = "zh";
}

let activeLanguage = ["zh", "en"].includes(requestedLanguage)
  ? requestedLanguage
  : ["zh", "en"].includes(storedLanguage)
    ? storedLanguage
    : "zh";

const applyLanguage = (language) => {
  const dictionary = translations[language];
  activeLanguage = language;
  document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
  document.title = dictionary["meta.title"];

  const description = document.querySelector('meta[name="description"]');
  const openGraphTitle = document.querySelector('meta[property="og:title"]');
  const openGraphDescription = document.querySelector('meta[property="og:description"]');

  if (description) description.content = dictionary["meta.description"];
  if (openGraphTitle) openGraphTitle.content = dictionary["meta.ogTitle"];
  if (openGraphDescription) openGraphDescription.content = dictionary["meta.ogDescription"];

  document.querySelectorAll("[data-i18n]").forEach((target) => {
    const value = dictionary[target.dataset.i18n];
    if (value !== undefined) target.textContent = value;
  });

  document.querySelectorAll("[data-i18n-html]").forEach((target) => {
    const value = dictionary[target.dataset.i18nHtml];
    if (value !== undefined) target.innerHTML = value;
  });

  document.querySelectorAll("[data-i18n-aria-label]").forEach((target) => {
    const value = dictionary[target.dataset.i18nAriaLabel];
    if (value !== undefined) target.setAttribute("aria-label", value);
  });

  document.querySelectorAll("[data-i18n-alt]").forEach((target) => {
    const value = dictionary[target.dataset.i18nAlt];
    if (value !== undefined) target.setAttribute("alt", value);
  });

  if (languageToggle && languageCurrent && languageNext) {
    languageToggle.setAttribute("aria-label", dictionary["language.switch"]);
    languageCurrent.textContent = language === "zh" ? "中" : "EN";
    languageNext.textContent = language === "zh" ? "EN" : "中";
  }

  try {
    window.localStorage.setItem("profile-language", language);
  } catch {
    // The language still applies when storage is unavailable.
  }
};

languageToggle?.addEventListener("click", () => {
  const nextLanguage = activeLanguage === "zh" ? "en" : "zh";
  applyLanguage(nextLanguage);

  const nextUrl = new URL(window.location.href);
  nextUrl.searchParams.set("lang", nextLanguage);
  window.history.replaceState({}, "", nextUrl);
});

applyLanguage(activeLanguage);

const revealTargets = document.querySelectorAll("[data-reveal]");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

if (prefersReducedMotion.matches || !("IntersectionObserver" in window)) {
  revealTargets.forEach((target) => target.classList.add("is-visible"));
} else {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { rootMargin: "0px 0px -8%", threshold: 0.12 },
  );

  revealTargets.forEach((target, index) => {
    target.style.transitionDelay = `${Math.min(index % 3, 2) * 70}ms`;
    revealObserver.observe(target);
  });
}

const heroCard = document.querySelector("[data-card]");

if (heroCard && !prefersReducedMotion.matches) {
  heroCard.addEventListener("pointermove", (event) => {
    const bounds = heroCard.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width) * 100;
    const y = ((event.clientY - bounds.top) / bounds.height) * 100;
    heroCard.style.setProperty("--mx", `${x}%`);
    heroCard.style.setProperty("--my", `${y}%`);
  });

  heroCard.addEventListener("pointerleave", () => {
    heroCard.style.setProperty("--mx", "50%");
    heroCard.style.setProperty("--my", "50%");
  });
}

document.querySelectorAll("[data-year]").forEach((target) => {
  target.textContent = new Date().getFullYear().toString();
});

const copyEmailTargets = document.querySelectorAll("[data-copy-email]");
const copyToast = document.querySelector("[data-copy-toast]");
let copyToastTimer;

const copyText = async (text) => {
  if (navigator.clipboard && window.isSecureContext) {
    await navigator.clipboard.writeText(text);
    return;
  }

  const fallbackInput = document.createElement("textarea");
  fallbackInput.value = text;
  fallbackInput.setAttribute("readonly", "");
  fallbackInput.style.position = "fixed";
  fallbackInput.style.opacity = "0";
  document.body.appendChild(fallbackInput);
  fallbackInput.select();

  const copied = document.execCommand("copy");
  fallbackInput.remove();

  if (!copied) throw new Error("Copy command was rejected.");
};

const showCopyToast = (message) => {
  if (!copyToast) return;

  window.clearTimeout(copyToastTimer);
  copyToast.textContent = message;
  copyToast.classList.add("is-visible");
  copyToastTimer = window.setTimeout(() => {
    copyToast.classList.remove("is-visible");
  }, 2400);
};

copyEmailTargets.forEach((target) => {
  target.addEventListener("click", async () => {
    const email = target.dataset.copyEmail;
    if (!email) return;

    try {
      await copyText(email);
      showCopyToast(`${translations[activeLanguage]["copy.success"]} · ${email}`);
    } catch {
      showCopyToast(`${translations[activeLanguage]["copy.failure"]} · ${email}`);
    }
  });
});
