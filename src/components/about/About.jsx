import React from "react";
import "./about.css";
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
            <img src={portrait} alt="me" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
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
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            quia quaerat voluptatum doloribus doloremque quos nemo eaque nulla
            suscipit nam rem facere, ipsa in deleniti architecto autem sapiente
            aliquid ab.
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
