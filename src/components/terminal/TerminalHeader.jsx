import { FaTerminal } from "react-icons/fa";

function TerminalHeader() {
  return (
    <div className="terminal-header-bar">
      <div className="terminal-dots">
        <span className="dot red"></span>
        <span className="dot yellow"></span>
        <span className="dot green"></span>
      </div>

      <div className="terminal-title-text">
        <FaTerminal className="term-icon" />
        <span>NEXUS-AI // COMM-TERMINAL</span>
      </div>
    </div>
  );
}

export default TerminalHeader;