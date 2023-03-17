import React from "react";
import "./skills.css";

const Skills = () => {
  return (
    <section id="skills">
      {/* <h5>I ha</h5> */}
      <h2>My Skills</h2>

      <div className="container skills__container">
        <div className="skills_frontend">
          <div className="skills__content">
            <article className="skills__details">
              <div className="skills__container">
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg"
                    className="skills__icons"
                    alt="JavaScript"
                  />
                  <h4>JavaScript</h4>
                </a>
                <a
                  href="https://www.typescriptlang.org/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/typescript-colored.svg"
                    className="skills__icons"
                    alt="TypeScript"
                  />
                  <h4>TypeScript</h4>
                </a>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg"
                    className="skills__icons"
                    alt="HTML5"
                  />
                  <h4>HTML5</h4>
                </a>
                <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
                  <img
                    src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg"
                    className="skills__icons"
                    alt="React"
                  />
                  <h4>React</h4>
                </a>
                <a
                  href="https://nextjs.org/docs"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nextjs-colored.svg"
                    className="skills__icons"
                    alt="NextJs"
                  />
                  <h4>NextJs</h4>
                </a>
                <a
                  href="https://www.w3.org/TR/CSS/#css"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/css3-colored.svg"
                    className="skills__icons"
                    alt="CSS3"
                  />
                  <h4>CSS3</h4>
                </a>
                <a
                  href="https://getbootstrap.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/bootstrap-colored.svg"
                    className="skills__icons"
                    alt="Bootstrap"
                  />
                  <h4>Bootstrap</h4>
                </a>
                <a
                  href="https://redux.js.org/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/redux-colored.svg"
                    className="skills__icons"
                    alt="Redux"
                  />
                  <h4>Redux</h4>
                </a>
                <a
                  href="https://nodejs.org/en/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nodejs-colored.svg"
                    className="skills__icons"
                    alt="NodeJS"
                  />
                  <h4>NodeJS</h4>
                </a>
                <a
                  href="https://expressjs.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/express-colored.svg"
                    className="skills__icons"
                    alt="Express"
                  />
                  <h4>Express</h4>
                </a>
                <a
                  href="https://www.postgresql.org/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/postgresql-colored.svg"
                    className="skills__icons"
                    alt="PostgreSQL"
                  />
                  <h4>PostgreSQL</h4>
                </a>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
