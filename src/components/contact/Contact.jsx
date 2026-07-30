import "./Contact.css";
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin } from "react-icons/fa";

function Contact() {
  return (
    <section className="contact" id="contact">

      <h2>CONTACT COMMAND CENTER</h2>

      <div className="contact-grid">

        {/* Email */}

        <a
          href="mailto:aathi4488@gmail.com"
          className="contact-card clickable-card"
        >

          <FaEnvelope className="icon" />

          <h3>Email</h3>

          <p>aathi4488@gmail.com</p>

        </a>

        {/* Phone */}

        <a
          href="tel:+919791384360"
          className="contact-card clickable-card"
        >

          <FaPhone className="icon" />

          <h3>Phone</h3>

          <p>+91 9791384360</p>

        </a>

        {/* GitHub */}

        <a
          href="https://github.com/Aathi786"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-card clickable-card"
        >

          <FaGithub className="icon" />

          <h3>GitHub</h3>

          <p>github.com/Aathi786</p>

        </a>

        {/* LinkedIn */}

        <a
          href="https://www.linkedin.com/in/aathi77"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-card clickable-card"
        >

          <FaLinkedin className="icon" />

          <h3>LinkedIn</h3>

          <p>linkedin.com/in/aathi77</p>

        </a>

      </div>

    </section>
  );
}

export default Contact;