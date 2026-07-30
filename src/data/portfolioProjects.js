const deployedAsset = (name) => `https://radhakishan404.is-a.dev/images/project/first-batch/${name}.png`;

export const CURRENT_PROJECTS = [
    {
        slug: "infolive",
        title: "InfoLive",
        description: "A full-stack marketplace for verified businesses, professionals, products, and services.",
        image: "/images/project/first-batch/infolive.png",
        category: "Client work",
        technology: "Next.js / Node.js / Microservices",
        year: "2024 — now",
        role: "Senior Software Engineer",
        status: "Active platform",
        to: "/portfolio/infolive",
        caseStudy: {
            intro: "InfoLive is not one website. It connects a public marketplace, an operations console, an API gateway, and domain services that all need to agree on the same businesses, people, products, and locations.",
            system: [
                {
                    title: "Public discovery",
                    detail: "Search, categories, locations, profiles, and indexable landing pages."
                },
                {
                    title: "API gateway",
                    detail: "One entry point for the public web, admin tools, and authenticated product flows."
                },
                {
                    title: "Domain services",
                    detail: "Auth, users, masters, businesses, campaigns, and shared platform data."
                },
                {
                    title: "Operations",
                    detail: "Admin workflows for reviewing, managing, and publishing marketplace data."
                }
            ],
            sections: [
                {
                    eyebrow: "The job",
                    title: "Keep a broad platform understandable.",
                    body: "The difficult part is not drawing another listing card. Public discovery, internal operations, SEO pages, authentication, and service contracts all move together. A change that looks small in one surface can affect several other teams and applications.",
                    points: [
                        "Work across the Next.js public marketplace and operations console.",
                        "Connect frontend flows to an API gateway and separate domain services.",
                        "Keep public profiles, categories, locations, and admin data aligned.",
                        "Use smoke tests and release checks around important product paths."
                    ]
                },
                {
                    eyebrow: "Engineering choice",
                    title: "Separate the surfaces, share the contracts.",
                    body: "The public marketplace and admin console solve different jobs, so they stay separate. Shared API contracts and domain boundaries keep them connected without turning the whole platform into one oversized application.",
                    points: [
                        "Public pages can focus on discovery, speed, and search visibility.",
                        "Admin workflows can prioritise dense operational tasks.",
                        "Services can evolve around business domains instead of page structure."
                    ]
                },
                {
                    eyebrow: "Where it stands",
                    title: "A platform foundation, not a static directory.",
                    body: "The current system supports public discovery and the operational work behind it. It provides a base for richer profiles, local landing pages, campaigns, member and store portals, and other product surfaces without rebuilding the core each time."
                }
            ]
        }
    },
    {
        slug: "yourvay",
        title: "YOURVAY",
        description: "Real-time local discovery using nearby place information and community status signals.",
        image: "/images/project/first-batch/yourvay.png",
        category: "Product",
        technology: "Flutter / Next.js / Prisma",
        year: "Current build",
        role: "Product engineer",
        status: "In development",
        to: "/portfolio/yourvay",
        caseStudy: {
            intro: "YOURVAY helps someone answer a simple question: where should we eat right now? The product combines place data with recent community signals instead of presenting another static restaurant directory.",
            system: [
                {
                    title: "Discover",
                    detail: "Search, nearby places, areas, categories, and useful place details."
                },
                {
                    title: "Contribute",
                    detail: "Location-aware taps capture a recent green, yellow, or red signal."
                },
                {
                    title: "Trust",
                    detail: "Freshness, proximity, recency, and repeat activity shape the signal."
                },
                {
                    title: "Operate",
                    detail: "Admin tools manage places, areas, vendors, banners, taps, and settings."
                }
            ],
            sections: [
                {
                    eyebrow: "The product",
                    title: "Turn nearby data into a current decision.",
                    body: "Most local discovery products are good at telling you that a place exists. YOURVAY is built around what is useful now: recent signals, opening context, location, and quick actions that help a person decide.",
                    points: [
                        "Flutter consumer app with discovery, search, place details, saved places, and settings.",
                        "Express and Prisma backend for places, taps, users, vendors, banners, and analytics.",
                        "Next.js admin console for day-to-day content and marketplace operations.",
                        "A web-first direction for indexable area, category, and place pages."
                    ]
                },
                {
                    eyebrow: "Hard part",
                    title: "Fresh signals need visible rules.",
                    body: "A coloured status is only useful when people can understand why it is trustworthy. The product therefore treats proximity, recency, contributor behaviour, and low-signal states as part of the interface—not hidden implementation details.",
                    points: [
                        "Location-aware validation for community taps.",
                        "Offline queueing and sync support in the mobile experience.",
                        "Freshness markers and low-confidence states for honest feedback.",
                        "Operational review paths instead of pretending every area has equal activity."
                    ]
                },
                {
                    eyebrow: "Where it stands",
                    title: "The complete product loop is taking shape.",
                    body: "The consumer app, backend, admin console, website, and support tooling already exist as one workspace. The next focus is a mobile-first web product that turns search traffic into useful place decisions and vendor actions."
                }
            ]
        }
    },
    {
        title: "Bhajan Baan",
        description: "A bilingual devotional platform for discovery, festivals, lyrics, reading, and saved collections.",
        image: deployedAsset("bhajan-baan"),
        category: "Product",
        technology: "Next.js / Flutter / Python"
    },
    {
        slug: "transformo",
        title: "Transformo",
        description: "A privacy-first universal file converter that processes files locally inside the browser.",
        image: "/images/project/first-batch/transformo.png",
        category: "Open source",
        technology: "TypeScript / WebAssembly / FFmpeg",
        year: "Open source",
        role: "Creator and maintainer",
        status: "Public repository",
        to: "/portfolio/transformo",
        links: [
            {
                label: "View source",
                href: "https://github.com/radhakishan404/transformo"
            }
        ],
        caseStudy: {
            intro: "Transformo is a universal file converter designed around a clear privacy rule: when the browser can do the work, the file should not leave the device.",
            system: [
                {
                    title: "Inspect",
                    detail: "Detect the input format and understand what conversions make sense."
                },
                {
                    title: "Suggest",
                    detail: "Offer useful output choices based on compatibility, quality, and size."
                },
                {
                    title: "Convert",
                    detail: "Run purpose-built JavaScript, WebAssembly, and FFmpeg handlers locally."
                },
                {
                    title: "Export",
                    detail: "Return the result directly and keep the app shell available offline."
                }
            ],
            sections: [
                {
                    eyebrow: "Why it exists",
                    title: "File conversion without the upload queue.",
                    body: "Many converter websites ask people to upload private files to an unknown server and wait. Transformo explores a different model: a polished browser application that performs core work locally and explains what is happening.",
                    points: [
                        "Smart format detection and compatible output suggestions.",
                        "Local image, audio, video, document, data, archive, and font workflows.",
                        "Installable PWA with an offline application shell.",
                        "Progress and route feedback for conversions that take time."
                    ]
                },
                {
                    eyebrow: "Engineering choice",
                    title: "Use the browser as a small conversion workstation.",
                    body: "There is no single library that handles every useful format. The application coordinates specialised tools—including WebAssembly builds, FFmpeg, archive utilities, font tooling, and media parsers—behind one predictable interaction.",
                    points: [
                        "Keep handlers deterministic and conscious of browser memory.",
                        "Load specialised conversion engines only when a workflow needs them.",
                        "Treat privacy and offline behaviour as product features, not footer copy."
                    ]
                },
                {
                    eyebrow: "Where it stands",
                    title: "A practical open-source base that can keep growing.",
                    body: "Transformo already provides the local-first architecture, conversion interface, format routing, PWA shell, and release workflow. New handlers can extend the tool without changing the central privacy model."
                }
            ]
        }
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
