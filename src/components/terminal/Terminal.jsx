import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import confetti from "canvas-confetti";
import { FaTerminal, FaPaperPlane, FaLock, FaCheckCircle, FaExclamationCircle } from "react-icons/fa";
import "./Terminal.css";

function Terminal() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [booting, setBooting] = useState(true);
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [statusText, setStatusText] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const [line1, setLine1] = useState(false);
  const [line2, setLine2] = useState(false);
  const [line3, setLine3] = useState(false);
  const [line4, setLine4] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setBooting(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!booting) {
      const t1 = setTimeout(() => setLine1(true), 150);
      const t2 = setTimeout(() => setLine2(true), 350);
      const t3 = setTimeout(() => setLine3(true), 600);
      const t4 = setTimeout(() => setLine4(true), 850);

      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
        clearTimeout(t3);
        clearTimeout(t4);
      };
    }
  }, [booting]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage("");

    if (!email || !message) {
      setErrorMessage("Please provide both your email address and message.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    setLoading(true);
    setStatusText("Connecting to messaging service...");

    const s1 = setTimeout(() => {
      setStatusText("Sending message to Aathithya...");
    }, 600);

    const templateParams = {
      name: "Portfolio Recruiter",
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
        clearTimeout(s1);
        setLoading(false);
        setSent(true);
        setEmail("");
        setMessage("");

        try {
          confetti({
            particleCount: 50,
            spread: 70,
            origin: { y: 0.6 },
            colors: ["#00E5FF", "#7C3AED", "#10B981"],
          });
        } catch {
          // Fallback
        }

        setTimeout(() => {
          setSent(false);
          setStatusText("");
          setLine1(false);
          setLine2(false);
          setLine3(false);
          setLine4(false);

          setTimeout(() => setLine1(true), 150);
          setTimeout(() => setLine2(true), 350);
          setTimeout(() => setLine3(true), 600);
          setTimeout(() => setLine4(true), 850);
        }, 7000);
      })
      .catch((err) => {
        clearTimeout(s1);
        console.error("EmailJS transmission error:", err);
        setLoading(false);
        setErrorMessage("Message could not be sent. Please email directly at aathi4488@gmail.com.");
      });
  };

  return (
    <section className="terminal section-container" id="terminal">
      <div className="section-header">
        <span className="section-tag">Quick Dispatch</span>
        <h2 className="section-title">SEND A <span>DIRECT MESSAGE</span></h2>
        <p className="section-subtitle">
          Have an open role, project inquiry, or interview invite? Send a message directly to my inbox.
        </p>
      </div>

      <div className="terminal-window glass-panel">
        {/* Terminal Header Bar */}
        <div className="terminal-header-bar">
          <div className="terminal-dots">
            <span className="dot red"></span>
            <span className="dot yellow"></span>
            <span className="dot green"></span>
          </div>

          <div className="terminal-title-text">
            <FaTerminal className="term-icon" />
            <span>DIRECT INBOX DISPATCH</span>
          </div>

          <div className="terminal-status-ping">
            <span className="ping-dot"></span> DIRECT CHANNEL
          </div>
        </div>

        {/* Terminal Body */}
        <div className="terminal-body-inner">
          {booting ? (
            <div className="boot-container">
              <p className="boot-line">{">"} Connecting to developer message service...</p>
              <div className="boot-progress-track">
                <div className="boot-progress-fill"></div>
              </div>
              <p className="boot-ready">✓ Channel Ready</p>
            </div>
          ) : !sent ? (
            <form onSubmit={handleSubmit} className="terminal-form-box">
              {line1 && (
                <p className="terminal-prompt fade-in-line">
                  <span className="prompt-sym">&gt;</span> Direct communication with <strong className="highlight-cyan">Aathithya R</strong>.
                </p>
              )}

              {line2 && (
                <p className="terminal-prompt fade-in-line">
                  <span className="prompt-sym">&gt;</span> Full-Stack Java Developer • Ready for software engineering opportunities.
                </p>
              )}

              {line3 && (
                <p className="terminal-prompt fade-in-line">
                  <span className="prompt-sym">&gt;</span> Fill out the form below to send an instant message:
                </p>
              )}

              {line4 && (
                <div className="terminal-interactive-fields fade-in-line">
                  <div className="input-field-group">
                    <label htmlFor="terminal-email">YOUR EMAIL ADDRESS:</label>
                    <input
                      id="terminal-email"
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      disabled={loading}
                      autoComplete="email"
                    />
                  </div>

                  <div className="input-field-group">
                    <label htmlFor="terminal-message">YOUR MESSAGE:</label>
                    <textarea
                      id="terminal-message"
                      required
                      rows={5}
                      placeholder="Hi Aathithya, we would like to discuss an opportunity regarding..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      disabled={loading}
                    ></textarea>
                  </div>

                  {errorMessage && (
                    <div className="terminal-error-banner">
                      <FaExclamationCircle />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    className="terminal-submit-btn"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <span className="loading-spinner"></span>
                        <span>SENDING MESSAGE...</span>
                      </>
                    ) : (
                      <>
                        <FaPaperPlane />
                        <span>SEND MESSAGE TO AATHITHYA</span>
                      </>
                    )}
                  </button>

                  {loading && (
                    <div className="transmission-progress-box">
                      <p className="trans-status">{statusText}</p>
                      <div className="trans-bar-track">
                        <div className="trans-bar-fill"></div>
                      </div>
                    </div>
                  )}

                  <div className="terminal-privacy-note">
                    <FaLock />
                    <span>Your email is used solely to reply to your inquiry.</span>
                  </div>
                </div>
              )}
            </form>
          ) : (
            <div className="transmission-success-box">
              <div className="success-icon-wrap">
                <FaCheckCircle />
              </div>
              <h3 className="success-heading">✓ Message Sent Successfully</h3>
              <p className="success-sub">
                Thank you! Your message has been delivered to <strong>Aathithya</strong>.
              </p>
              <div className="success-eta-badge">
                <span>ESTIMATED RESPONSE:</span>
                <strong>Within 24 Hours</strong>
              </div>
              <p className="success-reset-tip">Resetting form in a few seconds...</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Terminal;