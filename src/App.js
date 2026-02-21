import React, { useEffect, useMemo, useState } from "react";
import "./App.css";

const profile = {
  name: "Radhakishan Jangid",
  role: "Senior Software Engineer",
  tagline:
    "I build product-grade web and mobile systems for startups and scale-ups, from architecture to deployment.",
  location: "Mumbai, India",
  email: "radhakishanjangid404@gmail.com",
  phone: "+91 9820938440",
  website: "https://radhakishan404.github.io/",
  linkedin: "https://www.linkedin.com/in/radhakishanjangid",
  github: "https://github.com/radhakishan404",
  devto: "https://dev.to/radhakishanjangid404",
  whatsapp: "https://wa.me/919820938440",
  sponsor: "https://github.com/sponsors/radhakishan404",
  resume: "/Radhakishan-Updated-Resume.pdf",
};

const skills = [
  "Node.js",
  "React",
  "Next.js",
  "React Native",
  "TypeScript",
  "JavaScript",
  "NestJS",
  "AWS",
  "Docker",
  "Terraform",
  "CI/CD",
  "Microservices",
  "PostgreSQL",
  "MongoDB",
  "MySQL",
  "MERN",
];

const experience = [
  {
    role: "Senior Software Engineer",
    company: "Cachetech Advisor Solutions (USA)",
    period: "Feb 2024 - Present",
    points: [
      "Built an end-to-end workflow management platform with automation + manual operations.",
      "Designed multi-tenancy data models for households, clients, notes, and task modules.",
      "Delivered a React Native app for cross-platform field and client workflows.",
      "Translated business requirements into production architecture with long-term scalability.",
    ],
  },
  {
    role: "Manager - Software Engineer",
    company: "Edubridge India Pvt Ltd",
    period: "Dec 2022 - Jan 2024",
    points: [
      "Led transition from PHP stack to MERN architecture.",
      "Built a resume builder product and modular service boundaries.",
      "Implemented CI/CD deployments with Jenkins and Docker for reliable releases.",
    ],
  },
  {
    role: "Senior Software Engineer",
    company: "TechStalwarts Software Development LLP",
    period: "Sep 2020 - Nov 2022",
    points: [
      "Managed ecommerce frontend/backend and AWS deployments.",
      "Integrated third-party APIs and handled major UK healthcare feature deliveries.",
      "Owned key features for customer and vendor-facing products.",
    ],
  },
];

const caseStudies = [
  {
    title: "Workflow Platform for US Fintech",
    summary:
      "Designed and shipped a workflow engine with manual + automated execution paths and role-based task orchestration.",
    impact: [
      "Multi-tenant data architecture",
      "Workflow visibility dashboard",
      "Mobile companion in React Native",
    ],
  },
  {
    title: "Nirulas Commerce + POS",
    summary:
      "Built and supported ordering + branch operations experiences with scalable API integrations and ops-focused modules.",
    impact: [
      "Location-based order assignment",
      "Third-party integration workflows",
      "Frontend + backend ownership",
    ],
  },
  {
    title: "SSHipIt (Open Source)",
    summary:
      "Created a self-hosted CI/CD delivery approach over SSH to simplify deployments for Node.js, Next.js, and React apps.",
    impact: [
      "Practical release automation",
      "DevOps-friendly architecture",
      "Public docs and live demo",
    ],
  },
];

const featuredProjects = [
  {
    name: "SSHipIt",
    description:
      "Self-hosted CI/CD over SSH for Node.js, Next.js, and React apps.",
    stack: "JavaScript, CI/CD, DevOps",
    link: "https://github.com/radhakishan404/sshipit",
    live: "https://sshipit.vercel.app/",
  },
  {
    name: "Notch Prompter",
    description: "A notch-aligned native macOS teleprompter built with SwiftUI.",
    stack: "SwiftUI, macOS",
    link: "https://github.com/radhakishan404/notch-prompter",
    live: "https://notch-prompter.vercel.app",
  },
  {
    name: "Smell & Sense",
    description: "Perfume e-commerce platform with modern full-stack architecture.",
    stack: "Next.js, Node.js, PostgreSQL",
    link: "https://smellandsense.com/",
  },
  {
    name: "BidsInfoGlobal",
    description: "Tender listing platform with subscription-based access control.",
    stack: "React, Node.js, MongoDB",
    link: "https://bidsinfoglobal.com/",
  },
  {
    name: "Nirulas Food & Drink",
    description:
      "Ordering and operations platform with location-based branch assignment.",
    stack: "React, Node.js, Express, Sequelize, MySQL",
    link: "https://delivery.nirulas.com/",
  },
  {
    name: "Nirulas POS",
    description:
      "POS and branch operations workflow integrated with food delivery aggregators.",
    stack: "React, Node.js, Sequelize",
    link: "https://branch.nirulas.com/",
  },
];

