import "./SectionTitle.css";

function SectionTitle({ tag, title, highlight, subtitle }) {
  return (
    <div className="section-header">
      {tag && <span className="section-tag">{tag}</span>}
      <h2 className="section-title">
        {title} {highlight && <span>{highlight}</span>}
      </h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  );
}

export default SectionTitle;
