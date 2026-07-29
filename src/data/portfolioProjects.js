const deployedAsset = (name) => `https://radhakishan404.is-a.dev/images/project/first-batch/${name}.png`;

export const CURRENT_PROJECTS = [
    {
        title: "InfoLive",
        description: "A full-stack marketplace for verified businesses, professionals, products, and services.",
        image: "/images/project/first-batch/infolive.png",
        category: "Client work",
        technology: "Next.js / Node.js / Microservices"
    },
    {
        title: "YOURVAY",
        description: "Real-time local discovery using nearby place information and community status signals.",
        image: "/images/project/first-batch/yourvay.png",
        category: "Product",
        technology: "Flutter / Next.js / Prisma"
    },
    {
        title: "Bhajan Baan",
        description: "A bilingual devotional platform for discovery, festivals, lyrics, reading, and saved collections.",
        image: deployedAsset("bhajan-baan"),
        category: "Product",
        technology: "Next.js / Flutter / Python"
    },
    {
        title: "Transformo",
        description: "A privacy-first universal file converter that processes files locally inside the browser.",
        image: "/images/project/first-batch/transformo.png",
        category: "Open source",
        technology: "TypeScript / WebAssembly / FFmpeg",
        href: "https://github.com/radhakishan404/transformo"
    },
    {
        title: "Linepop",
        description: "A browser-only caption studio for transcription, subtitle editing, and creator-ready exports.",
        image: deployedAsset("linepop"),
        category: "Open source",
        technology: "Preact / Whisper / FFmpeg",
        href: "https://github.com/radhakishan404/linepop"
    },
    {
        title: "NanhiPathshala",
        description: "A Hindi-first AI voice tutor for mothers helping children with everyday homework.",
        image: deployedAsset("nanhipathshala"),
        category: "Open source",
        technology: "Google ADK / Gemini / Cloud Run",
        href: "https://github.com/radhakishan404/nanhipathshala"
    },
    {
        title: "Replybox",
        description: "Instagram comment-to-DM automation with rules, webhooks, and activity monitoring.",
        image: deployedAsset("replybox"),
        category: "Product",
        technology: "Next.js / Meta APIs / Redis"
    },
    {
        title: "PookieMouse",
        description: "A native macOS cursor-effects application with themes, sounds, trails, and custom assets.",
        image: deployedAsset("pookiemouse"),
        category: "Experiment",
        technology: "Swift / AppKit / Core Graphics"
    },
    {
        title: "Hero Match Arena",
        description: "A collectible card game platform with web, mobile, administration, and backend systems.",
        image: deployedAsset("hero-match-arena"),
        category: "Product",
        technology: "Next.js / Flutter / Node.js"
    },
    {
        title: "Ritu Polymers",
        description: "An SEO-focused industrial catalogue for a PTFE and Teflon products manufacturer.",
        image: deployedAsset("ritu-polymers"),
        category: "Client work",
        technology: "Next.js / SEO / Structured data"
    },
    {
        title: "ASMC",
        description: "Sports-club software for memberships, facility booking, events, payments, and member services.",
        image: deployedAsset("asmc"),
        category: "Client work",
        technology: "Next.js / React Native / Node.js"
    },
    {
        title: "MagicLock",
        description: "Consumer, operations, mobile, and payments software for LPG safety devices.",
        image: deployedAsset("magiclock"),
        category: "Client work",
        technology: "React Native / Node.js / MySQL"
    },
    {
        title: "VeLivings",
        description: "Furniture commerce for handcrafted solid Sheesham wood collections.",
        image: deployedAsset("velivings"),
        category: "Client work",
        technology: "Next.js / Node.js / Commerce"
    },
    {
        title: "MatterClock",
        description: "A physical-pixel clock simulation built from hundreds of continuously sorted marbles.",
        image: deployedAsset("matterclock"),
        category: "Experiment",
        technology: "TypeScript / Matter.js / Canvas"
    },
    {
        title: "Antaraal",
        description: "A sponsored status-line and revenue-sharing platform for AI coding agents.",
        image: deployedAsset("antaraal"),
        category: "Product",
        technology: "TypeScript / Fastify / SQLite"
    }
];

export const PROJECT_CATEGORIES = ["All", "Client work", "Product", "Open source", "Experiment"];