const serviceOffers = [
  {
    title: "MVP Engineering Sprint",
    desc: "2-4 week focused build to ship your core product flow fast.",
    cta: "Discuss MVP scope",
    action: `mailto:${profile.email}?subject=MVP%20Engineering%20Sprint`,
  },
  {
    title: "Monthly Engineering Retainer",
    desc: "Dedicated full-stack support for feature velocity, stability, and releases.",
    cta: "Ask for monthly plan",
    action: `mailto:${profile.email}?subject=Monthly%20Engineering%20Retainer`,
  },
  {
    title: "System Design + Scale Review",
    desc: "Architecture deep-dive for scaling, reliability, and maintainability.",
    cta: "Book architecture review",
    action: `mailto:${profile.email}?subject=Architecture%20Review%20Request`,
  },
];

const education = [
  {
    degree: "MBA - Information Technology",
    school: "DPU ERP, Pune",
    period: "Aug 2024 - Present",
  },
  {
    degree: "BSc - Information Technology",
    school: "University of Mumbai",
    period: "Jun 2015 - Jun 2018",
  },
];

const community = [
  "Member of Global Shapers Community, Udaipur Hub (World Economic Forum initiative).",
  "Contributed to youth development, career guidance, and social impact initiatives.",
  "Worked across diverse stakeholders, strengthening leadership and communication.",
];

