export type LinkRef = { label: string; url: string };

export type Project = {
  title: string;
  description: string;
  tech?: string;
  links: LinkRef[];
};

export const projects: Project[] = [
  {
    title: "PinPlace",
    description:
      "A collaborative mapping web app where users create shareable maps and others add location pins in real-time. Features auto-lock, CSV/KML export, and Firebase-backed real-time sync.",
    tech: "React, TypeScript, Vite, Tailwind CSS, Leaflet, Firebase, React Router",
    links: [
      { label: "GitHub", url: "https://github.com/aringadre76/pinplace" },
      { label: "Demo", url: "https://pinplace.vercel.app/" },
    ],
  },
  {
    title: "Baseball Stats MCP Server",
    description:
      "Production-ready MCP (Model Context Protocol) server exposing 32 tools for comprehensive baseball analytics: traditional stats, Statcast metrics, pitch/batted-ball breakdowns, visualizations and comparisons. Integrates MLB & Statcast data, provides Plotly visualizations, and includes a robust test suite (~78% tools passing in docs).",
    tech: "Python, MCP, Async IO, Data Visualization",
    links: [
      { label: "GitHub", url: "https://github.com/aringadre76/baseball-stats-mcp/" },
      { label: "PyPI", url: "https://pypi.org/project/baseball-stats-mcp/" },
    ],
  },
  {
    title: "BingeFlix",
    description:
      "BingeFlix helps users discover where to stream movies and shows, manage personalized watchlists, and receive AI-driven recommendations. Features include Google OAuth login, smart watchlist management, AI recommendation endpoints that analyze a user's watchlist to suggest titles, sports team tracking, and endpoints to fetch current streaming availability across platforms. Deployed frontend and backend demos are available.",
    links: [
      { label: "Backend GitHub", url: "https://github.com/aringadre76/bingeflix-backend" },
      { label: "Frontend GitHub", url: "https://github.com/aringadre76/bingeflix-frontend" },
      { label: "Live Demo", url: "https://bingeflixstreaming.vercel.app/" },
      { label: "Video Demo", url: "https://www.youtube.com/watch?v=WiLgSWHEQ1E" },
    ],
  },
  {
    title: "Dino Game on Basys3",
    description:
      "FPGA implementation of a simplified Chrome dinosaur game targeting the Basys3 board. Provides RTL modules for game objects, display drivers, testbenches for behavioral and gate-level simulation, and scripts to generate ROMs from PNG assets for hardware synthesis with Vivado/Yosys.",
    tech: "SystemVerilog, FPGA (Basys3), Verilator, Vivado",
    links: [
      { label: "GitHub", url: "https://github.com/aringadre76/dino-game" },
      { label: "Demo Video", url: "https://www.youtube.com/watch?v=A_kBcON_fjk" },
    ],
  },
  {
    title: "Real-Time Drawing Board",
    description:
      "Collaborative real-time drawing platform. Backend: Django + Django Channels with Redis channel layer for low-latency WebSocket messaging, stateless worker design and Docker deployment options. Frontend: Svelte-based client supporting responsive, low-latency drawing with smart interpolation and adaptive point handling. Includes development and deployment instructions, Vercel frontend deployment, and separate GitHub repos for frontend and backend.",
    tech: "Django, Channels, Redis, WebSockets, Svelte",
    links: [
      { label: "Frontend GitHub", url: "https://github.com/aringadre76/real-time-drawing-board-frontend" },
      { label: "Backend GitHub", url: "https://github.com/aringadre76/real-time-drawing-board-backend-deploy" },
      { label: "Live Demo", url: "https://real-time-drawing-board-front-deploy.vercel.app/" },
    ],
  },
  {
    title: "Scholarly Research MCP Server",
    description:
      "Consolidated MCP toolset for academic research: multi-source search (PubMed, ArXiv, Google Scholar), paper analysis, citation management and Firecrawl-enabled web research. Published NPM package and TypeScript tooling for integration with AI assistants.",
    tech: "TypeScript, MCP, Web Scraping, OpenAI",
    links: [
      { label: "GitHub", url: "https://github.com/aringadre76/mcp-for-research" },
      { label: "NPM", url: "https://www.npmjs.com/package/scholarly-research-mcp" },
    ],
  },
  {
    title: "Amazon Link Cleaner",
    description:
      "Small Python service that parses Amazon product URLs, extracts the ASIN and region, and returns a clean canonical product link. Supports direct path cleaning (like fxtwitter), short-link preservation (a.co / amzn.to), a programmatic /api/create endpoint for short-clean links, and an optional Docker deployment via docker-compose.",
    tech: "Python, URL parsing, HTTP API, Docker",
    links: [
      { label: "GitHub", url: "https://github.com/aringadre76/amazon-link-cleaner" },
    ],
  },
  {
    title: "HabitTracker",
    description: "A React app for tracking habits with a calendar view.",
    tech: "React, Vite",
    links: [
      { label: "GitHub", url: "https://github.com/aringadre76/habit-tracker/" },
      { label: "Demo", url: "https://habit-tracker.vercel.app/" },
    ],
  },
  {
    title: "Satisfactory Game Data API",
    description:
      "A REST API built with FastAPI that parses Satisfactory game descriptor files and serves structured data for items, recipes, buildings, miners, belts, transportation systems, and resource nodes. Includes filtering, search, production calculation endpoints, and auto-generated interactive Swagger/ReDoc documentation. Designed for factory planners, calculators, and automation scripts.",
    tech: "Python, FastAPI, Uvicorn, REST API, JSON",
    links: [
      { label: "GitHub", url: "https://github.com/aringadre76/satisfactory-api" },
    ],
  },
  {
    title: "Austere Browser",
    description:
      "Privacy-first, memory-efficient Chromium fork with aggressive bloat removal. Built on Ungoogled-Chromium with extensive component stripping (Safe Browsing, Sync, Translate, DRM, and dozens more), configurable memory management levels (30s to 1hr tab discard thresholds), reduced V8 heap limits (128MB vs 2GB), parallel downloading, enhanced privacy defaults (all telemetry disabled, third-party cookies blocked, WebRTC leak protection), and tab memory usage tooltips. Achieves ~84% memory reduction vs Chrome with 10 tabs open.",
    tech: "C++, Chromium, GN Build, Python, Bash, Linux",
    links: [
      { label: "GitHub", url: "https://github.com/aringadre76/austere-browser" },
    ],
  },
  {
    title: "BananaSlug Emulator",
    description:
      "Full C++17 emulator for a custom RISC-style architecture implementing CPU, memory subsystem, ROM loading and an SDL2-based GPU framebuffer. Includes a CMake build, automated test suite for instruction validation, and tooling to load .slug ROMs for interactive debugging and CI testing.",
    tech: "C++17, SDL2, CMake, Emulator, Testing",
    links: [{ label: "GitHub", url: "https://github.com/aringadre76/cpp-emulator" }],
  },
  {
    title: "Distributed Task Queue System",
    description:
      "Design and roadmap for a horizontally scalable task queue: Go-based microservices, Redis/RabbitMQ queues, PostgreSQL metadata, worker pool orchestration, and Prometheus/Grafana monitoring. Focused on reliability patterns (retries, dead-letter queues, circuit breakers) and Kubernetes deployment for auto-scaling.",
    tech: "Go, Redis, RabbitMQ, PostgreSQL, Kubernetes",
    links: [
      { label: "GitHub", url: "https://github.com/aringadre76/distributed-task-queue" },
    ],
  },
  {
    title: "Easy Wireshark",
    description:
      "LLM-assisted network traffic analyzer that wraps tshark to capture packets and uses a local LLM for natural-language query parsing and human-friendly protocol explanations. Supports real-time capture, command interpretation and a web UI for results.",
    tech: "Python, tshark, LLM, Network Analysis",
    links: [{ label: "GitHub", url: "https://github.com/aringadre76/easy-wireshark" }],
  },
  {
    title: "Image Classification Project",
    description:
      "End-to-end PyTorch pipeline using ResNet-50: dataset preprocessing, train/validation splits, learning-rate scheduling and early stopping, and batch prediction for unlabeled images. Produces trained model artifacts (best_model.pth) and CSV prediction outputs suitable for downstream evaluation.",
    tech: "Python, PyTorch, ResNet-50, Data Processing",
    links: [
      { label: "GitHub", url: "https://github.com/aringadre76/ImageClassifcationModel" },
    ],
  },
  {
    title: "Intermediate Representation Compiler",
    description:
      "Course project implementing a lexical scanner, parser/AST builder, IR generator and a local value numbering optimization pass. Includes test harnesses and scripts to compile source files to IR and apply optimization passes as part of the CSE110A homework pipeline.",
    tech: "Python, Compiler Design, IR, Optimization",
    links: [{ label: "GitHub", url: "https://github.com/aringadre76/ir-compiler" }],
  },
  {
    title: "OpenBiomechanics Injury Risk Assessment",
    description:
      "Machine-learning pipeline for pitcher injury risk using high-fidelity biomechanical time-series data. Extracts 195+ features, performs temporal feature engineering, and runs ensemble models for clinical risk stratification (documented metrics and processing throughput).",
    tech: "Python, ML, Time-series Feature Engineering",
    links: [
      { label: "GitHub", url: "https://github.com/aringadre76/baseball-injury-risk-assessment/" },
    ],
  },
];

