# Rahul Kumar Choudhary

Junior Software Engineer building backend systems with C#, ASP.NET Core, and Node.js — REST APIs, webhooks, and third-party integrations.

📧 [rahul24167@gmail.com](mailto:rahul24167@gmail.com) · 📞 +91 7488 662 772 · 💼 [LinkedIn](https://www.linkedin.com/in/rahul-x-tech/) · 💻 [GitHub](https://github.com/rahul24167) · 🌐 [Portfolio](https://rahul-choudhary.me) · ✍️ [Hashnode](https://rahul-choudhary.hashnode.dev/)

## Education

**National Institute of Technology Srinagar** — *Nov 2022 – Jul 2026*

Bachelor of Technology

## Experience

### Junior Software Engineer | ENTNT — *Nov 2025 – Present*

*C#, ASP.NET Core, EF Core, SQL Server, React, Angular, Linux*

**Client: Kiwi Ortho — Patient Management Platform**

- Worked on backend development for an orthodontic patient management platform, integrating Dental Monitoring and Open Dental through REST APIs and webhooks to connect external systems with patient and treatment workflows.
- Implemented a QR-code-based patient photo capture workflow. Staff generate a patient-specific QR code, patients open a mobile web page to capture and upload clinical photographs, and doctors access the images from the desktop application as part of the patient's records.

**Internal Product — Employee Management System**

- Developed a leave management system with rolling 365-day leave balance calculations and built employee scheduling functionality.
- Refactored attendance and presence checks to evaluate employee presence against each employee's assigned work schedule.

**Client: TMS Shipping**

- Developed a captive portal for vessel internet access, supporting user authentication and tracking of network usage.
- Worked on Linux networking, including NAT, packet forwarding, and traffic management using iptables/nftables, with DHCP and DNS services.
- Built Device Management and Travel Management applications using Microsoft Power Apps, Power Automate, and SharePoint.

## Internships & Earlier Experience

**AI & Automation Intern, AND Business Consulting** — *Aug 2025 – Oct 2025*

Analysed business workflows and collaborated with stakeholders to implement AI-driven automation for internal and client processes using n8n, LLMs, and AWS.

**Full Stack Developer, Go Studio Production** — *Jun 2025 – Aug 2025*

Built and maintained responsive web applications and delivered user-facing features with design and backend teams using Next.js, Tailwind CSS, Supabase.

**Engineering Intern, Sukoon Unlimited** — *Feb 2025 – Apr 2025*

Developed reusable frontend components and admin-portal features for a senior-citizen services platform using Next.js and React.

## Projects

**Perpetual Futures Exchange** — *TypeScript, Node.js, Redis Streams, WebSockets, PostgreSQL, Prisma* · [GitHub](https://github.com/rahul24167/perpetual-futures)

- Designed a decoupled trading architecture with separate backend and order-matching engine components, connected through Redis Streams.
- Implemented order-book and order-processing workflows, with WebSockets for real-time updates and PostgreSQL persistence through Prisma ORM.

**Prediction Market** — *Next.js, Node.js, TypeScript* · [GitHub](https://github.com/rahul24167/pridiction-market)

- Built a platform where users create markets and trade YES/NO positions through an order book.
- Implemented position splitting and merging, and administrator-controlled market resolution.

**Terminal Coding Agent** — *TypeScript, Ollama, Local LLMs*

- Built a terminal-based agent harness that runs local language models through Ollama and uses an agent loop to perform coding tasks.
- Implemented repository file-reading and editing tools, plus terminal command execution, so the agent can inspect and modify code and run development commands.

**CreativeQuarter.in** — *Next.js, TypeScript* · [Live site](https://www.creativequarter.in/)

- Built an e-commerce platform for selling posters.

**Job Board** — *Next.js, Node.js, TypeScript* · [GitHub](https://github.com/rahul24167/job-board)

- Built job posting and application workflows, including employer-to-applicant messaging and notifications.

## Technical Skills

- **Languages:** TypeScript, JavaScript, C#, SQL, Python, C++, HTML, CSS
- **Backend:** Node.js, Express.js, ASP.NET Core, REST APIs, Webhooks, Entity Framework Core
- **Frontend:** React, Next.js, Angular
- **Databases & Messaging:** PostgreSQL, SQL Server, Prisma ORM, Redis Streams
- **Infrastructure & Tools:** Docker, Linux, iptables, nftables, DHCP, DNS, AWS, Cloudflare, Git, Azure DevOps, Ollama
- **Other:** WebSockets, Power Apps, Power Automate, SharePoint, CI/CD

---

## About this repo

This repository hosts my personal portfolio site (the page you are reading doubles as my resume preview). It is built with [Next.js](https://nextjs.org/) (App Router + TypeScript).

### Getting started

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in a browser.

### Scripts

- `npm run dev` — start the development server
- `npm run build` — production build
- `npm start` — serve the production build

### Project structure

- `app/` — root layout (`layout.tsx`), home page (`page.tsx`), global
  stylesheet (`globals.css`)
- `components/` — `Sidebar`, `Navbar`, `Projects`, `Blog`, `Experience`,
  `About`, `Contact`
- `data/` — project, blog post, and skills content
- `public/` — images and favicon
