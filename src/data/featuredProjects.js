const asset = (name) => `/images/project/first-batch/${name}.png`;

const makeProject = ({
    id,
    title,
    description,
    technology,
    tags,
    thumbnail,
    projectType,
    visibility,
    role,
    overview,
    highlights,
    repository = "",
    live = ""
}) => ({
    id,
    title,
    description,
    logo: repository ? "/images/github.svg" : "",
    thumbnail,
    gitAvailable: Boolean(repository),
    tag: tags,
    technology,
    date: "2026",
    isPackage: false,
    onlineLink: live || repository,
    repositoryLink: repository,
    projectType,
    visibility,
    role,
    sliderImages: [],
    content: [
        {
            contentTitle: "Overview",
            contentDescription: overview,
            contentList: null
        },
        {
            contentTitle: "Product scope",
            contentDescription: "",
            contentList: highlights.map((text) => ({
                isLink: false,
                link: "",
                text
            }))
        },
        {
            contentTitle: "Contribution",
            contentDescription: role,
            contentList: repository ? [{
                isLink: true,
                link: repository,
                text: "View source repository"
            }] : null
        }
    ]
});

export const featuredProjects = [
    makeProject({
        id: 13,
        title: "InfoLive",
        description: "A full-stack marketplace for discovering verified businesses, professionals, products, and services.",
        technology: "Next.js 15, React 19, TypeScript, Node.js, Express, Seneca, Sequelize, MySQL",
        tags: "Client Work, Marketplace, Next.js, Node Js, Microservices, Front-end, Back-end",
        thumbnail: asset("infolive"),
        projectType: "Marketplace platform",
        visibility: "Private client work",
        role: "Product engineering across the public marketplace, administration workflows, backend services, platform integrations, and release-readiness tooling.",
        overview: "InfoLive is a multi-surface marketplace ecosystem with a public discovery experience, operational admin console, API gateway, microservices, mobile work, scraping tools, campaigns, and commerce extensions.",
        highlights: [
            "Verified business, professional, product, and service discovery",
            "Admin workflows for listings, users, vendors, categories, analytics, and settings",
            "Express gateway with Seneca services, shared data models, authentication, and permissions"
        ]
    }),
    makeProject({
        id: 14,
        title: "YOURVAY",
        description: "Real-time local discovery for deciding where to eat using nearby place signals and community taps.",
        technology: "Flutter, Next.js, React, Node.js, Express, Prisma, MySQL, ImageKit",
        tags: "Client Work, Mobile, Local Discovery, Flutter, Next.js, Node Js, Full Stack",
        thumbnail: asset("yourvay"),
        projectType: "Local discovery platform",
        visibility: "Private product work",
        role: "Full-stack product development spanning the Flutter consumer app, backend platform, admin operations, public website, search flows, and supporting data tools.",
        overview: "YOURVAY combines place discovery, location-aware status signals, search, saved places, vendor operations, banners, notifications, and a CMS-like administration surface.",
        highlights: [
            "Discover feed, place search, category filters, saved places, and location-aware place details",
            "Green, yellow, and red real-time tap signals with offline queueing and synchronization",
            "Admin tooling for places, categories, areas, vendors, banners, analytics, and settings"
        ]
    }),
    makeProject({
        id: 15,
        title: "Bhajan Baan",
        description: "A bilingual devotional discovery platform for bhajans, festivals, lyrics, reading, and saved collections.",
        technology: "Next.js 15, React 19, TypeScript, Express, Prisma, Flutter, Python, Three.js",
        tags: "Private Product, Next.js, Flutter, Node Js, Scraping, Full Stack, Content Platform",
        thumbnail: asset("bhajan-baan"),
        projectType: "Devotional content platform",
        visibility: "Private product work",
        role: "Platform architecture and product implementation across the public experience, administration, API, mobile app, and scraper review/import workflow.",
        overview: "Bhajan Baan is split into independently deployable frontend, admin, API, Flutter mobile, Python scraper, and scraper-review applications.",
        highlights: [
            "English and Hindi devotional search, festival pages, lyrics, and reading experiences",
            "Administrative content, taxonomy, moderation, and import workflows",
            "Dedicated scraping engine with review and controlled database ingestion"
        ]
    }),
    makeProject({
        id: 16,
        title: "Transformo",
        description: "A privacy-first universal file converter that runs locally inside the browser.",
        technology: "TypeScript, Vite, WebAssembly, FFmpeg, ImageMagick, SQLite WASM, Three.js",
        tags: "Open Source, Browser Tool, TypeScript, WebAssembly, Privacy, Front-end",
        thumbnail: asset("transformo"),
        projectType: "Browser utility",
        visibility: "Open source",
        role: "Designed and built the conversion experience, local processing architecture, format routing, PWA behavior, and deployment workflow.",
        overview: "Transformo handles image, audio, video, document, data, archive, font, and specialist formats without uploading user files to a server.",
        highlights: [
            "Local-first format detection and smart output recommendations",
            "Wide conversion coverage through browser WASM libraries",
            "Installable PWA with offline application-shell support"
        ],
        repository: "https://github.com/radhakishan404/transformo",
        live: "https://transformo-seven.vercel.app"
    }),
    makeProject({
        id: 17,
        title: "Linepop",
        description: "Browser-only caption studio for transcribing and exporting creator-ready video subtitles.",
        technology: "TypeScript, Preact, Whisper, Transformers.js, FFmpeg WASM, Remotion, WaveSurfer",
        tags: "Open Source, Creator Tool, AI, Video, TypeScript, WebAssembly",
        thumbnail: asset("linepop"),
        projectType: "Creator video tool",
        visibility: "Open source",
        role: "Built the private on-device transcription, subtitle editing, language selection, caption styling, and burned-in export workflow.",
        overview: "Linepop transcribes video and audio locally, supports major Indian languages, and exports MP4, SRT, VTT, ASS, and transcript formats without accounts or API keys.",
        highlights: [
            "Local Whisper transcription with English, Hinglish, Hindi, and regional language modes",
            "Creator caption presets and editable script/timing workflow",
            "In-browser FFmpeg encoding for burned-in MP4 exports"
        ],
        repository: "https://github.com/radhakishan404/linepop"
    }),
    makeProject({
        id: 18,
        title: "NanhiPathshala",
        description: "A Hindi-first AI voice tutor for mothers helping children with everyday homework.",
        technology: "Google ADK, Gemini, Vertex AI, Speech-to-Text, Text-to-Speech, Cloud Run, TypeScript",
        tags: "Open Source, AI Agent, Education, Hindi, Voice, Google Cloud",
        thumbnail: asset("nanhipathshala"),
        projectType: "AI education agent",
        visibility: "Open source",
        role: "Created the voice-led tutoring product, Google ADK agent workflow, photo-question support, parent summaries, and Cloud Run deployment path.",
        overview: "NanhiPathshala answers voice and photo-based homework questions in simple Hindi, asks reinforcement questions, and gives parents a concise understanding summary.",
        highlights: [
            "Hindi-first push-to-talk tutoring with automatic audio responses",
            "Photo and worksheet understanding through Gemini",
            "Session-based ADK agent with parent-friendly learning summaries"
        ],
        repository: "https://github.com/radhakishan404/nanhipathshala"
    }),
    makeProject({
        id: 19,
        title: "Replybox",
        description: "An Instagram comment-to-DM automation engine with rules, activity monitoring, and Meta integration.",
        technology: "Next.js 16, React 19, TypeScript, Meta APIs, Redis, MySQL",
        tags: "Private Product, Automation, Instagram, Next.js, Meta API, SaaS",
        thumbnail: asset("replybox"),
        projectType: "Social automation product",
        visibility: "Private product work",
        role: "Built the operator portal, Meta connection workflow, post and rule management, webhook processing, activity monitoring, and self-hosted customer packaging.",
        overview: "Replybox manages Instagram post rules and automated direct-message flows from a secure operator workspace, with a separate deployable buyer edition.",
        highlights: [
            "Meta account and webhook connection workflow",
            "Post-level rules and automated DM flows",
            "Activity logs for replies, failures, and missed comments"
        ]
    }),
    makeProject({
        id: 20,
        title: "PookieMouse",
        description: "A native macOS cursor-effects application with themes, sounds, trails, and custom assets.",
        technology: "Swift, AppKit, Core Graphics, macOS Accessibility APIs",
        tags: "Native App, macOS, Swift, UX, Creator Tool",
        thumbnail: asset("pookiemouse"),
        projectType: "Native macOS application",
        visibility: "Personal product",
        role: "Built the always-on-top cursor overlay, global click detection, themed effects, per-theme audio, custom asset imports, and menu-bar control surface.",
        overview: "PookieMouse replaces or augments the macOS cursor with visual click impacts and sound while allowing normal pointer events to reach the application underneath.",
        highlights: [
            "Transparent non-intercepting overlay window",
            "Hand, hammer, sword, wand, and crosshair cursor themes",
            "Imported PNG icons, custom sounds, trails, sizing, and permission controls"
        ]
    }),
    makeProject({
        id: 21,
        title: "Hero Match Arena",
        description: "A Bollywood-inspired collectible card game platform with web, mobile, administration, and backend systems.",
        technology: "Next.js 15, React 19, Flutter, Node.js, TypeScript, Framer Motion",
        tags: "Private Product, Game, Next.js, Flutter, Mobile, Full Stack",
        thumbnail: asset("hero-match-arena"),
        projectType: "Multiplatform game",
        visibility: "Private product work",
        role: "Product architecture and implementation across the web experience, Flutter mobile application, administration, backend services, game design, security, and deployment planning.",
        overview: "Hero Match Arena is a collectible card experience with hero discovery, matching mechanics, streaks, leaderboards, progression, and an operations dashboard.",
        highlights: [
            "Web and Flutter player experiences",
            "Admin CMS and REST API contract",
            "Documented game economy, database design, security, deployment, and growth strategy"
        ]
    }),
    makeProject({
        id: 22,
        title: "Ritu Polymers",
        description: "An SEO-focused industrial catalogue for a PTFE and Teflon products manufacturer.",
        technology: "Next.js 16, React 19, TypeScript, Tailwind CSS, Node.js, SEO, Structured Data",
        tags: "Client Work, Manufacturing, Ecommerce, Next.js, SEO, Full Stack",
        thumbnail: asset("ritu-polymers"),
        projectType: "Industrial product website",
        visibility: "Private client work",
        role: "Built the responsive product catalogue, category and product pages, enquiry flows, metadata, structured data, sitemap, and supporting backend services.",
        overview: "The platform presents PTFE sheets, rods, gaskets, seals, bellows, and related industrial products with search-friendly category and product routes.",
        highlights: [
            "Dynamic product and category pages",
            "Quotation and contact workflows",
            "SEO metadata, Open Graph, structured data, sitemap, and static generation"
        ]
    }),
    makeProject({
        id: 23,
        title: "ASMC",
        description: "A sports-club platform for memberships, facility booking, events, payments, and member services.",
        technology: "Next.js 14, React, React Native, Node.js, Redux Toolkit, Bootstrap, CI/CD",
        tags: "Client Work, Sports, Next.js, React Native, Admin, Full Stack",
        thumbnail: asset("asmc"),
        projectType: "Sports management platform",
        visibility: "Private client work",
        role: "Development across the public website, administration, API, React Native member app, booking workflows, and Android build/release automation.",
        overview: "ASMC supports a sports committee with member-facing digital services and operational tools across web, administration, backend, and mobile surfaces.",
        highlights: [
            "Membership and profile workflows",
            "Facility booking, events, calendar, QR, and printable documents",
            "Automated Android CI, signed builds, artifacts, and release workflow"
        ]
    }),
    makeProject({
        id: 24,
        title: "MagicLock",
        description: "A product, operations, mobile, and payments platform for LPG safety devices.",
        technology: "React, React Native, Node.js, Express, MySQL, MUI, Socket.IO, Payment Gateway",
        tags: "Client Work, Mobile, Admin, Ecommerce, Payments, Full Stack",
        thumbnail: asset("magiclock"),
        projectType: "Safety-product platform",
        visibility: "Private client work",
        role: "Worked across the React Native application, administration console, backend workspace, product operations, deployment configuration, and payment-gateway integration.",
        overview: "MagicLock combines consumer and operational software for LPG safety products, including mobile experiences, product management, administration, and payments.",
        highlights: [
            "React Native consumer application",
            "Feature-rich MUI administration and reporting console",
            "Backend workspace with real-time services and payment integration"
        ]
    }),
    makeProject({
        id: 25,
        title: "VeLivings",
        description: "A furniture-commerce platform focused on handcrafted solid Sheesham wood products.",
        technology: "Next.js 14, React, Node.js, TypeScript, Bootstrap, Swiper, PhotoSwipe",
        tags: "Client Work, Ecommerce, Furniture, Next.js, Admin, Full Stack",
        thumbnail: asset("velivings"),
        projectType: "Furniture ecommerce",
        visibility: "Private client work",
        role: "Product development across the storefront, catalogue and product experience, administration, backend API, brand assets, responsive behavior, and visual-audit tooling.",
        overview: "VeLivings presents handcrafted furniture collections with product discovery, commerce interactions, customer accounts, wishlist, cart, and operations tooling.",
        highlights: [
            "Responsive product catalogue and collection experiences",
            "Wishlist, cart, accounts, search, tracking, and editorial content",
            "Administration, API services, and automated visual-audit workflow"
        ]
    }),
    makeProject({
        id: 26,
        title: "MatterClock",
        description: "A physical-pixel clock simulation built from hundreds of continuously sorted marbles.",
        technology: "TypeScript, Matter.js, Canvas, Physics Simulation, Vite",
        tags: "Personal Project, Creative Coding, TypeScript, Physics, Front-end",
        thumbnail: asset("matterclock"),
        projectType: "Creative coding experiment",
        visibility: "Personal project",
        role: "Designed and implemented the marble display, digit patterns, physics simulation, continuous elevator sorter, and timed minute-transition system.",
        overview: "MatterClock keeps the displayed time static for most of each minute while an elevator continuously prepares the next pattern, then swaps displays during a short physical transition.",
        highlights: [
            "Matter.js simulation with hundreds of physical marbles",
            "Readable static display with three-second minute transitions",
            "Continuous elevator sorting for the next time pattern"
        ]
    }),
    makeProject({
        id: 27,
        title: "Antaraal",
        description: "An India-first sponsored status-line and revenue-sharing platform for AI coding agents.",
        technology: "TypeScript, Node.js, Fastify, SQLite, CLI, RazorpayX, Cryptographic Signing",
        tags: "Personal Product, Developer Tool, CLI, Fintech, TypeScript, Back-end",
        thumbnail: asset("antaraal"),
        projectType: "Developer monetization platform",
        visibility: "Private alpha",
        role: "Built the CLI integration, ad server, signed impression validation, developer earnings dashboard, advertiser console, payout workflow, and trust controls.",
        overview: "Antaraal uses supported AI-agent status-line integration to show a single sponsored line while the agent works, then shares validated impression revenue with the developer.",
        highlights: [
            "Official status-line integration without patching third-party tools",
            "Server-signed single-use impression challenges and suspicious-traffic quarantine",
            "Developer earnings, advertiser management, and UPI-oriented RazorpayX payouts"
        ]
    })
];
