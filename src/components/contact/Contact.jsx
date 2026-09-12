import { useState } from "react";
import emailjs from "@emailjs/browser";
import confetti from "canvas-confetti";
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin, FaFilePdf, FaPaperPlane, FaCopy, FaCheck, FaLock, FaExclamationCircle } from "react-icons/fa";
import "./Contact.css";

function Contact() {
  const [copiedKey, setCopiedKey] = useState(null);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const copyToClipboard = (text, key, e) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setErrorMessage("");

    if (!email || !message) {
      setErrorMessage("Please provide your email address and message.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMessage("Please provide a valid email address.");
      return;
    }

    setLoading(true);

    const templateParams = {
      name: name || "Recruiter / Hiring Team",
      email: email,
      message: message,
    };

    emailjs
      .send(
        "service_ij7x91t",
        "template_vlx4y8n",
        templateParams,
        "xAHJCqiUpymKTDcJs"
      )
      .then(() => {
        setLoading(false);
        setSent(true);
        setEmail("");
        setName("");
        setMessage("");

        try {
          confetti({
            particleCount: 60,
            spread: 70,
            origin: { y: 0.6 },
            colors: ["#D4AF37", "#F5E2B3", "#FFFFFF"],
          });
        } catch {
          // Fallback
        }

        setTimeout(() => setSent(false), 8000);
      })
      .catch((err) => {
        console.error("EmailJS dispatch error:", err);
        setLoading(false);
        setErrorMessage("Direct dispatch encountered an issue. Please email directly at aathi4488@gmail.com.");
      });
  };

  const contactCards = [
    {
      id: "email",
      icon: <FaEnvelope />,
      title: "Direct Email",
      value: "aathi4488@gmail.com",
      link: "mailto:aathi4488@gmail.com",
      actionText: "Send Mail",
      copyVal: "aathi4488@gmail.com",
    },
    {
      id: "phone",
      icon: <FaPhone />,
      title: "Direct Phone",
      value: "+91 9791384360",
      link: "tel:+919791384360",
      actionText: "Call",
      copyVal: "+919791384360",
    },
    {
      id: "github",
      icon: <FaGithub />,
      title: "GitHub Profile",
      value: "github.com/Aathi786",
      link: "https://github.com/Aathi786",
      actionText: "View Code",
      external: true,
    },
    {
      id: "linkedin",
      icon: <FaLinkedin />,
      title: "LinkedIn Profile",
      value: "linkedin.com/in/aathi77",
      link: "https://www.linkedin.com/in/aathi77",
      actionText: "Connect",
      external: true,
    },
  ];

  return (
    <section className="contact-section section-container" id="contact">
      <div className="section-header">
        <span className="section-tag">OPEN FOR OPPORTUNITIES</span>
        <h2 className="section-title">
          LET'S BUILD <span>SOMETHING GREAT.</span>
        </h2>
        <p className="section-subtitle">
          Seeking Java Full Stack Developer & Entry-Level Software Engineer roles. Let's discuss how I can contribute to your engineering team.
        </p>
      </div>

      <div className="contact-main-grid">
        {/* Left Column: Direct Info Cards */}
        <div className="contact-channels-column">
          <div className="contact-pitch-box gold-panel">
            <h3 className="pitch-heading">Ready to deliver high-quality code.</h3>
            <p className="pitch-text">
              Whether you have an entry-level software engineer opening, a technical interview inquiry, or a full-stack project to discuss, I'd love to connect.
            </p>

            <div className="pitch-resume-action">
              <a
                href="/Aathithya.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold-primary full-w-cta"
              >
                <FaFilePdf /> VIEW OFFICIAL RESUME
              </a>
            </div>
          </div>

          {/* Quick Contact Cards */}
          <div className="contact-cards-grid">
            {contactCards.map((card) => (
              <div key={card.id} className="contact-channel-card glass-panel">
                <div className="channel-icon-wrap">{card.icon}</div>
                <div className="channel-body">
                  <span className="channel-label">{card.title}</span>
                  <a
                    href={card.link}
                    target={card.external ? "_blank" : undefined}
                    rel={card.external ? "noopener noreferrer" : undefined}
                    className="channel-link-text"
                  >
                    {card.value}
                  </a>
                </div>

                {card.copyVal && (
                  <button
                    type="button"
                    className="channel-copy-btn"
                    onClick={(e) => copyToClipboard(card.copyVal, card.id, e)}
                    title={`Copy ${card.title}`}
                    aria-label={`Copy ${card.title}`}
                  >
                    {copiedKey === card.id ? <FaCheck className="copied" /> : <FaCopy />}
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Direct Message Dispatch Form */}
        <div className="contact-form-column gold-panel">
          <div className="form-header-bar">
            <div className="form-live-status">
              <span className="live-dot-gold"></span>
              <span>DIRECT INBOX DISPATCH</span>
            </div>
            <span className="form-sla-badge">Within 24 Hours</span>
          </div>

          {!sent ? (
            <form onSubmit={handleFormSubmit} className="direct-contact-form">
              <div className="form-group">
                <label htmlFor="contact-name">YOUR NAME / COMPANY</label>
                <input
                  id="contact-name"
                  type="text"
                  placeholder="e.g. Hiring Manager at TechCorp"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  disabled={loading}
                  autoComplete="name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-email">YOUR EMAIL ADDRESS *</label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={loading}
                  autoComplete="email"
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-message">YOUR MESSAGE *</label>
                <textarea
                  id="contact-message"
                  required
                  rows={5}
                  placeholder="Hi Aathithya, we are interested in discussing an opportunity for a Java Full Stack Developer role..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  disabled={loading}
                ></textarea>
              </div>

              {errorMessage && (
                <div className="form-error-alert">
                  <FaExclamationCircle />
                  <span>{errorMessage}</span>
                </div>
              )}

              <button
                type="submit"
                className="btn-gold-primary form-submit-btn"
                disabled={loading}
              >
                {loading ? (
                  <span>DISPATCHING MESSAGE...</span>
                ) : (
                  <>
                    <FaPaperPlane />
                    <span>SEND DIRECT MESSAGE</span>
                  </>
                )}
              </button>

              <div className="form-privacy-tag">
                <FaLock className="lock-icon" />
                <span>Encrypted delivery directly to aathi4488@gmail.com</span>
              </div>
            </form>
          ) : (
            <div className="form-success-state">
              <div className="success-gold-icon">
                <FaCheck />
              </div>
              <h3 className="success-title">Message Delivered Successfully</h3>
              <p className="success-body">
                Thank you! Your message has been sent directly to <strong>Aathithya R</strong>. I will get back to you promptly.
              </p>
              <span className="success-badge">CONFIRMED DISPATCH</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Contact;