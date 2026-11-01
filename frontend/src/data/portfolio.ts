// ============================================================
// PIXELFORGE content — Allenki Sai Rakesh's Developer Portfolio
// Single source of truth for all sections and Forge Terminal.
// ============================================================

export const profile = {
  brand: "PIXELFORGE",
  tagline: "Ideas forged into reality.",
  name: "Allenki Sai Rakesh",
  role: "Full-Stack Developer · AI Builder · Problem Solver",
  intro:
    "Computer Science undergraduate at MLRITM building scalable full-stack web applications, edge AI hardware prototypes, and generative AI developer tooling with Google Gemini.",
  about: [
    "I'm a Computer Science & Engineering student at Marri Laxman Reddy Institute of Technology & Management (MLRITM), Hyderabad, passionate about architecting resilient full-stack systems and applied computer vision.",
    "As an appointed Google Gemini Student Ambassador (ID: 8459) and Vice President of the GeeksforGeeks Student Chapter, I lead developer workshops, train student communities on modern AI pipelines, and build open-source tools that solve real operational friction.",
  ],
  facts: [
    { label: "Studying", value: "B.Tech in CSE · MLRITM Hyderabad" },
    { label: "Based in", value: "Hyderabad, India" },
    { label: "Focus", value: "Full-Stack, GenAI & Computer Vision" },
    { label: "Currently", value: "Building CodePilot & SafeWatch" },
  ],
};

export const skillGroups = [
  {
    title: "Programming",
    code: "01",
    items: ["Python", "JavaScript (ES6+)", "Java", "TypeScript", "SQL", "C++"],
  },
  {
    title: "Web & Backend",
    code: "02",
    items: ["React", "Node.js", "Express", "Flask", "RESTful APIs", "HTML5", "CSS3"],
  },
  {
    title: "AI & Data",
    code: "03",
    items: [
      "Generative AI",
      "Google Gemini API",
      "OpenCV",
      "YOLO",
      "Pandas",
      "NumPy",
      "scikit-learn",
    ],
  },
  {
    title: "Cloud & Tools",
    code: "04",
    items: ["AWS", "Google Cloud Platform", "Git", "GitHub", "Linux", "Power BI"],
  },
];

export type Project = {
  id: string;
  name: string;
  kind: string;
  problem: string;
  summary: string;
  stack: string[];
  repo: string | null;
  demo?: string | null;
};

export const projects: Project[] = [
  {
    id: "codepilot-ai",
    name: "CodePilot AI",
    kind: "Developer Tooling · Generative AI",
    problem:
      "Navigating complex or unfamiliar codebases during onboarding slows down developer velocity and makes architectural understanding difficult.",
    summary:
      "An open-source developer intelligence platform parsing GitHub repositories to render dynamic architecture graphs and provide real-time source code explanations with Google Gemini.",
    stack: ["React", "TypeScript", "Node.js", "Google Gemini API"],
    repo: "https://github.com/ALLENKISAIRAKESH/CodePilot",
    demo: null,
  },
  {
    id: "safewatch",
    name: "SafeWatch",
    kind: "Computer Vision · Crowd Safety",
    problem:
      "Real-time crowd congestion and safety hazards in dense public gatherings are difficult to detect before critical emergency incidents occur.",
    summary:
      "An AI-driven safety hazard monitoring pipeline using OpenCV and high-throughput Flask web services to detect crowd risks with 92% precision and sub-second alert dispatch.",
    stack: ["Python", "Flask", "OpenCV", "Computer Vision", "Tailwind"],
    repo: "https://github.com/ALLENKISAIRAKESH/HackITxMRDU",
    demo: null,
  },
  {
    id: "incidentops",
    name: "IncidentOps",
    kind: "Autonomous Agents · SRE Simulation",
    problem:
      "Benchmarking autonomous root-cause remediation agents requires realistic, reproducible simulation of complex production service outage cascades.",
    summary:
      "An autonomous agent simulation framework modeling 20+ production service outage scenarios to benchmark automated incident triage, log analysis, and self-healing workflows.",
    stack: ["Python", "Autonomous Agents", "SRE", "Linux"],
    repo: "https://github.com/ALLENKISAIRAKESH/IncidentOpsEnv",
    demo: null,
  },
  {
    id: "nexa",
    name: "Nexa Edge",
    kind: "Edge AI · Precision Agriculture",
    problem:
      "Uniform application of agricultural pesticides increases operating costs for farmers and leads to chemical runoff that damages soil ecosystems.",
    summary:
      "An intelligent targeted spraying system concept pairing an ESP32-CAM with edge AI vision models to localize weed detection and minimize pesticide overhead.",
    stack: ["ESP32-CAM", "Edge AI", "Computer Vision", "Python"],
    repo: "https://github.com/ALLENKISAIRAKESH",
    demo: null,
  },
  {
    id: "smartphone-predictor",
    name: "SmartPrice AI",
    kind: "Machine Learning · Predictive Analytics",
    problem:
      "Consumer electronics pricing is highly volatile and difficult to evaluate across heterogeneous hardware specifications.",
    summary:
      "A predictive analytics engine utilizing multi-parameter feature engineering and classification algorithms on 2,000+ device records to achieve 94% price estimation accuracy.",
    stack: ["Python", "Flask", "Scikit-Learn", "Pandas"],
    repo: "https://github.com/ALLENKISAIRAKESH/Prediction-on-mobile-phone-price-range-using-classification-mobiles",
    demo: null,
  },
];

export const achievements = [
  {
    title: "Google Gemini Student Ambassador",
    year: "2025 – 2026",
    detail:
      "Selected as an official Google Gemini Student Ambassador (Ambassador ID: 8459). Spearheaded 6+ hands-on workshops and training sessions for 400+ students on Gemini APIs.",
  },
  {
    title: "Vice President — GeeksforGeeks Student Chapter",
    year: "2025 – 2026",
    detail:
      "Led campus-wide technical hackathons, bootcamps, and developer enablement as Chapter Vice President and GeeksforGeeks Campus Mantri at MLRITM.",
  },
  {
    title: "AWS Academy Graduate — Cloud Foundations",
    year: "2025",
    detail:
      "Earned official AWS Cloud Foundations accreditation verifying competency in cloud security, compute architecture, networking, and serverless hosting.",
  },
];

export const contact = {
  email: "allenkisairakesh@gmail.com",
  links: [
    {
      label: "GitHub",
      value: "github.com/ALLENKISAIRAKESH",
      url: "https://github.com/ALLENKISAIRAKESH",
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/allenki-sai-rakesh",
      url: "https://linkedin.com/in/allenki-sai-rakesh-55a422315/",
    },
    {
      label: "Credly",
      value: "credly.com/users/allenki-sairakesh",
      url: "https://www.credly.com/users/allenki-sairakesh",
    },
  ],
};

export const navLinks = [
  { id: "about", label: "About" },
  { id: "superpowers", label: "Superpowers" },
  { id: "projects", label: "Projects" },
  { id: "achievements", label: "Achievements" },
  { id: "contact", label: "Contact" },
];
