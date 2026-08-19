import { useState } from "react";
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin, FaCopy, FaCheck } from "react-icons/fa";
import "./Contact.css";

function Contact() {
  const [copiedKey, setCopiedKey] = useState(null);

  const copyToClipboard = (text, key, e) => {
    e.stopPropagation();
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const contactCards = [
    {
      id: "email",
      icon: <FaEnvelope />,
      title: "Email",
      value: "aathi4488@gmail.com",
      link: "mailto:aathi4488@gmail.com",
      actionText: "Send Email",
      copyVal: "aathi4488@gmail.com",
    },
    {
      id: "phone",
      icon: <FaPhone />,
      title: "Phone",
      value: "+91 9791384360",
      link: "tel:+919791384360",
      actionText: "Call Developer",
      copyVal: "+919791384360",
    },
    {
      id: "github",
      icon: <FaGithub />,
      title: "GitHub",
      value: "github.com/Aathi786",
      link: "https://github.com/Aathi786",
      actionText: "View GitHub",
      external: true,
    },
    {
      id: "linkedin",
      icon: <FaLinkedin />,
      title: "LinkedIn",
      value: "linkedin.com/in/aathi77",
      link: "https://www.linkedin.com/in/aathi77",
      actionText: "Connect on LinkedIn",
      external: true,
    },
  ];

  return (
    <section className="contact section-container" id="contact">
      <div className="section-header">
        <span className="section-tag">Get in Touch</span>
        <h2 className="section-title">LET'S BUILD <span>SOMETHING.</span></h2>
        <p className="section-subtitle">
          Interested in working together, discussing a project, or exploring an opportunity? Feel free to reach out.
        </p>
      </div>

      <div className="contact-grid">
        {contactCards.map((card) => (
          <a
            key={card.id}
            href={card.link}
            target={card.external ? "_blank" : undefined}
            rel={card.external ? "noopener noreferrer" : undefined}
            className="contact-card glass-panel"
            aria-label={`${card.title}: ${card.value}`}
          >
            <div className="card-icon-bubble">{card.icon}</div>

            <div className="card-body">
              <h3 className="card-title">{card.title}</h3>
              <p className="card-value">{card.value}</p>
            </div>

            <div className="card-action-bar">
              <span className="action-label">{card.actionText} →</span>
              {card.copyVal && (
                <button
                  type="button"
                  className="copy-btn"
                  onClick={(e) => copyToClipboard(card.copyVal, card.id, e)}
                  title={`Copy ${card.title}`}
                  aria-label={`Copy ${card.title}`}
                >
                  {copiedKey === card.id ? <FaCheck className="copied" /> : <FaCopy />}
                </button>
              )}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Contact;