import { useState } from "react";

function TerminalForm({ onSuccess }) {

  const [email, setEmail] = useState("");

  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {

    e.preventDefault();

    if (!email || !message) {

      alert("Please enter your email and message.");

      return;

    }

    // EmailJS will be added later

    onSuccess();

  };

  return (

    <form
      className="terminal-form"
      onSubmit={handleSubmit}
    >

      <p className="terminal-text">

        {">"} Ready to establish a connection?

      </p>

      <p className="terminal-sub">

        Enter your email address and message below.

      </p>

      <input
        type="email"
        placeholder="Email Address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <textarea
        rows="6"
        placeholder="Write your message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <button type="submit">

        TRANSMIT MESSAGE

      </button>

    </form>

  );

}

export default TerminalForm;