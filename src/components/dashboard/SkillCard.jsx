function SkillCard() {

  return (

    <div className="glass-card">

      <h3>Skill Analytics</h3>

      <div className="skill">

        <span>Java</span>

        <progress value="95" max="100"></progress>

      </div>

      <div className="skill">

        <span>Spring Boot</span>

        <progress value="90" max="100"></progress>

      </div>

      <div className="skill">

        <span>React</span>

        <progress value="80" max="100"></progress>

      </div>

      <div className="skill">

        <span>Oracle Database</span>

        <progress value="90" max="100"></progress>

      </div>

      <div className="skill">

        <span>Git & GitHub</span>

        <progress value="85" max="100"></progress>

      </div>

    </div>

  );

}

export default SkillCard;