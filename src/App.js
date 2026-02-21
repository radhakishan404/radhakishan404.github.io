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
  resume: "/Radhakishan-Updated-Resume.pdf",
};

const highlights = [
  { label: "Experience", value: "7+ Years" },
  { label: "Public Repositories", value: "40+" },
  { label: "Core Focus", value: "Node.js, React, React Native" },
  { label: "Current Role", value: "US Fintech Product Engineering" },
];

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

const services = [
  {
    title: "Product Engineering",
    desc: "Architecture, development, and scale-up for web products and internal tools.",
  },
  {
    title: "Mobile App Delivery",
    desc: "React Native apps with strong API and workflow integration.",
  },
  {
    title: "CI/CD + DevOps",
    desc: "Self-hosted and cloud deployment pipelines, Dockerized delivery, and release reliability.",
  },
  {
    title: "Legacy Modernization",
    desc: "Move PHP/monolith products to MERN and microservice-friendly systems.",
  },
];

function App() {
  const [repos, setRepos] = useState([]);
  const [repoStatus, setRepoStatus] = useState("loading");

  useEffect(() => {
    let isMounted = true;

    async function loadRepos() {
      try {
        const response = await fetch(
          "https://api.github.com/users/radhakishan404/repos?per_page=100&sort=updated"
        );
        const data = await response.json();

        if (!Array.isArray(data)) {
          throw new Error("Unexpected GitHub response");
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

    loadRepos();
    return () => {
      isMounted = false;
    };
  }, []);

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
          <a href="#projects">Projects</a>
          <a href="#github">GitHub</a>
          <a href="#hire">Hire</a>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <p className="eyebrow">Available for freelance, consulting, and product roles</p>
          <h1>
            Premium full-stack engineering for ambitious products.
          </h1>
          <p className="hero-copy">{profile.tagline}</p>

          <div className="hero-cta">
            <a className="btn btn-primary" href="mailto:radhakishanjangid404@gmail.com?subject=Project%20Inquiry%20from%20Portfolio">
              Start a project
            </a>
            <a className="btn btn-ghost" href={profile.resume} target="_blank" rel="noreferrer">
              Download resume
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
              End-to-end ownership across architecture, implementation, release engineering, and stakeholder delivery.
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
                    {new Intl.DateTimeFormat("en", { month: "short", day: "numeric", year: "numeric" }).format(
                      new Date(repo.updated_at)
                    )}
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

        <section className="section" id="hire">
          <div className="section-head">
            <h2>Work With Me</h2>
            <p>Available for freelance product builds, retained engineering support, and consulting.</p>
          </div>
          <div className="cards-grid services-grid">
            {services.map((service) => (
              <article key={service.title} className="service-card">
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
              </article>
            ))}
          </div>

          <div className="support-strip">
            <a className="btn btn-primary" href={`mailto:${profile.email}?subject=Freelance%20Project%20Discussion`}>
              Hire Me
            </a>
            <a className="btn btn-ghost" href={profile.linkedin} target="_blank" rel="noreferrer">
              Connect on LinkedIn
            </a>
            <a className="btn btn-ghost" href="https://github.com/sponsors/radhakishan404" target="_blank" rel="noreferrer">
              Sponsor on GitHub
            </a>
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
