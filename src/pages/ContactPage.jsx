import React, { useState } from "react";
import emailjs from "emailjs-com";
import { contactLinks } from "../data/site";
import useDocumentMeta from "../hooks/useDocumentMeta";

function ContactPage() {
    const [status, setStatus] = useState("idle");

    useDocumentMeta("Contact | Radhakishan Jangid", "Get in touch for engineering work, collaboration, and consulting.");

    const submitForm = async (event) => {
        event.preventDefault();
        setStatus("loading");

        try {
            await emailjs.sendForm("service_sn6cjfe", "template_ai5s6x5", event.target, "user_Di32uXdzGJ3xyE4Kjf5bJ");
            setStatus("success");
            event.target.reset();
        } catch (error) {
            setStatus("error");
        }
    };

    return (
        <div className="page-shell shell">
            <section className="page-hero page-hero-tight">
                <span className="eyebrow">Contact</span>
                <h1>Let’s talk about product engineering, frontend systems, or independent builds.</h1>
                <p className="lede">
                    Email works best, but the form is here if you want to send project details directly from the site.
                </p>
            </section>

            <section className="contact-grid">
                <div className="surface-card">
                    <h2>Direct links</h2>
                    <div className="footer-links contact-links">
                        {contactLinks.map((link) => (
                            <a key={link.href} href={link.href} target={link.external ? "_blank" : undefined} rel={link.external ? "noreferrer" : undefined}>
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>

                <form className="surface-card contact-form" onSubmit={submitForm}>
                    <h2>Send a message</h2>
                    <div className="form-grid">
                        <input name="from_name" type="text" placeholder="Your name" required />
                        <input name="from_email" type="email" placeholder="Your email" required />
                    </div>
                    <textarea name="from_message" rows="7" placeholder="Tell me what you’re building." required />
                    <button type="submit" className="button-primary" disabled={status === "loading"}>
                        {status === "loading" ? "Sending..." : "Send message"}
                    </button>
                    {status === "success" ? <p className="form-status">Message sent. I’ll get back to you soon.</p> : null}
                    {status === "error" ? <p className="form-status form-status-error">Message failed to send. Email is the safer fallback.</p> : null}
                </form>
            </section>
        </div>
    );
}

export default ContactPage;
