import React, { useEffect, useState } from "react";
import Header from "../common/Header";
import Loader from "react-animation-loader";

function Contact(props) {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        let checkInterval = setInterval(() => {
            try {
                window.threeJsAnimation();
                clearInterval(checkInterval);
                setTimeout(() => {
                    setIsLoading(false);
                }, 1000);
            } catch (e) {
            }
        }, 100);
    }, []);

    return (
        <div className="main-wrapper">
            <Loader isLoading={isLoading} bgColor="161122" icon="https://raw.githubusercontent.com/radhakishan404/radhakishan-jangid-portfolio/master/src/images/500%20x%20500%20logo.png" />
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

                        <section className="section section-contact">
                            <div className="container">
                                <h1>Get in touch</h1>

                                <div className="row">
                                    <div className="col-md-6">
                                        <p>Do you have an interesting project I can help with? Feel free to reach out to me by using one of the following:</p>

                                        <ul>
                                            <li> Email <strong className="text-gradient"><a href="mailto:radhakishanjangid404@gmail.com">radhakishanjangid404@gmail.com</a></strong> </li>
                                            <li> Linkedin <strong className="text-gradient"><a href="https://www.linkedin.com/in/radhakishanjangid">radhakishanjangid</a></strong> </li>
                                            <li> GitHub <strong className="text-gradient"><a href="https://github.com/radhakishan404">radhakishan404</a></strong> </li>
                                        </ul>

                                        <p>You can also use the contact form on this page.</p>
                                    </div>
                                    <div className="col-md-6">
                                        <form className="contact-form">
                                            <div className="contact-form-inner">
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <input className="form-control" name="contact_name" type="text" placeholder="Enter your full name..." required />
                                                    </div>
                                                    <div className="col-md-6">
                                                        <input className="form-control" name="contact_email" type="email" placeholder="Enter your email..." required />
                                                    </div>
                                                </div>
                                                <textarea className="form-control" name="contact_message" placeholder="Enter your message..." rows="5" aria-required="true" aria-invalid="false" required="" spellCheck="false"></textarea>

                                                <button className="gradient-btn contact-btn"> Send Message </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Contact;