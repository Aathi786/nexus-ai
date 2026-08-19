import { FaCheckCircle } from "react-icons/fa";

function TerminalSuccess() {
  return (
    <div className="transmission-success-box">
      <div className="success-icon-wrap">
        <FaCheckCircle />
      </div>
      <h3 className="success-heading">✓ Transmission Complete</h3>
      <p className="success-sub">
        Your message has been securely delivered to <strong>Aathithya</strong>.
      </p>
    </div>
  );
}

export default TerminalSuccess;