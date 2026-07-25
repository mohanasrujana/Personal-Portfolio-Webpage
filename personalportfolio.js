const PORTFOLIO = {
  name: "Satya Srujana Pilli",
  eyebrow: "Full-Stack SDE · AI / ML Engineering",
  headline:
    "MS Computer Science, UMass Amherst · ex-Amazon SDE · AI and SDE focused",
  tagline:
    "I develop production-quality full-stack software and AI/ML systems, with experience spanning LLM applications, machine learning pipelines, and research-oriented software ML projects.",
  footerNote:
    "Full-stack SDE · AI/ML engineer · BINDS Lab · UMass Amherst · ex-Amazon",
  skillsLede:
    "Stack for full-stack product development, ML engineering, and research code—from APIs and front ends to model training and deployment.",
  projectsLede:
    "Full-stack and ML builds: LLM-powered tools, summarization products, and research software with measurable impact.",
  photo: {
    src: "assets/profile.jpg",
    alt: "Portrait of Satya Srujana Pilli",
  },
  heroHighlights: [
    { label: "BINDS Lab", sub: "Software ML research", pos: "tl" },
    { label: "UMass Amherst", sub: "MS CS · CGPA 3.97", pos: "tr" },
    { label: "Amazon", sub: "Full-stack SDE · ex-SDE", pos: "bl" },
    { label: "Focus", sub: "AI · Software ML research", pos: "br" },
  ],
  webring: {
    // Must match your "id" in https://github.com/umaring/umaring.github.io members.json
    memberId: "mohanasrujana",
    // Set to another member's id (e.g. "haylin") to preview prev/next locally before your PR merges
    devPreviewMemberId: null,
    hubUrl: "https://umaring.github.io/",
    src: "https://umaring.github.io/umass.png",
    alt: "UMass Amherst Web Ring",
    width: 88,
    height: 31,
  },
  about: [
    "I earned my B.E. in Computer Science from BITS Pilani Hyderabad (2018–2022), then spent two years at Amazon Bangalore as a full-stack SDE—building and shipping payment services, item-level financing, and WebLabs experiments used across six EU and UK markets.",
    "I completed my M.S. in Computer Science at UMass Amherst (Sep 2024 – May 2026, CGPA 3.97). In grad school I built ML and LLM systems: gaze-based preference learning at CIIR, adaptive LLM agent monitoring at Cisco, and forensic AI pipelines at RescueLab.",
    "I now work in the BINDS Lab under Prof. Hava Siegelmann, conducting research on biologically inspired neural architectures and modular machine learning systems, while building production-quality research infrastructure and tooling for neural network experimentation.",
],
  education: [
    {
      school: "UMass Amherst",
      degree: "MS Computer Science",
      detail: "CGPA 3.97 · Sep 2024 – May 2026",
      coursework: [
        "Neural Networks",
        "Machine Learning",
        "Reinforcement Learning",
        "Artificial Intelligence",
        "Advanced Algorithms",
        "Software Engineering",
        "Computer & Network Security",
        "System Defense & Testing",
        "Applied Statistics",
        "ML Applied to Child Rescue",
        "AI Project",
      ],
    },
    {
      school: "BITS Pilani Hyderabad",
      degree: "B.E. Computer Science",
      detail: "CGPA 8.33 · 2018–2022",
      coursework: [
        "Data Structures & Algorithms",
        "Design & Analysis of Algorithms",
        "Operating Systems",
        "Database Systems",
        "Computer Networks",
        "Machine Learning",
        "Artificial Intelligence",
        "Neural Networks & Fuzzy Logic",
        "Information Retrieval",
        "Computer Architecture",
        "Compiler Construction",
        "Theory of Computation",
        "Object-Oriented Programming",
        "Probability & Statistics",
      ],
    },
  ],
  skills: {
    languages: [
      "Java",
      "C++",
      "Python",
      "C",
      "Ruby",
      "Scala",
      "JavaScript",
      "HTML",
      "CSS",
      "Shell",
      "MATLAB",
    ],
    frameworks: [
      "TensorFlow",
      "PyTorch",
      "scikit-learn",
      "Keras",
      "OpenCV",
      "Spring Boot",
      "REST APIs",
      "MERN",
      "React",
    ],
    infra: [
      "Git",
      "AWS",
      "Docker",
      "Kubernetes",
      "Helm",
      "WebLabs",
      "Postgres",
      "MongoDB",
      "DynamoDB",
    ],
    ai: [
      "OpenAI",
      "Gemini",
      "Claude APIs",
      "Mistral",
      "RAG",
      "MCP",
      "ONNX",
      "Cursor",
      "GitHub Copilot",
    ],
    soft: [
      "Cross-functional collaboration",
      "Technical writing",
      "Stakeholder communication",
      "Agile / Scrum",
    ],
  },
  experience: [
    {
      title: "Researcher",
      org: "BINDS Lab · UMass Amherst · Prof. Hava Siegelmann",
      dates: "May 2026 – Present",
      bullets: [
        "Developing neural networks from fundamental computational building blocks, including logic-gate-inspired architectures and interpretable network components.",
        "Building tooling and infrastructure for generating, testing, and analyzing modular neural network configurations and weight databases.",
        "Exploring biologically inspired approaches to neural computation and structured network design in collaboration with Prof. Hava Siegelmann and the BINDS Lab.",
    ],
    },
    {
      title: "Graduate Research Extern",
      org: "Cisco · San Francisco",
      dates: "Jan 2026 – May 2026",
      bullets: [
        "Built an adaptive LLM monitoring agent with ReAct-style reasoning to detect sabotage, task drift, and hidden objectives across 50+ agent trajectories.",
        "Improved threat-detection recall by 30% over static classifiers through multi-step inspection strategies.",
        "Benchmarked static vs. adaptive monitors via ablation studies on recall and precision trade-offs.",
      ],
    },
    {
      title: "Graduate Teaching Assistant",
      org: "Manning College of CICS · UMass Amherst",
      dates: "Sep 2025 – Dec 2025",
      bullets: [
        "Graduate TA for Theory and Practice of Software Engineering (COMPSCI 520)—office hours, assignment feedback, and project support for graduate students.",
        "Helped students apply software engineering practices: requirements, design, testing, and team-based development on course projects.",
        "Collaborated with course staff on grading rubrics and consistent evaluation across submissions.",
      ],
    },
    {
      title: "Graduate Research Assistant",
      org: "CIIR Lab · Amherst",
      dates: "Apr 2025 – Sep 2025",
      bullets: [
        "Embedded gaze-based preference signals into training, cutting multi-session data mismatches by 40% across 200+ sessions.",
        "Redesigned evaluation tables for domain-specific gaze inputs, boosting reliability by 30%.",
        "Hardened preference storage and logging, improving reward-model accuracy by 25%.",
      ],
    },
    {
      title: "SDE-1",
      org: "Amazon · Bangalore",
      dates: "Jul 2022 – Mar 2024",
      bullets: [
        "Shipped full-stack payment features (Java, Spring, AWS) across 6 EU/UK markets, boosting customer UX by 20%.",
        "Engineered item-level payment controls for ILF, increasing engagement by 28%.",
        "Cut payment transaction latency by 35%; drove A/B experiments via WebLabs with 99.9% deploy success.",
      ],
    },
    {
      title: "SDE Intern",
      org: "Amazon · Bangalore",
      dates: "Jan 2022 – Jun 2022",
      bullets: [
        "Built Vapor, a full-stack internal planning tool used by 50+ teams, reducing planning overhead by 20%.",
        "Implemented service profilers and consistency checks across distributed backend systems.",
      ],
    },
    {
      title: "ML Intern",
      org: "Hertztech Solutions Pvt Ltd",
      dates: "May 2020 – Jul 2020",
      bullets: [
        "Trained and deployed machine learning models to analyze vehicle noise quality, using AI/ML methods to predict sound quality and classify a dataset of 2,000+ audio samples.",
        "Evaluated engine health from acoustic signals, achieving 95% accuracy.",
        "Applied sampling and data augmentation to improve data quality and diversity; validated models with 98% success across real-world scenarios.",
      ],
    },
  ],
  projects: [
    {
      title: "LLM-Powered Crime Element Analyzer",
      context: "UMass RescueLab · Prof. Brian Levine",
      initial: "CE",
      visualClass: "crime",
      story:
        "Developed an end-to-end forensic LLM system using Mistral 7B and Gemma 3 to identify and extract crime-related entities from conversational data. Engineered a Flask-powered ML service and CLI for scalable batch processing across CSV, PDF, and XLSX formats, cutting manual investigation effort by 60%.",
      tech: ["Python", "Flask", "Ollama", "Mistral-7B", "Gemma 3"],
      repo: "https://github.com/mohanasrujana/Message-Analyser",
    },
    {
      title: "Briefly",
      context: "Full-stack · AI product",
      initial: "BR",
      visualClass: "briefly",
      story:
        "Built a full-stack AI-powered document summarization platform using React, Flask, MongoDB, and Mistral AI, achieving ~95% summarization accuracy. Supported processing of over 100 files per day for 50+ users and improved backend performance by 30% through system optimization.",
      tech: ["React", "Flask", "MistralAI", "MongoDB", "Axios"],
      repo: "https://github.com/mohanasrujana/briefly",
    },
  ],
  sections: [
    { id: "intro", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "connect", label: "Contact" },
  ],
  nav: [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#connect", label: "Contact" },
    { href: "assets/resume.pdf", label: "Resume", download: true },
  ],
  resume: {
    href: "assets/resume.pdf",
    fileName: "Pilli,SatyaSrujana_Resume.pdf",
    label: "Download resume",
  },
  contact: {
    email: "ssrujanapilli@gmail.com",
    linkedin: "https://www.linkedin.com/in/satya-srujana-pilli-79a69b1ab/",
    medium: {
      url: "https://medium.com/@srujana3501",
      label: "Stories & essays on Medium",
      blurb: "A few technical articles—and plenty of everyday life.",
    },
    github: "https://github.com/mohanasrujana",
  },
};

