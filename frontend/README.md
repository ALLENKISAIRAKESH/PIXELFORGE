# PIXELFORGE Frontend

> **Ideas forged into reality.**

The personal developer portfolio frontend for **Allenki Sai Rakesh**, featuring a dark developer-workspace aesthetic, responsive architecture, and the signature **Forge Terminal** interactive simulation.

---

## ⚡ Overview & Features

- **Brand & Aesthetics**: Premium dark developer workspace palette:
  - Background: `#0A0D12`
  - Surfaces: `#111722` / `#171F2B`
  - Accent Lime: `#C6FF4D`
  - Subtle Violet: `#8B5CF6`
  - Primary Text: `#F5F7F2`
  - Muted Text: `#AAB2BF`
  - Borders: `#303846`
- **Responsive Architecture**: Mobile-first design with smooth anchor scrolling, keyboard navigation, and `prefers-reduced-motion` compliance.
- **The Forge Terminal**: Client-side interactive command interface for exploring portfolio content.
  - Commands: `help`, `about`, `skills`, `projects`, `achievements`, `contact`, `whoami`, `clear`.
  - Accessible polite live region (`aria-live="polite"`), command history browsing (`ArrowUp` / `ArrowDown`), and deep anchor navigation.
- **Data-Driven Portfolio Content**: Single source of truth in [`src/data/portfolio.ts`](./src/data/portfolio.ts).

---

## 🛠️ Tech Stack

| Layer | Technology |
| :--- | :--- |
| **Framework** | [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) |
| **Build Tool** | [Vite 8](https://vite.dev/) + [Nitro](https://nitro.build/) |
| **Routing** | [TanStack Router](https://tanstack.com/router) & [TanStack Start](https://tanstack.com/start) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) |
| **Icons & UI** | [Lucide React](https://lucide.dev/), Radix UI primitives |
| **Testing** | [Vitest](https://vitest.dev/) + [@testing-library/react](https://testing-library.com/) |

---

## 🚀 Getting Started

### Prerequisites
- Node.js `v20+` or `v22+` (or [Bun](https://bun.sh/) `v1.2+`)

### Installation & Run

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

### Verification & Quality Gates

```bash
# Run unit tests
npm run test

# Run ESLint validation
npm run lint

# Format code with Prettier
npm run format

# Production build
npm run build
```

---

## ☁️ Deployment

Built for deployment on **Render** (Static Site with publish directory `.output/public`) or **AWS Amplify Hosting**.
