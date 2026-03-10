import React, { Fragment, useEffect, useState } from 'react';
import Header from "../common/Header";
import Loader from "react-animation-loader";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import softdata from "../../softdata.json";
import ReactGA from 'react-ga';
ReactGA.initialize('UA-187892763-1');
ReactGA.pageview(window.location.pathname + window.location.search);

function About(props) {
    const [isLoading, setIsLoading] = useState(true);
    const [openSourceRepos, setOpenSourceRepos] = useState([]);
    const [devPosts, setDevPosts] = useState([]);
    const [isRepoLoading, setIsRepoLoading] = useState(true);
    const [isPostLoading, setIsPostLoading] = useState(true);

    useEffect(() => {
        let checkInterval = setInterval(() => {
            try {
                window.threeJsAnimation();
                clearInterval(checkInterval);
                let checkInterval2 = setInterval(() => {
                    if (document.readyState === "complete") {
                        setIsLoading(false);
                        clearInterval(checkInterval2);
                    }
                }, 100);
            } catch (e) {
            }
        }, 100);
    }, []);

    useEffect(() => {
        let isMounted = true;

        async function loadOpenSourceRepos() {
            try {
                const response = await fetch("https://api.github.com/users/radhakishan404/repos?per_page=100&sort=updated");
                const data = await response.json();
                if (Array.isArray(data)) {
                    const repos = data
                        .filter((repo) => !repo.fork && !repo.archived)
                        .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
                        .slice(0, 6);
                    if (isMounted) {
                        setOpenSourceRepos(repos);
                    }
                }
            } catch (error) {
            } finally {
                if (isMounted) {
                    setIsRepoLoading(false);
                }
            }
        }

        async function loadDevPosts() {
            try {
                const response = await fetch("https://dev.to/api/articles?username=radhakishanjangid404&per_page=4");
                const data = await response.json();
                if (Array.isArray(data) && isMounted) {
                    setDevPosts(data);
                }
            } catch (error) {
            } finally {
                if (isMounted) {
                    setIsPostLoading(false);
                }
            }
        }

        loadOpenSourceRepos();
        loadDevPosts();

        return () => {
            isMounted = false;
        };
    }, []);

    const myAge = () => {
        let birthday = "1998/07/26";
        var today = new Date();
        var birthDate = new Date(birthday);
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }

    return (
        <div className="main-wrapper">
            <Loader isLoading={isLoading} bgColor="161122" icon="/images/500%20x%20500%20logo.png" />
            <Header props={props} />
            <main id="content" className="main page-content" aria-label="Content">
                <div className="container-full header-content">
                    <div className="content__main">
                        <div style={{ position: "absolute" }} id="scene-canvas">
                            <canvas id="scene" width="500px" height="500px"></canvas>
                        </div>
                        {
                            isLoading
                                ?
                                <div className="loading-bg"></div>
                                :
                                null
                        }
                        <section className="section section-about">
                            <div className="container">
                                <div className="card-box bg--dark">
                                    <div className="row align-items-center">
                                        <div className="col-sm-12 col-md-9">
                                            <h1>Who's this guy?</h1>
                                            <p className="section-subtitle">
                                                I am Radhakishan Jangid, {myAge()} years old <strong className="text-gradient">Senior Software Engineer</strong> based in Mumbai, India. I have 7+ years of experience building scalable web and mobile products with React, Node.js, Next.js, React Native, and cloud-native workflows.
                                                <br />
                                                <br />
                                                Currently, I work with <strong className="text-gradient"><a href="https://www.cachetech.com/" target="_blank" rel="noopener noreferrer">Cachetech Advisor Solutions (USA)</a></strong> on fintech systems across workflow automation, multi-tenancy architecture, and product engineering.
                                                <br />
                                                <br />
                                                I actively build and maintain open source projects, and also write engineering notes on DEV.to.
                                            </p>
                                        </div>
                                        <div className="col-sm-12 col-md-3 align--center pt-10">
                                            <picture>
                                                <LazyLoadImage
                                                    src="/images/radhakishan-web-2.jpg"
                                                    alt="Radhakishan Jangid in Kurta Payjama"
                                                    className="about-me-img"
                                                />
                                            </picture>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="container container-narrow mt-40 professional-skill">
                                {
                                    softdata.skills.map(function (skillVal, skillKey) {
                                        return (
                                            <Fragment key={skillKey}>
                                                <h3 className="mt-40">{skillVal.skillName}</h3>
                                                <br />
                                                {
                                                    skillVal.skillType.map(function (skillTypeVal, skillTypeKey) {
                                                        return (
                                                            <Fragment key={skillTypeKey}>
                                                                <h5 className="sub-accent text-gradient">{skillTypeVal.title}</h5>
                                                                <p dangerouslySetInnerHTML={{ __html: skillTypeVal.description }}></p>
                                                                <ul>
                                                                    {
                                                                        skillTypeVal.skillsList.map(function (skillListVal, skillListKey) {
                                                                            return (
                                                                                <Fragment key={skillListKey}>
                                                                                    <li>
                                                                                        <p> <strong>{skillListVal.skillTitle}</strong> - {skillListVal.skillDesc} </p>
                                                                                    </li>
                                                                                </Fragment>
                                                                            )
                                                                        })
                                                                    }
                                                                </ul>
                                                                <br />
                                                            </Fragment>
                                                        )
                                                    })
                                                }
                                            </Fragment>
                                        )
                                    })
                                }
                                <h5 className="sub-accent text-gradient">Most used technologies</h5>
                                <span className="skill-items">
                                    <span className="skill-item">
                                        <span>
                                            <img src="https://radhakishan.site/img/react.svg" data-large="img/react.svg" className="blur-out" alt="React" />
                                        </span>
                                        <span>React</span>
                                    </span>
                                    <span className="skill-item">
                                        <span>
                                            <img src="https://radhakishan.site/img/nodejs.svg" data-large="img/nodejs.svg" className="blur-out" alt="Node JS" />
                                        </span>
                                        <span>Node.js</span>
                                    </span>
                                    <span className="skill-item">
                                        <span>
                                            <img src="https://radhakishan.site/img/typescript.svg" data-large="img/typescript.svg" className="blur-out" alt="TypeScript" />
                                        </span>
                                        <span>TypeScript</span>
                                    </span>
                                    <span className="skill-item">
                                        <span>
                                            <img src="https://radhakishan.site/img/npm.svg" data-large="img/npm.svg" className="blur-out" alt="NPM" />
                                        </span>
                                        <span>NPM</span>
                                    </span>
                                    <span className="skill-item">
                                        <span>
                                            <img src="https://radhakishan.site/img/js.svg" data-large="img/js.svg" alt="JavaScript" className="blur-out" />
                                        </span>
                                        <span>JavaScript</span>
                                    </span>
                                    <span className="skill-item">
                                        <span>
                                            <img src="https://radhakishan.site/img/php.svg" data-large="img/php.svg" alt="PHP" className="blur-out" />
                                        </span>
                                        <span>PHP</span>
                                    </span>
                                    <span className="skill-item">
                                        <span>
                                            <img src="https://radhakishan.site/img/codeigniter.svg" data-large="img/codeigniter.svg" alt="CodeIgniter" className="blur-out" />
                                        </span>
                                        <span>CodeIgniter</span>
                                    </span>
                                    <span className="skill-item">
                                        <span>
                                            <img src="https://radhakishan.site/img/jquery.svg" data-large="img/jquery.svg" alt="jQuery" className="blur-out" />
                                        </span>
                                        <span>jQuery</span>
                                    </span>
                                    <span className="skill-item">
                                        <span>
                                            <img src="https://radhakishan.site/img/html.svg" data-large="img/html.svg" alt="HTML" className="blur-out" />
                                        </span>
                                        <span>HTML</span>
                                    </span>
                                    <span className="skill-item">
                                        <span>
                                            <img src="https://radhakishan.site/img/css.svg" data-large="img/css.svg" alt="CSS3" className="blur-out" />
                                        </span>
                                        <span>CSS3</span>
                                    </span>
                                    <span className="skill-item">
                                        <span>
                                            <img src="https://radhakishan.site/img/bootstrap.svg" data-large="img/bootstrap.svg" alt="Bootstrap" className="blur-out" />
                                        </span>
                                        <span>Bootstrap</span>
                                    </span>
                                    <span className="skill-item">
                                        <span>
                                            <img src="https://radhakishan.site/img/mysql.svg" data-large="img/mysql.svg" alt="MySQL" className="blur-out" />
                                        </span>
                                        <span>MySQL</span>
                                    </span>
                                    <span className="skill-item">
                                        <span>
                                            <img src="https://radhakishan.site/img/sql.png" data-large="img/sql.png" className="blur-out" alt="SQL" />
                                        </span>
                                        <span>SQL</span>
                                    </span>
                                    <span className="skill-item">
                                        <span>
                                            <img src="https://radhakishan.site/img/phpadmin.svg" data-large="img/phpadmin.svg" className="blur-out" alt="PhpMyAdmin" />
                                        </span>
                                        <span>PhpMyAdmin</span>
                                    </span>
                                    <span className="skill-item">
                                        <span>
                                            <img src="https://radhakishan.site/img/adminer.png" data-large="img/adminer.png" className="blur-out" alt="Adminer" />
                                        </span>
                                        <span>Adminer</span>
                                    </span>
                                    <span className="skill-item">
                                        <span>
                                            <img src="https://radhakishan.site/img/git.svg" data-large="img/git.svg" className="blur-out" alt="MySQL" />
                                        </span>
                                        <span>Git</span>
                                    </span>
                                    <span className="skill-item">
                                        <span>
                                            <img src="https://radhakishan.site/img/aws.png" data-large="img/aws.png" className="blur-out" alt="Amazon S3" />
                                        </span>
                                        <span>Amazon S3</span>
                                    </span>
                                    <span className="skill-item">
                                        <span>
                                            <img src="https://radhakishan.site/img/aws.png" data-large="img/aws.png" className="blur-out" alt="Amazon Web Services (AWS)" />
                                        </span>
                                        <span>Amazon Web Services (AWS)</span>
                                    </span>
                                    <span className="skill-item">
                                        <span>
                                            <img src="https://radhakishan.site/img/ionic.svg" data-large="img/ionic.svg" className="blur-out" alt="Ionic" />
                                        </span>
                                        <span>Ionic</span>
                                    </span>
                                    <span className="skill-item">
                                        <span>
                                            <img src="https://radhakishan.site/img/photoshop.svg" data-large="img/photoshop.svg" className="blur-out" alt="Photoshop" />
                                        </span>
                                        <span>Photoshop</span>
                                    </span>
                                </span>
                            </div>

                            <div className="container container-narrow mt-40">
                                <h3 className="mt-40 main-title">Work Experience</h3>

                                <ul className="work-experience">
                                    {
                                        softdata.experience.map(function (value, key) {
                                            return (
                                                <li className={value.isCurrent ? "job-current" : ""} key={key}>
                                                    <h5 className="job-title">{value.title} - <a className="text-gradient" href={value.companyLink} target="_blank" rel="noopener noreferrer">{value.companyName}</a></h5>
                                                    <div className="job-meta">
                                                        <span>{value.location}</span>
                                                        <span>{value.from} - {value.to}</span>
                                                    </div>
                                                    <p className="job-desc">{value.description}</p>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>

                            <div className="container container-narrow mt-40 about-extra">
                                <h3 className="mt-40 main-title">Open Source & Public Work</h3>
                                <p className="about-extra-desc">
                                    Latest public repositories from GitHub.
                                </p>
                                <div className="about-extra-grid">
                                    {
                                        isRepoLoading
                                            ?
                                            <p className="about-extra-loading">Loading public repositories...</p>
                                            :
                                            openSourceRepos.map(function (repo, key) {
                                                return (
                                                    <a key={key} className="about-extra-card bg--dark" href={repo.html_url} target="_blank" rel="noopener noreferrer">
                                                        <h5>{repo.name}</h5>
                                                        <p>{repo.description || "Open source repository"}</p>
                                                        <div className="about-extra-meta">
                                                            <span>{repo.language || "Code"}</span>
                                                            <span>★ {repo.stargazers_count || 0}</span>
                                                        </div>
                                                    </a>
                                                )
                                            })
                                    }
                                </div>
                            </div>

                            <div className="container container-narrow mt-40 about-extra">
                                <h3 className="mt-40 main-title">Latest DEV.to Posts</h3>
                                <p className="about-extra-desc">
                                    Recent technical posts and engineering notes.
                                </p>
                                <div className="about-extra-grid">
                                    {
                                        isPostLoading
                                            ?
                                            <p className="about-extra-loading">Loading DEV.to posts...</p>
                                            :
                                            devPosts.map(function (post, key) {
                                                return (
                                                    <a key={key} className="about-extra-card bg--dark" href={post.url} target="_blank" rel="noopener noreferrer">
                                                        <h5>{post.title}</h5>
                                                        <p>{post.description || "Read full post on DEV.to"}</p>
                                                        <div className="about-extra-meta">
                                                            <span>{post.readable_publish_date}</span>
                                                            <span>❤ {post.public_reactions_count || 0}</span>
                                                        </div>
                                                    </a>
                                                )
                                            })
                                    }
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default About;