const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;

function init() {
  renderHero();
  renderAbout();
  renderMediumCallout();
  renderSkills();
  renderExperience();
  renderProjects();
  renderContact();
  renderNav();
  renderChapterRail();
  document.getElementById("year").textContent = new Date().getFullYear();
  document.getElementById("footer-name").textContent = PORTFOLIO.name;
  const footerNote = document.getElementById("footer-note");
  if (footerNote) footerNote.textContent = PORTFOLIO.footerNote;
  setupWebring();
  setupReveal();
  setupSectionSpy();
  setupMobileNav();
}

function webringBadgeMarkup(webring) {
  const hub = webring.hubUrl || webring.href || "https://umaring.github.io/";
  return `
    <a class="webring-badge" href="${hub}" target="_blank" rel="noopener noreferrer" title="${escapeHtml(webring.alt)}" aria-label="Visit the UMass Amherst Web Ring">
      <img
        class="webring-badge__img"
        src="${webring.src}"
        alt="${escapeHtml(webring.alt)}"
        width="${webring.width}"
        height="${webring.height}"
      />
    </a>`;
}

function webringNavMarkup(data, badge) {
  return `
    <nav class="webring-nav" aria-label="UMass Amherst Web Ring">
      <a class="webring-nav__link" href="${data.prev.url}" rel="noopener noreferrer">
        <span class="webring-nav__dir" aria-hidden="true">←</span>
        <span class="webring-nav__name">${escapeHtml(data.prev.name)}</span>
      </a>
      ${badge}
      <a class="webring-nav__link" href="${data.next.url}" rel="noopener noreferrer">
        <span class="webring-nav__name">${escapeHtml(data.next.name)}</span>
        <span class="webring-nav__dir" aria-hidden="true">→</span>
      </a>
    </nav>`;
}

