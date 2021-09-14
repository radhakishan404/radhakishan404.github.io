import React, { useEffect, useState } from "react";
import Header from "../common/Header";
import Loader from "react-animation-loader";
import emailjs from 'emailjs-com';
import $ from "jquery";
import ReactGA from 'react-ga';
ReactGA.initialize('UA-187892763-1');
ReactGA.pageview(window.location.pathname + window.location.search);

function Contact(props) {
    const [isLoading, setIsLoading] = useState(true);
    const [success, setSuccess] = useState(false);

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

    const submitForm = (e) => {
        e.preventDefault();

        $(e.target).find(".gradient-btn").attr('disabled', true);
        $(e.target).find(".gradient-btn").html('Sending <span class="lds-dual-ring"></span>');

        emailjs.sendForm('service_sn6cjfe', 'template_ai5s6x5', e.target, 'user_Di32uXdzGJ3xyE4Kjf5bJ')
            .then((result) => {
                setSuccess(true);
            }, (error) => {
                $(e.target).find(".gradient-btn").attr('disabled', false);
                $(e.target).find(".gradient-btn").html('Send Message');
            });
    }

    return (
        <div className="main-wrapper">
            <Loader isLoading={isLoading} bgColor="161122" icon="https://radhakishan.site//images/500%20x%20500%20logo.png" />
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
                                        {
                                            success
                                                ?
                                                <form className="contact-form">
                                                    <em>Thank you for reaching out. I will get back to you as soon as possible.</em>
                                                </form>
                                                :
                                                <form className="contact-form" onSubmit={(e) => submitForm(e)}>
                                                    <div className="contact-form-inner">
                                                        <div className="row">
                                                            <div className="col-md-6">
                                                                <input className="form-control" name="from_name" type="text" placeholder="Enter your full name..." required />
                                                            </div>
                                                            <div className="col-md-6">
                                                                <input className="form-control" name="from_email" type="email" placeholder="Enter your email..." required />
                                                            </div>
                                                        </div>
                                                        <textarea className="form-control" name="from_message" placeholder="Enter your message..." rows="5" aria-required="true" aria-invalid="false" required="" spellCheck="false"></textarea>

                                                        <button className="gradient-btn contact-btn"> Send Message </button>
                                                    </div>
                                                </form>
                                        }
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