export type Experience = {
  title: string;
  company: string;
  period: string;
  bullets: string[];
};

export const experiences: Experience[] = [
  {
    title: "Co-op Intern – GenAI CPU Analytics Tool",
    company: "Nutanix",
    period: "Jan 2025 – June 2025",
    bullets: [
      "Architected containerized benchmarking platform for CPU inference of LLMs using Docker Compose, achieving 95% deployment consistency across client and VM services",
      "Built interactive Streamlit UI supporting 10+ LLM models with configurable parameters, reducing manual testing effort by 80%",
      "Configured Prometheus metrics pipeline collecting 50+ system metrics and designed Grafana dashboards for real-time performance analysis",
      "Designed SQLite schema with 6 normalized tables storing 10,000+ benchmark records for trend analysis",
    ],
  },
  {
    title: "Software Engineer Intern",
    company: "The Difference LLC",
    period: "Sept 2023 – June 2025",
    bullets: [
      "Architected Flutter mobile components with Provider state management, streamlining 15+ interactive features and improving responsiveness by 30%",
      "Integrated 8 third-party APIs (payments, social), boosting user engagement by 45% and enabling 5 new features",
      "Authored API documentation for 25+ endpoints using Swagger, cutting onboarding time by 50%",
      "Implemented GitHub Actions CI/CD with a 3-stage deployment, reducing deployment time from 45 to 12 minutes and achieving 99% success rate",
    ],
  },
  {
    title: "Engineer – Product Demos & Website Revamp",
    company: "Othentk",
    period: "2025 – Present",
    bullets: [
      "Presented product at 5+ startup events and trade shows, collecting feedback from 200+ potential customers and 12 investors, generating 3 qualified leads",
      "Redesigned company website for responsive performance, achieving 40% faster page loads and 25% higher user engagement",
    ],
  },
];