function webringPendingMarkup(badge, memberId) {
  return `
    <div class="webring-pending">
      ${badge}
    </div>`;
}

function resolveWebringFetchId(webring) {
  const isLocal =
    location.hostname === "localhost" || location.hostname === "127.0.0.1";
  if (isLocal && webring.devPreviewMemberId) {
    return webring.devPreviewMemberId;
  }
  return webring.memberId;
}

async function setupWebring() {
  const el = document.getElementById("footer-webring");
  const { webring } = PORTFOLIO;
  if (!el || !webring) return;

  const badge = webringBadgeMarkup(webring);

  if (!webring.memberId) {
    el.innerHTML = badge;
    return;
  }

  const fetchId = resolveWebringFetchId(webring);
  el.innerHTML = badge;

  try {
    const res = await fetch(
      `https://umaring.github.io/${encodeURIComponent(fetchId)}.json`
    );
    if (!res.ok) throw new Error(`Webring API ${res.status}`);

    const data = await res.json();
    if (!data?.prev?.url || !data?.next?.url) throw new Error("Invalid webring payload");

    const previewNote =
      fetchId !== webring.memberId
        ? `<p class="webring-pending__note webring-pending__note--preview">Local preview (using <code>${escapeHtml(fetchId)}</code> until your PR merges).</p>`
        : "";

    el.innerHTML = `${webringNavMarkup(data, badge)}${previewNote}`;
  } catch {
    el.innerHTML = webringPendingMarkup(badge, webring.memberId);
  }
}

