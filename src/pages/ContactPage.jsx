import React, { useRef, useState } from "react";
import MagneticButton from "../components/MagneticButton";
import { contactLinks } from "../data/site";
import useDocumentMeta from "../hooks/useDocumentMeta";

function ContactPage() {
    const formRef = useRef(null);
    const [status, setStatus] = useState("idle");

    useDocumentMeta("Contact | Radhakishan Jangid", "Get in touch for engineering work, collaboration, and consulting.");

    const handleSubmit = async (event) => {
        event.preventDefault();
        setStatus("sending");

        try {
            const emailjs = await import("emailjs-com");
            await emailjs.sendForm(
                "service_sn6cjfe",
                "template_ai5s6x5",
                formRef.current,
                "user_dGsNFmNHFtCMCgJzZ"
            );
            setStatus("success");
            formRef.current.reset();
        } catch {
            setStatus("error");
        }
    };

    return (
        <div className="page-wrap">
            <div className="container">
                <section data-reveal>
                    <h1 style={{ marginBottom: 12 }}>Let's work together</h1>
                    <p style={{ color: "var(--color-text-muted)", fontSize: 18, maxWidth: 540, marginBottom: 48 }}>
                        Have a project, question, or collaboration idea? Reach out and I'll get back to you.
                    </p>
                </section>

                <div className="contact-layout">
                    <div data-reveal>
                        <h3 style={{ marginBottom: 8 }}>Direct links</h3>
                        <p style={{ color: "var(--color-text-muted)", fontSize: 15, marginBottom: 16 }}>
                            You can also reach me through any of these channels.
                        </p>
                        <div className="contact-links-list">
                            {contactLinks.map((link, i) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    target={link.external ? "_blank" : undefined}
                                    rel={link.external ? "noreferrer" : undefined}
                                    data-reveal
                                    data-reveal-delay={`${i + 1}`}
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    </div>

                    <form ref={formRef} className="contact-form" onSubmit={handleSubmit} data-reveal data-reveal-delay="2">
                        <div className="form-row">
                            <input name="name" type="text" placeholder="Name" required />
                            <input name="email" type="email" placeholder="Email" required />
                        </div>
                        <input name="subject" type="text" placeholder="Subject" />
                        <textarea name="message" placeholder="Your message..." rows="5" required />

                        <MagneticButton type="submit" className="btn btn-filled" disabled={status === "sending"}>
                            {status === "sending" ? "Sending..." : "Send Message"}
                        </MagneticButton>

                        {status === "success" && <p className="form-status">Message sent successfully.</p>}
                        {status === "error" && <p className="form-status form-status-error">Something went wrong. Please try again.</p>}
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ContactPage;
