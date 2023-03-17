import React from "react";
import "./about.css";
import webdev from "../../assets/webdev.png";
import portrait from "../../assets/portrait2.png";
import { FiAward } from "react-icons/fi";

const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={webdev} alt="me" />
          </div>
        </div>

        <div className="about__content">
          {/* <div className="about__cards">
            <article className="about__card">
              <FiAward className="about__icon" />
              <h5>Experience</h5>
              <small>1+ Year Coding</small>
            </article>
            <article className="about__card">
              <FiAward className="about__icon" />
              <h5>Projects</h5>
              <small>1+ Year Coding</small>
            </article>
            <article className="about__card">
              <FiAward className="about__icon" />
              <h5>Experience</h5>
              <small>1+ Year Coding</small>
            </article>
          </div> */}
          <p>
            Hi, I'm Antonio, a former Energy Engineer who switched careers into
            Web Development.
            <br />
            <br />
            I started learning to code by looking up tutorials and courses
            online, and eventually got into the Soy Henry Full Stack Web
            Development Bootcamp where I learned technologies such as
            JavaScript, React, Node.js and others.
            <br />
            <br />
            Currently I'm starting to learn Android Development while also
            practising my previously learned skills.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