export const aboutParagraphs: string[] = [
  "Hello! I’m Arin, currently pursuing a Master’s in Applied Data Intelligence at San Jose State University, and I hold a B.A. in Network and Digital Technology from UC Santa Cruz. I’m passionate about building scalable applications and exploring new technologies, and I’m actively seeking opportunities where I can contribute my skills in machine learning, software development, and system optimization to transformative projects.",
  "Examples of my work include the Baseball Stats MCP Server — a comprehensive baseball analytics MCP server exposing 32 analysis tools and real-time MLB/Statcast integrations; the OpenBiomechanics injury risk assessment pipeline (ML-based pitcher injury prediction with 195+ biomechanical features); and the Scholarly Research MCP Server for consolidated academic search and analysis. My work focuses on production-ready tooling, observability, and making research-grade analytics accessible via APIs and MCP tools.",
  "Recent experience: at Nutanix I built a containerized CPU benchmarking platform for LLM inference with Docker Compose, added a Streamlit UI for 10+ models, and instrumented Prometheus/Grafana with a SQLite backend—raising deployment consistency to 95% and enabling data-driven performance analysis. At The Difference I architected Flutter components, integrated eight third‑party APIs, and implemented GitHub Actions CI/CD to speed and stabilize deployments.",
  "With expertise across Python, C++, React, Flutter, Django, and ML frameworks, I enjoy turning complex systems into reliable products. Let’s connect and build something impactful.",
];

export const roles: string[] = [
  "ml/ai engineer",
  "full-stack developer",
  "creative technologist",
  "problem solver",
];

export const heroDescription =
  "Building innovative solutions at the intersection of technology and human experience.";

export type ContactLink = {
  title: string;
  value: string;
  href: string;
  note: string;
};

export const contactLinks: ContactLink[] = [
  {
    title: "email",
    value: "aringadre@gmail.com",
    href: "mailto:aringadre@gmail.com",
    note: "best way to reach me",
  },
  {
    title: "linkedin",
    value: "linkedin.com/in/arin-gadre",
    href: "https://www.linkedin.com/in/arin-gadre",
    note: "professional network",
  },
  {
    title: "github",
    value: "github.com/aringadre76",
    href: "https://github.com/aringadre76",
    note: "code repositories",
  },
];