function App() {
  const [repos, setRepos] = useState([]);
  const [repoStatus, setRepoStatus] = useState("loading");
  const [githubProfile, setGithubProfile] = useState(null);
  const [devPosts, setDevPosts] = useState([]);
  const [postStatus, setPostStatus] = useState("loading");

  useEffect(() => {
    let isMounted = true;

    async function loadGitHubProfile() {
      try {
        const response = await fetch("https://api.github.com/users/radhakishan404");
        const data = await response.json();

        if (!data || typeof data !== "object" || !data.login) {
          throw new Error("Unexpected profile response");
        }

        if (isMounted) {
          setGithubProfile(data);
        }
      } catch (error) {
        if (isMounted) {
          setGithubProfile(null);
        }
      }
    }

    async function loadRepos() {
      try {
        const response = await fetch(
          "https://api.github.com/users/radhakishan404/repos?per_page=100&sort=updated"
        );
        const data = await response.json();

        if (!Array.isArray(data)) {
          throw new Error("Unexpected repos response");
        }

        const curated = data
          .filter((repo) => !repo.fork && !repo.archived)
          .sort(
            (a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
          )
          .slice(0, 8);

        if (isMounted) {
          setRepos(curated);
          setRepoStatus("ready");
        }
      } catch (error) {
        if (isMounted) {
          setRepoStatus("error");
        }
      }
    }

    async function loadDevPosts() {
      try {
        const response = await fetch(
          "https://dev.to/api/articles?username=radhakishanjangid404&per_page=4"
        );
        const data = await response.json();

        if (!Array.isArray(data)) {
          throw new Error("Unexpected dev.to response");
        }

        if (isMounted) {
          setDevPosts(data);
          setPostStatus("ready");
        }
      } catch (error) {
        if (isMounted) {
          setPostStatus("error");
        }
      }
    }

    loadGitHubProfile();
    loadRepos();
    loadDevPosts();

    return () => {
      isMounted = false;
    };
  }, []);

  const totalStars = useMemo(
    () => repos.reduce((sum, repo) => sum + (repo.stargazers_count || 0), 0),
    [repos]
  );

  const highlights = useMemo(
    () => [
      { label: "Experience", value: "7+ Years" },
      {
        label: "Public Repositories",
        value: githubProfile ? `${githubProfile.public_repos}+` : "40+",
      },
      {
        label: "GitHub Followers",
        value: githubProfile ? `${githubProfile.followers}+` : "20+",
      },
      {
        label: "Open Source Stars",
        value: repoStatus === "ready" ? `${totalStars}+` : "Growing",
      },
    ],
    [githubProfile, repoStatus, totalStars]
  );

  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <div className="site-shell">
      <div className="bg-glow bg-glow-a" />
      <div className="bg-glow bg-glow-b" />

      <header className="top-nav">
        <a className="brand" href="#home">
          <span className="brand-dot" />
          {profile.name}
        </a>
        <nav>
          <a href="#work">Work</a>
          <a href="#case-studies">Case Studies</a>
          <a href="#projects">Projects</a>
          <a href="#writing">Writing</a>
          <a href="#hire">Hire</a>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <p className="eyebrow">Available for freelance, consulting, and product roles</p>
          <h1>Premium full-stack engineering for ambitious products.</h1>
          <p className="hero-copy">{profile.tagline}</p>

          <div className="hero-cta">
            <a
              className="btn btn-primary"
              href={`mailto:${profile.email}?subject=Project%20Inquiry%20from%20Portfolio`}
            >
              Start a project
            </a>
            <a className="btn btn-ghost" href={profile.resume} target="_blank" rel="noreferrer">
              Download resume
            </a>
            <a
              className="btn btn-ghost"
              href={`mailto:${profile.email}?subject=Discovery%20Call%20Request`}
            >
              Book discovery call
            </a>
          </div>

          <div className="meta-line">
            <span>{profile.role}</span>
            <span>{profile.location}</span>
            <span>
              <a href={profile.github} target="_blank" rel="noreferrer">
                github.com/radhakishan404
              </a>
            </span>
          </div>
        </section>

        <section className="stats-grid">
          {highlights.map((item) => (
            <article key={item.label} className="stat-card">
              <p>{item.label}</p>
              <h3>{item.value}</h3>
            </article>
          ))}
        </section>

        <section className="section" id="work">
          <div className="section-head">
            <h2>Experience</h2>
            <p>
              End-to-end ownership across architecture, implementation, release engineering, and
              stakeholder delivery.
            </p>
          </div>
          <div className="timeline">
            {experience.map((item) => (
              <article key={`${item.company}-${item.period}`} className="timeline-item">
                <p className="timeline-period">{item.period}</p>
                <h3>{item.role}</h3>
                <h4>{item.company}</h4>
                <ul>
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="case-studies">
          <div className="section-head">
            <h2>Case Studies</h2>
            <p>
              Snapshot of problems solved and execution quality across product, architecture, and
              delivery.
            </p>
          </div>
          <div className="cards-grid">
            {caseStudies.map((study) => (
              <article key={study.title} className="project-card case-card">
                <h3>{study.title}</h3>
                <p>{study.summary}</p>
                <div className="impact-pills">
                  {study.impact.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section">
          <div className="section-head">
            <h2>Core Skills</h2>
            <p>Backend-heavy full-stack execution with production operations mindset.</p>
          </div>
          <div className="chips">
            {skills.map((skill) => (
              <span key={skill} className="chip">
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section className="section" id="projects">
          <div className="section-head">
            <h2>Selected Projects</h2>
            <p>Mix of product builds, open source work, and real-world business systems.</p>
          </div>
          <div className="cards-grid">
            {featuredProjects.map((project) => (
              <article key={project.name} className="project-card">
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <small>{project.stack}</small>
                <div className="card-links">
                  <a href={project.link} target="_blank" rel="noreferrer">
                    Open
                  </a>
                  {project.live ? (
                    <a href={project.live} target="_blank" rel="noreferrer">
                      Live
                    </a>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="github">
          <div className="section-head">
            <h2>Latest Public Work</h2>
            <p>Auto-fetched from GitHub so this section stays fresh.</p>
          </div>

          {repoStatus === "loading" ? <p className="status">Loading GitHub repositories...</p> : null}

          {repoStatus === "error" ? (
            <p className="status">
              Could not load repositories right now. Visit{" "}
              <a href={profile.github} target="_blank" rel="noreferrer">
                your GitHub profile
              </a>
              .
            </p>
          ) : null}

          {repoStatus === "ready" ? (
            <div className="cards-grid repo-grid">
              {repos.map((repo) => (
                <article key={repo.id} className="repo-card">
                  <h3>{repo.name}</h3>
                  <p>{repo.description || "No description added yet."}</p>
                  <small>
                    {repo.language || "Code"} • Updated{" "}
                    {new Intl.DateTimeFormat("en", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    }).format(new Date(repo.updated_at))}
                  </small>
                  <div className="card-links">
                    <a href={repo.html_url} target="_blank" rel="noreferrer">
                      Repository
                    </a>
                    {repo.homepage ? (
                      <a href={repo.homepage} target="_blank" rel="noreferrer">
                        Live
                      </a>
                    ) : null}
                  </div>
                </article>
              ))}
            </div>
          ) : null}
        </section>

        <section className="section" id="writing">
          <div className="section-head">
            <h2>Writing & Reach</h2>
            <p>
              Content builds trust and project reach. These are your latest public DEV posts.
            </p>
          </div>

          {postStatus === "loading" ? <p className="status">Loading latest articles...</p> : null}

          {postStatus === "error" ? (
            <p className="status">
              Could not load articles now. Visit{" "}
              <a href={profile.devto} target="_blank" rel="noreferrer">
                DEV profile
              </a>
              .
            </p>
          ) : null}

          {postStatus === "ready" ? (
            <div className="cards-grid">
              {devPosts.map((post) => (
                <article key={post.id} className="repo-card">
                  <h3>{post.title}</h3>
                  <p>{post.description || "Engineering note from DEV."}</p>
                  <small>
                    {post.readable_publish_date} • {post.public_reactions_count || 0} reactions •{" "}
                    {post.comments_count || 0} comments
                  </small>
                  <div className="card-links">
                    <a href={post.url} target="_blank" rel="noreferrer">
                      Read article
                    </a>
                  </div>
                </article>
              ))}
            </div>
          ) : null}
        </section>

        <section className="section" id="hire">
          <div className="section-head">
            <h2>Freelance Offers</h2>
            <p>Productized services that help leads understand exactly how to work with you.</p>
          </div>
          <div className="cards-grid services-grid">
            {serviceOffers.map((offer) => (
              <article key={offer.title} className="service-card">
                <h3>{offer.title}</h3>
                <p>{offer.desc}</p>
                <div className="card-links">
                  <a href={offer.action}>{offer.cta}</a>
                </div>
              </article>
            ))}
          </div>

          <div className="support-strip">
            <a
              className="btn btn-primary"
              href={`mailto:${profile.email}?subject=Freelance%20Project%20Discussion`}
            >
              Hire Me
            </a>
            <a className="btn btn-ghost" href={profile.whatsapp} target="_blank" rel="noreferrer">
              WhatsApp
            </a>
            <a className="btn btn-ghost" href={profile.linkedin} target="_blank" rel="noreferrer">
              Connect on LinkedIn
            </a>
            <a className="btn btn-ghost" href={profile.sponsor} target="_blank" rel="noreferrer">
              Sponsor on GitHub
            </a>
          </div>

          <div className="reach-note">
            <p>
              Add your Buy Me a Coffee link anytime and I can wire it into this support bar in one
              quick update.
            </p>
          </div>
        </section>

        <section className="section education-section">
          <div className="section-head">
            <h2>Education & Leadership</h2>
            <p>
              Technical growth backed by continuous learning and community leadership.
            </p>
          </div>
          <div className="cards-grid">
            <article className="service-card">
              <h3>Education</h3>
              <ul className="plain-list">
                {education.map((item) => (
                  <li key={item.degree}>
                    <strong>{item.degree}</strong>
                    <span>{item.school}</span>
                    <em>{item.period}</em>
                  </li>
                ))}
              </ul>
            </article>
            <article className="service-card">
              <h3>Community</h3>
              <ul className="plain-list">
                {community.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <p>
          © {year} {profile.name}. Built with React and deployed on GitHub Pages.
        </p>
        <div>
          <a href={profile.website} target="_blank" rel="noreferrer">
            Website
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
