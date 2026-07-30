import React, { useState } from "react";
import emailjs from "emailjs-com";
import PageFrame from "../common/PageFrame";

function Contact() {
    const [status, setStatus] = useState("idle");

    const submitForm = async (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        setStatus("sending");

        try {
            await emailjs.sendForm(
                "service_sn6cjfe",
                "template_ai5s6x5",
                form,
                "user_Di32uXdzGJ3xyE4Kjf5bJ"
            );
            form.reset();
            setStatus("sent");
        } catch (error) {
            setStatus("error");
        }
    };

    return (
        <PageFrame className="contact-page" title="Contact">
            <section className="contact-layout page-shell">
                <div className="contact-intro">
                    <p className="page-eyebrow">Contact</p>
                    <h1>Tell me what needs to work better.</h1>
                    <p>
                        Share the context, the people affected, and what a useful result would look like.
                    </p>
                    <div className="contact-links">
                        <a href="mailto:radhakishanjangid404@gmail.com">
                            <span>Email</span>
                            radhakishanjangid404@gmail.com
                        </a>
                        <a href="https://www.linkedin.com/in/radhakishanjangid" target="_blank" rel="noreferrer">
                            <span>LinkedIn</span>
                            radhakishanjangid
                        </a>
                        <a href="https://github.com/radhakishan404" target="_blank" rel="noreferrer">
                            <span>GitHub</span>
                            radhakishan404
                        </a>
                    </div>
                </div>

                <form className="page-contact-form" onSubmit={submitForm}>
                    <label>
                        <span>Name</span>
                        <input name="from_name" type="text" autoComplete="name" required />
                    </label>
                    <label>
                        <span>Email</span>
                        <input name="from_email" type="email" autoComplete="email" required />
                    </label>
                    <label>
                        <span>What are you building?</span>
                        <textarea name="from_message" rows="6" required />
                    </label>
                    <button type="submit" disabled={status === "sending"}>
                        {status === "sending" ? "Sending..." : "Send message"}
                    </button>
                    <p role="status">
                        {status === "sent" && "Message sent. Thank you. I will reply soon."}
                        {status === "error" && "The message did not send. Please use the email link."}
                    </p>
                </form>
            </section>
        </PageFrame>
    );
}

export default Contact;
