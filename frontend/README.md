# PIXELFORGE

> **Ideas forged into reality.**

An original, responsive personal developer portfolio engineered for the **AWS Student Builder Challenge**, featuring a dark developer-workspace aesthetic, verified truthfulness architecture, and the signature **Forge Terminal** interactive simulation. Built for deployment on **AWS Amplify Hosting**.

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
- **The Forge Terminal**: A safe, client-side simulated interactive command interface for exploring portfolio content.
  - Commands: `help`, `about`, `skills`, `projects`, `achievements`, `contact`, `whoami`, `clear`.
  - Accessible polite live region (`aria-live="polite"`), command history browsing (`ArrowUp` / `ArrowDown`), and deep anchor navigation.
- **Data-Driven Portfolio Content**: Single source of truth in [`src/data/portfolio.ts`](./src/data/portfolio.ts), ensuring zero content drift between the terminal and rendered sections.
- **Strict Truthfulness Standard**: No fabricated metrics, fake stars, or dead links. All pending links are explicitly styled with dashed borders as editable placeholders.

---

## 🛠️ Tech Stack

| Layer          | Technology                                                                             |
| :------------- | :------------------------------------------------------------------------------------- |
| **Framework**  | [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)         |
| **Build Tool** | [Vite 8](https://vite.dev/) with static prerendering                                   |
| **Routing**    | [TanStack Router](https://tanstack.com/router)                                         |
| **Styling**    | [Tailwind CSS v4](https://tailwindcss.com/) + custom design tokens                     |
| **Icons & UI** | [Lucide React](https://lucide.dev/), Radix UI primitives                               |
| **Testing**    | [Vitest](https://vitest.dev/) + [@testing-library/react](https://testing-library.com/) |
| **Hosting**    | [AWS Amplify Hosting](https://aws.amazon.com/amplify/hosting/)                         |

---

## ⌨️ The Forge Terminal (Creative Feature)

The Forge Terminal is discoverable through a visible badge prompt:

> **Curious? Try `help` in the terminal.**

### Supported Commands

- `help`: Lists all supported commands and their descriptions.
- `about`: Summarizes the builder's profile and links to `#about`.
- `skills`: Groups competencies across Programming, Web, AI & Data, and Cloud & Tools.
- `projects`: Lists active concepts (`SafeWatch`, `Nexa`, `CodePilot AI`, `More experiments`) with anchor links.
- `achievements`: Highlights student ambassador and leadership milestones.
- `contact`: Outputs confirmed communication channels and links to `#contact`.
- `whoami`: Displays visitor session status and portfolio owner details.
- `clear`: Resets terminal history safely without breaking the input interface.

---

## 🚀 Getting Started

### Prerequisites

- Node.js `v20+` or `v22+` (or [Bun](https://bun.sh/) `v1.2+`)

### Installation & Run

```bash
# Clone the repository
git clone <repository-url>
cd pixelforge-developer-portfolio-main

# Install dependencies
bun install
# or: npm install

# Start development server
bun run dev
# or: npm run dev
```

### Verification & Quality Gates

```bash
# Run unit tests
bun run test

# Run ESLint validation
bun run lint

# Format code with Prettier
bun run format

# Production build with static prerendering
bun run build
```

---

## ☁️ AWS Amplify Hosting Configuration

This project includes an [`amplify.yml`](./amplify.yml) build specification configured for static prerendering output in `.output/public`:

```yaml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm ci --cache .npm --prefer-offline || npm install
    build:
      commands:
        - npm run build
  artifacts:
    baseDirectory: .output/public
    files:
      - "**/*"
  cache:
    paths:
      - .npm/**/*
      - node_modules/**/*
```

### Steps to Deploy on AWS Amplify

1. Push this repository to GitHub.
2. In the AWS Management Console, navigate to **AWS Amplify** > **Host web app**.
3. Connect your GitHub repository and select the `main` branch.
4. Amplify will automatically detect [`amplify.yml`](./amplify.yml).
5. Click **Save and deploy**.
6. Once deployed, test your live domain URL.

---

## 📝 Owner Replacement Checklist

Before final public deployment, update the bracketed placeholders in [`src/data/portfolio.ts`](./src/data/portfolio.ts):

- [ ] `profile.name`: Your full name
- [ ] `profile.about`: Your personal 2-3 sentence bio
- [ ] `profile.facts`: Your university, location, and current focus
- [ ] `projects`: Actual GitHub repository URLs (replace `null` when available)
- [ ] `achievements`: Specific details and years for your campus activities
- [ ] `contact.email`: Your official contact email
- [ ] `contact.links`: Your active GitHub, LinkedIn, and social profiles