function renderHero() {
  const eyebrow = document.getElementById("hero-eyebrow");
  if (eyebrow) eyebrow.textContent = PORTFOLIO.eyebrow;
  document.getElementById("hero-headline").textContent = PORTFOLIO.headline;
  document.getElementById("hero-tagline").textContent = PORTFOLIO.tagline;
  renderHeroActions();
  renderHeroVisual();
}

function renderHeroActions() {
  const el = document.getElementById("hero-actions");
  if (!el) return;

  const resume = PORTFOLIO.resume;
  const resumeBtn = resume
    ? `<a class="btn btn--ghost btn--download" href="${resume.href}" download="${escapeHtml(resume.fileName)}">${escapeHtml(resume.label)}</a>`
    : "";

  el.innerHTML = `
    <a class="btn btn--primary" href="#experience">View experience</a>
    ${resumeBtn}
    <a class="btn btn--ghost" href="#connect">Contact</a>`;
}

function renderHeroOrbitMarkup() {
  return `
    <div class="hero-orbit" aria-hidden="true">
      <svg class="hero-orbit__svg" viewBox="0 0 420 420" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="hero-core-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="rgba(107, 148, 184, 0.35)" />
            <stop offset="100%" stop-color="rgba(107, 148, 184, 0)" />
          </radialGradient>
        </defs>
        <circle cx="210" cy="210" r="188" fill="none" stroke="rgba(107, 148, 184, 0.14)" stroke-width="1" stroke-dasharray="3 10" class="hero-orbit__ring hero-orbit__ring--1" />
        <circle cx="210" cy="210" r="142" fill="none" stroke="rgba(61, 107, 140, 0.2)" stroke-width="1" stroke-dasharray="2 8" class="hero-orbit__ring hero-orbit__ring--2" />
        <circle cx="210" cy="210" r="96" fill="none" stroke="rgba(107, 148, 184, 0.16)" stroke-width="1" class="hero-orbit__ring hero-orbit__ring--3" />
        <line x1="210" y1="210" x2="210" y2="38" stroke="rgba(107, 148, 184, 0.22)" stroke-width="1" />
        <line x1="210" y1="210" x2="358" y2="128" stroke="rgba(107, 148, 184, 0.18)" stroke-width="1" />
        <line x1="210" y1="210" x2="332" y2="302" stroke="rgba(107, 148, 184, 0.18)" stroke-width="1" />
        <line x1="210" y1="210" x2="88" y2="318" stroke="rgba(107, 148, 184, 0.18)" stroke-width="1" />
        <line x1="210" y1="210" x2="62" y2="142" stroke="rgba(107, 148, 184, 0.18)" stroke-width="1" />
        <circle cx="210" cy="210" r="72" fill="url(#hero-core-glow)" />
        <circle cx="210" cy="38" r="5" fill="#6b94b8" class="hero-orbit__node" />
        <circle cx="358" cy="128" r="4" fill="#6b94b8" class="hero-orbit__node" />
        <circle cx="332" cy="302" r="4" fill="#6b94b8" class="hero-orbit__node" />
        <circle cx="88" cy="318" r="4" fill="#6b94b8" class="hero-orbit__node" />
        <circle cx="62" cy="142" r="4" fill="#6b94b8" class="hero-orbit__node" />
      </svg>
    </div>`;
}

function renderHeroVisual() {
  const el = document.getElementById("hero-visual");
  const photo = PORTFOLIO.photo;
  if (!el || !photo) return;

  el.removeAttribute("aria-hidden");

  const floats = PORTFOLIO.heroHighlights
    .map(
      (item) => `
      <div class="hero-float hero-float--${item.pos} reveal reveal-delay-2">
        <span class="hero-float__label">${escapeHtml(item.label)}</span>
        <span class="hero-float__sub">${escapeHtml(item.sub)}</span>
      </div>`
    )
    .join("");

  el.innerHTML = `
    <div class="hero-visual-stack reveal reveal-delay-1">
      ${renderHeroOrbitMarkup()}
      <figure class="hero-photo">
        <div class="hero-photo__frame">
          <img
            class="hero-photo__img"
            src="${photo.src}"
            alt="${escapeHtml(photo.alt)}"
            width="908"
            height="1024"
            loading="eager"
            decoding="async"
          />
          <div class="hero-photo__shade" aria-hidden="true"></div>
        </div>
      </figure>
      <div class="hero-floats" aria-label="Career highlights">${floats}</div>
    </div>`;
}

