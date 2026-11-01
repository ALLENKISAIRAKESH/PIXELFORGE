# PIXELFORGE Backend Service

REST API backend for PIXELFORGE developer portfolio, built with Node.js and Express.

## Features
- **Health Check**: `GET /api/health`
- **Developer Profile**: `GET /api/profile` (returns Allenki Sai Rakesh's portfolio profile)
- **Projects Catalog**: `GET /api/projects` (AI and full-stack projects with live metrics)
- **Technical Skills**: `GET /api/skills` (categorized competencies)
- **Contact Inquiries**: `POST /api/contact` (validates and receives contact requests)

## Local Development

```bash
# Install dependencies
npm install

# Run server in watch mode
npm run dev

# Or run standard production start
npm start
```

The server runs by default on `http://localhost:5000` (or `PORT` environment variable).

## Deployment on Render
Render automatically runs:
- **Build Command**: `npm install`
- **Start Command**: `npm start`
- **Port**: Dynamically bound using `PORT` environment variable.

