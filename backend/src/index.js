import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({ origin: "*" }));
app.use(express.json());

// In-memory message store for contact form
const contactMessages = [];

// Base health check
app.get("/", (req, res) => {
  res.json({
    status: "ok",
    service: "PIXELFORGE API",
    tagline: "Ideas forged into reality.",
    owner: "Allenki Sai Rakesh",
    version: "1.0.0",
    uptime: `${process.uptime().toFixed(1)}s`,
    timestamp: new Date().toISOString(),
  });
});

app.get("/api/health", (req, res) => {
  res.json({
    status: "healthy",
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
  });
});

// Profile endpoint
app.get("/api/profile", (req, res) => {
  res.json({
    name: "Allenki Sai Rakesh",
    role: "Full-Stack Developer · AI Builder · Problem Solver",
    tagline: "Ideas forged into reality.",
    bio: "Computer Science undergraduate at MLRITM building scalable full-stack web applications, edge AI hardware prototypes, and generative AI developer tooling with Google Gemini.",
    institution: "Marri Laxman Reddy Institute of Technology & Management (MLRITM), Hyderabad",
    degree: "B.Tech in Computer Science & Engineering",
    email: "allenkisairakesh@gmail.com",
    links: {
      github: "https://github.com/ALLENKISAIRAKESH",
      linkedin: "https://linkedin.com/in/allenki-sai-rakesh-55a422315/",
      credly: "https://www.credly.com/users/allenki-sairakesh",
    },
  });
});

// Projects endpoint
app.get("/api/projects", (req, res) => {
  res.json([
    {
      id: "codepilot-ai",
      name: "CodePilot AI",
      kind: "Developer Tooling · Generative AI",
      summary:
        "Developer intelligence platform parsing GitHub repositories to render architecture graphs and deliver real-time code explanations using Google Gemini.",
      stack: ["React", "TypeScript", "Node.js", "Google Gemini API"],
      repo: "https://github.com/ALLENKISAIRAKESH/CodePilot",
    },
    {
      id: "safewatch",
      name: "SafeWatch",
      kind: "Computer Vision · Crowd Safety",
      summary:
        "Computer vision hazard monitoring pipeline detecting crowd risks with 92% precision and sub-second alert dispatch.",
      stack: ["Python", "Flask", "OpenCV", "Tailwind"],
      repo: "https://github.com/ALLENKISAIRAKESH/HackITxMRDU",
    },
    {
      id: "incidentops",
      name: "IncidentOps",
      kind: "Autonomous SRE Simulation",
      summary:
        "Simulation framework modeling 20+ production service outage scenarios to benchmark automated incident triage and remediation.",
      stack: ["Python", "Autonomous Agents", "SRE", "Linux"],
      repo: "https://github.com/ALLENKISAIRAKESH/IncidentOpsEnv",
    },
    {
      id: "nexa",
      name: "Nexa Edge",
      kind: "Edge AI · Precision Agriculture",
      summary:
        "Intelligent targeted spraying system pairing an ESP32-CAM with edge AI vision to localize weed detection and minimize pesticide overhead.",
      stack: ["ESP32-CAM", "Edge AI", "Computer Vision", "Python"],
      repo: "https://github.com/ALLENKISAIRAKESH",
    },
  ]);
});

// Skills endpoint
app.get("/api/skills", (req, res) => {
  res.json([
    {
      category: "Programming",
      items: ["Python", "JavaScript (ES6+)", "Java", "TypeScript", "SQL", "C++"],
    },
    {
      category: "Web & Backend",
      items: ["React", "Node.js", "Express", "Flask", "RESTful APIs", "HTML5", "CSS3"],
    },
    {
      category: "AI & Data",
      items: ["Generative AI", "Google Gemini API", "OpenCV", "YOLO", "Pandas", "NumPy", "Scikit-Learn"],
    },
    {
      category: "Cloud & Tools",
      items: ["AWS", "Google Cloud Platform", "Git", "GitHub", "Linux", "Power BI"],
    },
  ]);
});

// Contact message endpoint
app.post("/api/contact", (req, res) => {
  const { name, email, message } = req.body || {};

  if (!email || !message) {
    return res.status(400).json({
      success: false,
      error: "Email and message are required fields.",
    });
  }

  const newEntry = {
    id: `msg_${Date.now()}`,
    name: name || "Anonymous Visitor",
    email,
    message,
    receivedAt: new Date().toISOString(),
  };

  contactMessages.push(newEntry);
  console.log(`[PIXELFORGE Contact] New message from ${name} (${email}): ${message.slice(0, 60)}...`);

  return res.status(201).json({
    success: true,
    message: "Thank you for reaching out! Your message was received at the forge.",
    entry: { id: newEntry.id, receivedAt: newEntry.receivedAt },
  });
});

app.listen(PORT, () => {
  console.log(`⚡ PIXELFORGE backend API server listening on port ${PORT}`);
});