function renderAbout() {
  const container = document.getElementById("about-content");
  const paragraphs = PORTFOLIO.about
    .map((p) => `<p>${escapeHtml(p)}</p>`)
    .join("");
  const edu = PORTFOLIO.education
    .map(
      (e) => `
        <article class="education-card">
          <p class="education-card__heading">
            <strong>${escapeHtml(e.school)}</strong> · ${escapeHtml(e.degree)}
          </p>
          <p class="education-card__detail">${escapeHtml(e.detail)}</p>
          <p class="education-card__label">Relevant coursework</p>
          <div class="education-card__courses">
            ${e.coursework.map((course) => `<span>${escapeHtml(course)}</span>`).join("")}
          </div>
        </article>`
    )
    .join("");
  container.innerHTML = `${paragraphs}<div class="education-tags">${edu}</div>`;
}

function renderMediumCallout() {
  const { medium } = PORTFOLIO.contact;
  document.getElementById("medium-callout").innerHTML = `
    <p class="medium-callout__label">Writing</p>
    <p>${escapeHtml(medium.blurb)}</p>
    <a href="${medium.url}" target="_blank" rel="noopener noreferrer">${escapeHtml(medium.label)} →</a>
  `;
}

function renderSkills() {
  const skillsLede = document.getElementById("skills-lede");
  if (skillsLede) skillsLede.textContent = PORTFOLIO.skillsLede;

  const groups = [
    { key: "languages", title: "Languages", class: "languages" },
    { key: "frameworks", title: "Full-Stack & ML", class: "frameworks" },
    { key: "infra", title: "Infra & Data", class: "infra" },
    { key: "ai", title: "AI / ML Engineering", class: "ai" },
    { key: "soft", title: "Soft skills", class: "soft" },
  ];
  const container = document.getElementById("skills-content");
  container.innerHTML = groups
    .map((g) => {
      const pills = PORTFOLIO.skills[g.key]
        .map((s) => `<span class="skill-pill">${escapeHtml(s)}</span>`)
        .join("");
      return `
        <div class="skills-group skills-group--${g.class} reveal">
          <h3 class="skills-group__title">${escapeHtml(g.title)}</h3>
          <div class="skill-pills">${pills}</div>
        </div>`;
    })
    .join("");
}

function renderExperience() {
  const list = document.getElementById("experience-list");
  list.innerHTML = PORTFOLIO.experience
    .map(
      (job, i) => `
      <li class="timeline-item reveal reveal-delay-${Math.min(i + 1, 3)}">
        <div class="timeline-item__header">
          <h3 class="timeline-item__title">${escapeHtml(job.title)}</h3>
          <span class="timeline-item__org">${escapeHtml(job.org)}</span>
          <span class="timeline-item__dates">${escapeHtml(job.dates)}</span>
        </div>
        <ul class="timeline-item__bullets">
          ${job.bullets.map((b) => `<li>${escapeHtml(b)}</li>`).join("")}
        </ul>
      </li>`
    )
    .join("");
}

function renderProjects() {
  const projectsLede = document.getElementById("projects-lede");
  if (projectsLede) projectsLede.textContent = PORTFOLIO.projectsLede;

  const list = document.getElementById("projects-list");
  list.innerHTML = PORTFOLIO.projects
    .map(
      (p, i) => `
      <article class="project-card reveal reveal-delay-${Math.min(i + 1, 2)}">
        <div class="project-card__visual project-card__visual--${p.visualClass}">
          <span class="project-card__initial" aria-hidden="true">${escapeHtml(p.initial)}</span>
        </div>
        <div class="project-card__body">
          <p class="project-card__context">${escapeHtml(p.context)}</p>
          <h3 class="project-card__title">${escapeHtml(p.title)}</h3>
          <p class="project-card__story">${escapeHtml(p.story)}</p>
          <div class="project-card__tech">
            ${p.tech.map((t) => `<span>${escapeHtml(t)}</span>`).join("")}
          </div>
          ${
            p.repo
              ? `<a class="project-card__link" href="${p.repo}" target="_blank" rel="noopener noreferrer">View source →</a>`
              : ""
          }
        </div>
      </article>`
    )
    .join("");
}

