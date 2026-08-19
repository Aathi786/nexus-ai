import "./Card.css";

function Card({ children, className = "", ...props }) {
  return (
    <div className={`cyber-card glass-panel ${className}`} {...props}>
      {children}
    </div>
  );
}

export default Card;
