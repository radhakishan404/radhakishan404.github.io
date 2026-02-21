import React, { Fragment, useEffect, useState } from 'react';
import Header from "../common/Header";
import Loader from "react-animation-loader";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import softdata from "../../softdata.json";
import ReactGA from 'react-ga';
import { calcDate } from '../../Helper';
ReactGA.initialize('UA-187892763-1');
ReactGA.pageview(window.location.pathname + window.location.search);

function About(props) {
    const [isLoading, setIsLoading] = useState(true);

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
                                                Hello Friends! I am Radhakishan Jangid. {myAge()} years old <strong className="text-gradient">Javascript and Backend developer</strong> based in Mumbai, India. My passion is web development. Over the past {calcDate()} year, I have gained a lot of experience with designing and developing numerious websites in <strong className="text-gradient">React.js, Next.js, Node Js, Core PHP, Laravel, CodeIgniter</strong>.
                                                <br />
                                                <br />
                                                I've worked with a variety of databases, including <strong className="text-gradient">MongoDB, MySQL, and PostgreSQL</strong>.
                                                I also have extensive experience in team leadership and project management.I have successfully deployed many web applications from scratch on AWS as well as on VPS servers.
                                                <br />
                                                <br />
                                                When not writing code, I really enjoy learning new stuff, playing games, doing workout in gym and specially chilling with friends. :).
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
                                            <img src="https://radhakishan404.github.io/images/react.svg" data-large="img/react.svg" className="blur-out" alt="React" />
                                        </span>
                                        <span>React Js</span>
                                    </span>
                                    <span className="skill-item">
                                        <span>
                                            <img src="https://radhakishan404.github.io/images/nodejs.svg" data-large="img/nodejs.svg" className="blur-out" alt="Node JS" />
                                        </span>
                                        <span>Node.js</span>
                                    </span>
                                    <span className="skill-item">
                                        <span>
                                            <img src="https://radhakishan404.github.io/images/typescript.svg" data-large="img/typescript.svg" className="blur-out" alt="TypeScript" />
                                        </span>
                                        <span>TypeScript</span>
                                    </span>
                                    <span className="skill-item">
                                        <span>
                                            <img src="https://radhakishan404.github.io/images/npm.svg" data-large="img/npm.svg" className="blur-out" alt="NPM" />
                                        </span>
                                        <span>NPM</span>
                                    </span>
                                    <span className="skill-item">
                                        <span>
                                            <img src="https://radhakishan404.github.io/images/js.svg" data-large="img/js.svg" alt="JavaScript" className="blur-out" />
                                        </span>
                                        <span>JavaScript</span>
                                    </span>
                                    <span className="skill-item">
                                        <span>
                                            <img src="https://radhakishan404.github.io/images/php.svg" data-large="img/php.svg" alt="PHP" className="blur-out" />
                                        </span>
                                        <span>PHP</span>
                                    </span>
                                    <span className="skill-item">
                                        <span>
                                            <img src="https://radhakishan404.github.io/images/codeigniter.svg" data-large="img/codeigniter.svg" alt="CodeIgniter" className="blur-out" />
                                        </span>
                                        <span>CodeIgniter</span>
                                    </span>
                                    <span className="skill-item">
                                        <span>
                                            <img src="https://radhakishan404.github.io/images/jquery.svg" data-large="img/jquery.svg" alt="jQuery" className="blur-out" />
                                        </span>
                                        <span>jQuery</span>
                                    </span>
                                    <span className="skill-item">
                                        <span>
                                            <img src="https://radhakishan404.github.io/images/html.svg" data-large="img/html.svg" alt="HTML" className="blur-out" />
                                        </span>
                                        <span>HTML</span>
                                    </span>
                                    <span className="skill-item">
                                        <span>
                                            <img src="https://radhakishan404.github.io/images/css.svg" data-large="img/css.svg" alt="CSS3" className="blur-out" />
                                        </span>
                                        <span>CSS3</span>
                                    </span>
                                    <span className="skill-item">
                                        <span>
                                            <img src="https://radhakishan404.github.io/images/bootstrap.svg" data-large="img/bootstrap.svg" alt="Bootstrap" className="blur-out" />
                                        </span>
                                        <span>Bootstrap</span>
                                    </span>
                                    <span className="skill-item">
                                        <span>
                                            <img src="https://radhakishan404.github.io/images/mysql.svg" data-large="img/mysql.svg" alt="MySQL" className="blur-out" />
                                        </span>
                                        <span>MySQL</span>
                                    </span>
                                    <span className="skill-item">
                                        <span>
                                            <img src="https://radhakishan404.github.io/images/sql.svg" data-large="img/sql.svg" className="blur-out" alt="SQL" />
                                        </span>
                                        <span>SQL</span>
                                    </span>
                                    <span className="skill-item">
                                        <span>
                                            <img src="https://radhakishan404.github.io/images/adminer.png" data-large="img/adminer.png" className="blur-out" alt="Adminer" />
                                        </span>
                                        <span>Adminer</span>
                                    </span>
                                    <span className="skill-item">
                                        <span>
                                            <img src="https://radhakishan404.github.io/images/git.svg" data-large="img/git.svg" className="blur-out" alt="MySQL" />
                                        </span>
                                        <span>Git</span>
                                    </span>
                                    <span className="skill-item">
                                        <span>
                                            <img src="https://radhakishan404.github.io/images/aws.svg" data-large="img/aws.svg" className="blur-out" alt="Amazon S3" />
                                        </span>
                                        <span>Amazon S3</span>
                                    </span>
                                    <span className="skill-item">
                                        <span>
                                            <img src="https://radhakishan404.github.io/images/aws.svg" data-large="img/aws.svg" className="blur-out" alt="Amazon Web Services (AWS)" />
                                        </span>
                                        <span>Amazon Web Services (AWS)</span>
                                    </span>
                                    <span className="skill-item">
                                        <span>
                                            <img src="https://radhakishan404.github.io/images/photoshop.svg" data-large="img/photoshop.svg" className="blur-out" alt="Photoshop" />
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
                        </section>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default About;