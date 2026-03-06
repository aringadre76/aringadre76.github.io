export type Project = {
  title: string;
  description: string;
  tags: string[];
  accentTags?: string[];
  href: string;
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export type ContactLink = {
  label: string;
  value: string;
  href: string;
};

export const projects: Project[] = [
  {
    title: "PinPlace",
    description:
      "Collaborative mapping app where users create shareable maps and add live location pins with CSV and KML export support.",
    tags: ["React", "TypeScript", "Vite", "Leaflet", "Firebase"],
    accentTags: ["Realtime"],
    href: "https://pinplace.vercel.app/",
  },
  {
    title: "Baseball Stats MCP Server",
    description:
      "Production-ready MCP server with 32 analytics tools spanning MLB stats, Statcast metrics, comparisons, and visualization workflows.",
    tags: ["Python", "MCP", "Async IO", "Analytics"],
    accentTags: ["PyPI"],
    href: "https://github.com/aringadre76/baseball-stats-mcp/",
  },
  {
    title: "BingeFlix",
    description:
      "Streaming discovery platform with OAuth login, AI recommendations, sports tracking, and personalized watchlist management.",
    tags: ["React", "Node.js", "OAuth", "Recommendations"],
    accentTags: ["AI"],
    href: "https://bingeflixstreaming.vercel.app/",
  },
  {
    title: "Satisfactory API",
    description:
      "REST API for Satisfactory game data—recipes, belts, buildings, calculations. Deployed with OpenAPI docs, Docker, and MCP server support.",
    tags: ["Python", "FastAPI", "REST", "Docker"],
    accentTags: ["Deployed"],
    href: "https://satisfactory-api-yfw1.onrender.com/",
  },
  {
    title: "Real-Time Drawing Board",
    description:
      "Collaborative drawing platform powered by WebSockets, Redis, and Docker with a responsive client optimized for low-latency strokes.",
    tags: ["Django", "Redis", "WebSockets", "Svelte"],
    accentTags: ["Realtime"],
    href: "https://real-time-drawing-board-front-deploy.vercel.app/",
  },
  {
    title: "Scholarly Research MCP",
    description:
      "Academic research MCP toolkit that unifies paper search, citation workflows, analysis, and web research for AI assistants.",
    tags: ["TypeScript", "MCP", "Research", "Tooling"],
    accentTags: ["NPM"],
    href: "https://github.com/aringadre76/mcp-for-research",
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    items: ["React", "TypeScript", "Vite", "CSS/Tailwind", "React Router"],
  },
  {
    title: "Backend",
    items: ["Python", "FastAPI", "REST APIs", "Node.js", "Docker"],
  },
  {
    title: "Tooling",
    items: ["Git", "GitHub Actions", "GitHub Pages", "Railway", "Render"],
  },
  {
    title: "Interests",
    items: [
      "AI Agents",
      "Game Dev/APIs",
      "Edge Compute",
      "Dev Experience",
      "Open Source",
    ],
  },
];

export const contactLinks: ContactLink[] = [
  {
    label: "Email",
    value: "aringadre@gmail.com",
    href: "mailto:aringadre@gmail.com",
  },
  {
    label: "GitHub",
    value: "github.com/aringadre76",
    href: "https://github.com/aringadre76",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/arin-gadre",
    href: "https://www.linkedin.com/in/arin-gadre",
  },
  {
    label: "Live site",
    value: "aringadre76.github.io",
    href: "https://aringadre76.github.io",
  },
];
