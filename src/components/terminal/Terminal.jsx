import emailjs from "@emailjs/browser";
import "./Terminal.css";
import { useState, useEffect } from "react";

function Terminal() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [booting, setBooting] = useState(true);
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [status, setStatus] = useState("");

  // AI Greeting Animation
  const [line1, setLine1] = useState(false);
  const [line2, setLine2] = useState(false);
  const [line3, setLine3] = useState(false);
  const [line4, setLine4] = useState(false);

  // Boot Screen
  useEffect(() => {
    const timer = setTimeout(() => {
      setBooting(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  // AI Greeting
  useEffect(() => {
    if (!booting) {
      const t1 = setTimeout(() => setLine1(true), 300);
      const t2 = setTimeout(() => setLine2(true), 900);
      const t3 = setTimeout(() => setLine3(true), 1600);
      const t4 = setTimeout(() => setLine4(true), 2300);

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

    if (!email || !message) {
      alert("Please enter your email address and message.");
      return;
    }

    setLoading(true);

    setStatus("Establishing secure connection...");

    setTimeout(() => {
      setStatus("Encrypting message...");
    }, 900);

    setTimeout(() => {
      setStatus("Transmitting to developer...");
    }, 1800);

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
        setLoading(false);
        setSent(true);

        setEmail("");
        setMessage("");

        // Reset Terminal after 6 seconds
        setTimeout(() => {
          setSent(false);
          setStatus("");

          setLine1(false);
          setLine2(false);
          setLine3(false);
          setLine4(false);

          setTimeout(() => setLine1(true), 300);
          setTimeout(() => setLine2(true), 900);
          setTimeout(() => setLine3(true), 1600);
          setTimeout(() => setLine4(true), 2300);
        }, 6000);
      })
      .catch((err) => {
        console.error(err);

        setLoading(false);

        alert("Failed to send message. Please try again.");
      });
  };

  return (
    <section className="terminal" id="contact">
      <div className="terminal-window">

        <div className="terminal-header">
          <span className="red"></span>
          <span className="yellow"></span>
          <span className="green"></span>

          <h3>NEXUS AI COMMUNICATION TERMINAL</h3>
        </div>

        <div className="terminal-body">

          {booting ? (

            <div className="boot-screen">

              <p>{">"} Initializing NEXUS AI...</p>

              <div className="progress-bar">
                <div className="progress"></div>
              </div>

              <p>{">"} Loading secure communication protocol...</p>

              <p>{">"} Connecting to developer network...</p>

              <p className="ready">✓ Terminal Ready</p>

            </div>

          ) : !sent ? (

            <form onSubmit={handleSubmit} className="terminal-form">

              {line1 && (
                <p className="terminal-text fade-line">
                  {">"} Welcome to <span>Aathithya's Portfolio</span>.
                </p>
              )}

              {line2 && (
                <p className="terminal-text fade-line">
                  {">"} I'm <span>NEXUS AI</span>, your communication assistant.
                </p>
              )}

              {line3 && (
                <p className="terminal-text fade-line">
                  {">"} Looking to discuss a job opportunity, interview or collaboration?
                </p>
              )}

              {line4 && (
                <>
                  <p className="terminal-sub fade-line">
                    Enter your email address and message below.
                  </p>

                  <p className="terminal-sub fade-line">
                    Your message will be securely delivered to the developer.
                  </p>

                  <input
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />

                  <textarea
                    rows="6"
                    placeholder="Type your message here..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>

                  <button type="submit" disabled={loading}>
                    {loading ? "TRANSMITTING..." : "TRANSMIT MESSAGE"}
                  </button>

                  {loading && (
                    <div className="sending-status">

                      <p>{status}</p>

                      <div className="sending-bar">
                        <div className="sending-progress"></div>
                      </div>

                    </div>
                  )}

                  <p className="privacy">
                    🔒 Your email is used only to reply to your message and will never be shared with third parties.
                  </p>
                </>
              )}

            </form>

          ) : (

            <div className="success-box">

              <h2>✓ Transmission Complete</h2>

              <p>Your message has been securely delivered.</p>

              <p>
                Thank you for contacting <span>Aathithya</span>.
              </p>

              <p>
                You can expect a response within
                <strong> 24 Hours.</strong>
              </p>

              <br />

              <p className="ready">
                Returning terminal to standby mode...
              </p>

            </div>

          )}

        </div>

      </div>
    </section>
  );
}

export default Terminal;