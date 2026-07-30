import "./Terminal.css";

function Terminal() {

    return (

        <section className="terminal">

            <div className="terminal-window">

                <div className="terminal-header">

                    <span className="red"></span>
                    <span className="yellow"></span>
                    <span className="green"></span>

                    <h3>NEXUS AI TERMINAL</h3>

                </div>

                <div className="terminal-body">

                    <p><span>&gt;</span> whoami</p>

                    <p>Aathithya</p>

                    <br/>

                    <p><span>&gt;</span> role</p>

                    <p>Java Full Stack Developer</p>

                    <br/>

                    <p><span>&gt;</span> projects</p>

                    <p>Employee Management System</p>
                    <p>Quiz Management System</p>
                    <p>Course Registration System</p>

                    <br/>

                    <p><span>&gt;</span> status</p>

                    <p className="online">ONLINE</p>

                    <br/>

                    <p className="cursor">&gt; █</p>

                </div>

            </div>

        </section>

    );

}

export default Terminal;