const PUBLISHING_SITE = "https://radhakishan404.is-a.dev";
const siteAsset = (path) => `${PUBLISHING_SITE}${path}`;
const articleAsset = (name) => siteAsset(`/articles/${name}`);
const articleLink = (slug) => `${PUBLISHING_SITE}/articles/${slug}/`;

const ARTICLE_DATA = [
    {
        slug: "free-ai-coding-tools-zero-rupees",
        title: "10 AI coding tools you can start for zero rupees",
        excerpt: "Official links, setup steps, current free limits, and the catches worth knowing before you choose a tool.",
        category: "AI coding guide",
        date: "Jul 23, 2026",
        cover: articleAsset("free-ai-coding-tools-zero-rupees.png")
    },
    {
        slug: "garry-tan-gstack-claude-code-agents",
        title: "Garry Tan's gstack: Claude Code as an AI startup team",
        excerpt: "A practical breakdown of the agents, installation flow, and the smallest useful way to start.",
        category: "Developer tools",
        date: "Jul 7, 2026",
        cover: articleAsset("garry-tan-gstack-claude-code-agents.svg")
    },
    {
        slug: "claude-fable-5-master-guide",
        title: "Claude Fable 5 master guide",
        excerpt: "A beginner-friendly guide to effort, long runs, memory, subagents, boundaries, and reusable prompt templates.",
        category: "Prompt engineering",
        date: "Jul 2, 2026",
        cover: articleAsset("claude-fable-5-master-guide.svg")
    },
    {
        slug: "instagram-new-post-sizes-2026",
        title: "Instagram's new post sizes: what to upload now",
        excerpt: "A practical guide to grid previews, carousels, Reels, Stories, and safe zones for creator content.",
        category: "Creator workflow",
        date: "Jul 2, 2026",
        cover: articleAsset("instagram-post-sizes-2026-01.png")
    },
    {
        slug: "sakana-fugu-breakdown",
        title: "Sakana Fugu: full breakdown",
        excerpt: "A researched look at the multi-agent model, its orchestration approach, access, and practical limitations.",
        category: "AI models",
        date: "Jun 23, 2026",
        cover: articleAsset("sakana-fugu-breakdown.svg")
    },
    {
        slug: "claude-fable-5-breakdown",
        title: "Claude Fable 5: capabilities, access, and limits",
        excerpt: "Benchmarks, coding and vision capabilities, access, pricing, and the constraints that matter in real work.",
        category: "AI models",
        date: "Jun 10, 2026",
        cover: articleAsset("claude-fable-5-breakdown.png")
    },
    {
        slug: "ai-content-prompterrr",
        title: "AI Content Prompterrr",
        excerpt: "A copy-ready prompt system for generating developer and AI Instagram carousels with Claude or ChatGPT.",
        category: "Prompt system",
        date: "Apr 6, 2026",
        cover: siteAsset("/rk-images/walking-black-suit.png")
    },
    {
        slug: "vimax-agentic-video-generation",
        title: "ViMax agentic video generation guide",
        excerpt: "How the open-source system moves from one prompt to scripts, storyboards, camera direction, and consistent video.",
        category: "AI tools",
        date: "Jun 4, 2026",
        cover: articleAsset("vimax-agentic-video-generation.png")
    },
    {
        slug: "rk-codex-hallmark-prompts",
        title: "Hallmark prompt vault for image generation",
        excerpt: "A reusable collection of cinematic poster, product, brand, and creative image prompts.",
        category: "Prompt system",
        date: "Jun 3, 2026",
        cover: articleAsset("rk-codex-hallmark-prompts.png")
    },
    {
        slug: "career-ops-guide",
        title: "Career-Ops open-source job search system",
        excerpt: "A practical guide to evaluating roles, tailoring CVs, scanning job boards, and tracking a job-search pipeline.",
        category: "Open source",
        date: "May 8, 2026",
        cover: articleAsset("career-ops-guide.svg")
    },
    {
        slug: "ai-tools-hub",
        title: "AI tools hub for developers and creators",
        excerpt: "A curated directory of useful free, freemium, open-source, and paid tools across real workflows.",
        category: "Developer resources",
        date: "May 8, 2026",
        cover: articleAsset("ai-tools-hub.svg")
    },
    {
        slug: "100-claude-code-prompts",
        title: "100+ Claude prompts for real development work",
        excerpt: "Copy-ready prompts for debugging, architecture, review, documentation, release work, and daily engineering.",
        category: "Prompt library",
        date: "Apr 2026",
        cover: articleAsset("100-claude-code-prompts.png")
    },
    {
        slug: "100-image-prompts",
        title: "Image prompts for Indian brands and products",
        excerpt: "Copy-ready directions for cinematic posters, menus, product visuals, and social content.",
        category: "Prompt system",
        date: "Apr 23, 2026",
        cover: articleAsset("100-image-prompts.png")
    },
    {
        slug: "caveman-mode-guide",
        title: "Caveman Mode: 75% fewer tokens",
        excerpt: "A no-fluff prompting style that cuts token usage while keeping the output useful.",
        category: "Prompt workflow",
        date: "Apr 14, 2026",
        cover: articleAsset("caveman-mode-guide.png")
    },
    {
        slug: "hermes-agent-guide",
        title: "Hermes Agent complete guide",
        excerpt: "What Hermes Agent is, why it matters, and how to use it for fast, reliable agent workflows.",
        category: "AI agents",
        date: "Apr 13, 2026",
        cover: null
    },
    {
        slug: "bonsai-free-models-guide",
        title: "Free AI models in five minutes with Bonsai",
        excerpt: "Route Claude Code or Codex through Bonsai and start using free frontier AI models.",
        category: "Developer tools",
        date: "Apr 13, 2026",
        cover: articleAsset("bonsai-free-models-guide.png")
    },
    {
        slug: "superpowers-deepdive",
        title: "obra/superpowers deep dive",
        excerpt: "A close look at the open-source agent workflow, its useful conventions, and where it fits into development.",
        category: "Developer tools",
        date: "Apr 2026",
        cover: articleAsset("superpowers-deepdive.png")
    },
    {
        slug: "gemma-complete-guide",
        title: "Google Gemma complete guide",
        excerpt: "A practical introduction to the model family, local usage, common tooling, and deployment choices.",
        category: "AI models",
        date: "Apr 2026",
        cover: articleAsset("gemma-complete-guide.png")
    },
    {
        slug: "free-courses-real-skills-zero-rupees",
        title: "Free courses, real skills, zero rupees",
        excerpt: "A focused learning library for developers and AI learners who want useful skills without wasting time.",
        category: "Free resources",
        date: "Apr 8, 2026",
        cover: articleAsset("free-courses-real-skills-zero-rupees.png")
    },
    {
        slug: "free-domain-guide",
        title: "Free domain guide for developers",
        excerpt: "Domain options for portfolios, side projects, documentation, demos, and personal brands.",
        category: "Free resources",
        date: "Apr 11, 2026",
        cover: articleAsset("free-domain-guide.png")
    },
    {
        slug: "10-coding-projects-you-can-add-to-your-resume",
        title: "10 coding projects you can add to your resume",
        excerpt: "Practical project directions that demonstrate more engineering judgment than another basic to-do app.",
        category: "Career growth",
        date: "Apr 6, 2026",
        cover: articleAsset("10-coding-projects-you-can-add-to-your-resume.png")
    },
    {
        slug: "claude-carousel-generator",
        title: "Claude carousel generator",
        excerpt: "A clean workflow for creating developer Instagram carousel ideas and layouts, from hook to slide sequence.",
        category: "Creator workflow",
        date: "Apr 6, 2026",
        cover: siteAsset("/rk-images/leaning-smile-black-suit.png")
    },
    {
        slug: "open-source-content-formats-for-dev-creators",
        title: "Open-source content formats that get attention",
        excerpt: "A better way to showcase open-source tools without making every post feel like a product advertisement.",
        category: "Creator workflow",
        date: "Apr 6, 2026",
        cover: siteAsset("/rk-images/mirror-selfie-black-suit.png")
    },
    {
        slug: "javascript-interview-series-plan",
        title: "JavaScript interview series plan for tech content",
        excerpt: "A repeatable format for turning JavaScript interview preparation into short-form or carousel content.",
        category: "Interview content",
        date: "Apr 6, 2026",
        cover: siteAsset("/rk-images/black-suit-looking-down.png")
    },
    {
        slug: "from-repo-to-reader",
        title: "From repo to reader",
        excerpt: "A simple workflow for turning repository-backed Markdown into structured, publishable technical writing.",
        category: "Developer workflow",
        date: "Apr 1, 2026",
        cover: articleAsset("from-repo-to-reader.png")
    },
    {
        slug: "odysseus-setup-guide",
        title: "Odysseus complete setup guide",
        excerpt: "Install and understand PewDiePie's open-source AI workspace, from the first command to a working local setup.",
        category: "Developer tools",
        date: "",
        cover: null
    }
];

const TOPIC_BY_CATEGORY = {
    "AI coding guide": "AI and models",
    "AI models": "AI and models",
    "AI tools": "AI and models",
    "AI agents": "AI and models",
    "Developer tools": "Developer tools",
    "Developer resources": "Developer tools",
    "Developer workflow": "Developer tools",
    "Open source": "Developer tools",
    "Prompt engineering": "Prompts and creation",
    "Prompt system": "Prompts and creation",
    "Prompt workflow": "Prompts and creation",
    "Prompt library": "Prompts and creation",
    "Creator workflow": "Prompts and creation",
    "Interview content": "Learning and career",
    "Free resources": "Learning and career",
    "Career growth": "Learning and career"
};

export const ARTICLES = ARTICLE_DATA.map((article) => ({
    ...article,
    href: articleLink(article.slug),
    topic: TOPIC_BY_CATEGORY[article.category] || "Other"
}));

export const ARTICLE_TOPICS = [
    "All",
    "AI and models",
    "Developer tools",
    "Prompts and creation",
    "Learning and career"
];