function renderContact() {
  const { email, linkedin, medium, github } = PORTFOLIO.contact;
  const resume = PORTFOLIO.resume;
  const resumeCard = resume
    ? `<a class="contact-card contact-card--resume" href="${resume.href}" download="${escapeHtml(resume.fileName)}">
      <span class="contact-card__mark" aria-hidden="true">↓</span>
      <span class="contact-card__label">Resume</span>
      <span class="contact-card__value">${escapeHtml(resume.label)}</span>
      <span class="contact-card__hint">PDF · one-click download</span>
    </a>`
    : "";

  document.getElementById("connect-lede").textContent =
   "Open to full-stack software engineering, AI/ML engineering, and software ML research opportunities, including full-time roles and collaborations.";
  document.getElementById("contact-links").innerHTML = `
    ${resumeCard}
    <a class="contact-card" href="mailto:${email}">
      <span class="contact-card__mark" aria-hidden="true">@</span>
      <span class="contact-card__label">Email</span>
      <span class="contact-card__value">${escapeHtml(email)}</span>
    </a>
    <a class="contact-card" href="${linkedin}" target="_blank" rel="noopener noreferrer">
      <span class="contact-card__mark" aria-hidden="true">in</span>
      <span class="contact-card__label">LinkedIn</span>
      <span class="contact-card__value">Satya Srujana Pilli</span>
      <span class="contact-card__hint">Professional profile</span>
    </a>
    <a class="contact-card contact-card--medium" href="${medium.url}" target="_blank" rel="noopener noreferrer">
      <span class="contact-card__mark" aria-hidden="true">M</span>
      <span class="contact-card__label">Medium</span>
      <span class="contact-card__value">${escapeHtml(medium.label)}</span>
      <span class="contact-card__hint">${escapeHtml(medium.blurb)}</span>
    </a>
    <a class="contact-card" href="${github}" target="_blank" rel="noopener noreferrer">
      <span class="contact-card__mark" aria-hidden="true">gh</span>
      <span class="contact-card__label">GitHub</span>
      <span class="contact-card__value">mohanasrujana</span>
      <span class="contact-card__hint">Code &amp; open source</span>
    </a>
  `;
}

function renderNav() {
  const resumeFileName = PORTFOLIO.resume?.fileName ?? "";
  document.getElementById("site-nav-list").innerHTML = PORTFOLIO.nav
    .map((n) => {
      const isHash = n.href.startsWith("#");
      const sectionAttr = isHash
        ? ` data-section="${n.href.slice(1)}"`
        : "";
      const downloadAttr =
        n.download && resumeFileName
          ? ` download="${escapeHtml(resumeFileName)}"`
          : "";
      return `<li><a href="${n.href}"${sectionAttr}${downloadAttr}>${escapeHtml(n.label)}</a></li>`;
    })
    .join("");
}

function renderChapterRail() {
  document.getElementById("chapter-rail").innerHTML = PORTFOLIO.sections
    .map(
      (s) =>
        `<li><a class="chapter-rail__link" href="#${s.id}" data-section="${s.id}" aria-label="${escapeHtml(s.label)}" title="${escapeHtml(s.label)}"></a></li>`
    )
    .join("");
}

function setupReveal() {
  const reveals = document.querySelectorAll(".reveal");
  if (prefersReducedMotion) {
    reveals.forEach((el) => el.classList.add("is-visible"));
    return;
  }
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );
  reveals.forEach((el) => observer.observe(el));
}

function setupSectionSpy() {
  const sections = document.querySelectorAll(".chapter[data-section]");
  const railLinks = document.querySelectorAll(".chapter-rail__link");
  const navLinks = document.querySelectorAll(".site-nav__list a");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          railLinks.forEach((link) => {
            link.classList.toggle(
              "is-active",
              link.dataset.section === id
            );
          });
          navLinks.forEach((link) => {
            link.classList.toggle(
              "is-active",
              link.dataset.section === id
            );
          });
        }
      });
    },
    { threshold: 0.35, rootMargin: "-20% 0px -55% 0px" }
  );
  sections.forEach((s) => observer.observe(s));
}

function setupMobileNav() {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.getElementById("site-nav");
  toggle.addEventListener("click", () => {
    const open = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!open));
    nav.classList.toggle("is-open", !open);
  });
  nav.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => {
      toggle.setAttribute("aria-expanded", "false");
      nav.classList.remove("is-open");
    });
  });
}

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

document.addEventListener("DOMContentLoaded", init);
