# PIXELFORGE — Ideas Forged into Reality

[![PIXELFORGE CI](https://img.shields.io/badge/Status-Production%20Ready-brightgreen)](https://github.com/ALLENKISAIRAKESH/PIXELFORGE)
[![Developer](https://img.shields.io/badge/Developer-Allenki%20Sai%20Rakesh-blue)](https://github.com/ALLENKISAIRAKESH)
[![Render Blueprint](https://img.shields.io/badge/Deploy-Render%20Ready-46E3B7)](https://render.com)

**PIXELFORGE** is a developer portfolio and project showcase application built for **Allenki Sai Rakesh** (Full-Stack Developer, Google Gemini Student Ambassador, AI & Data Engineering Builder at MLR Institute of Technology and Management).

The repository is structured cleanly into two dedicated directories: `frontend/` and `backend/`.

---

## 📁 Repository Structure

```text
PIXELFORGE/
├── frontend/                 # Client UI (TanStack Start / React 19 / Tailwind CSS v4)
│   ├── public/              # Brand assets, favicon, robots.txt
│   ├── src/                 # Interactive components, Forge Terminal, portfolio data
│   ├── package.json
│   └── vite.config.ts
├── backend/                  # REST API Service (Node.js / Express / CORS)
│   ├── src/
│   │   └── index.js         # API endpoints (/api/health, /api/profile, /api/projects, /api/contact)
│   └── package.json
├── render.yaml               # Render Blueprint for automated multi-service deployment
├── .gitignore                # Root gitignore rules
└── README.md
```

---

## ⚡ Quick Start (Local Development)

### 1. Frontend Setup
```bash
cd frontend
npm install
npm run dev
```
Open [http://localhost:8080](http://localhost:8080) to interact with the portfolio and Forge Terminal.

### 2. Backend Setup
```bash
cd backend
npm install
npm run dev
```
API runs on [http://localhost:5000](http://localhost:5000).

---

## 🚀 Deployment on Render

This repository contains a native `render.yaml` Blueprint specification that automatically configures both services on Render with one click.

### Option A: Automatic Blueprint Deployment (Recommended)
1. Go to the [Render Dashboard](https://dashboard.render.com).
2. Click **New +** > **Blueprint**.
3. Connect your repository: `https://github.com/ALLENKISAIRAKESH/PIXELFORGE.git`.
4. Render will parse `render.yaml` and deploy both:
   - **`pixelforge-frontend`**: Static Site (`rootDir: frontend`, Publish: `.output/public`).
   - **`pixelforge-backend`**: Node Web Service (`rootDir: backend`, Start: `npm start`).
5. Click **Apply**.

---

### Option B: Manual Service Configuration on Render

#### Frontend (Static Site)
- **Type**: Static Site
- **Name**: `pixelforge-frontend`
- **Root Directory**: `frontend`
- **Build Command**: `npm install && npm run build`
- **Publish Directory**: `.output/public`

#### Backend (Web Service)
- **Type**: Web Service
- **Name**: `pixelforge-backend`
- **Environment**: Node
- **Root Directory**: `backend`
- **Build Command**: `npm install`
- **Start Command**: `npm start`
- **Environment Variables**:
  - `NODE_ENV`: `production`

---

## 🔌 Backend API Endpoints

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/` | API Root Welcome & Version |
| `GET` | `/api/health` | Health Check (Uptime, Timestamp) |
| `GET` | `/api/profile` | Allenki Sai Rakesh Developer Profile |
| `GET` | `/api/projects` | Project Portfolio Showcase |
| `GET` | `/api/skills` | Technical Skill Matrix |
| `POST` | `/api/contact` | Submit Contact Form Inquiry |


