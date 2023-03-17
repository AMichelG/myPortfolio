import React from "react";
import "./experience.css";
import { FaReact } from "react-icons/fa";
import Pokedex1 from "../../assets/Pokedex1.png";
import Pokedex2 from "../../assets/Pokedex2.png";
import Pokedex3 from "../../assets/Pokedex3.png";
import eCommerce from "../../assets/E-Commerce.png";

const Experience = () => {
  return (
    <section id="experience">
      <h5>Take a look at</h5>
      <h2>My projects</h2>

      <div className="container experience__container">
        <article className="experience__item">
          <div className="experience__item-image">
            <img src={eCommerce} />
          </div>
          <h3>Next.js E-Commerce</h3>
          <div className="experience__item-cta">
            <a
              href="https://github.com/AMichelG/Tech-e.commerce"
              className="btn"
              target="_blank"
            >
              Github Repo
            </a>
            <a
              href="https://tech-e-commerce.vercel.app/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="experience__item">
          <div className="experience__item-image">
            <img src={Pokedex1} />
          </div>
          <h3>React-Redux Pokedex</h3>
          <div className="experience__item-cta">
            <a
              href="https://github.com/AMichelG/PI-Pokemon"
              className="btn"
              target="_blank"
            >
              Github Repo
            </a>
            <a
              href="https://react-pokedex-amichelg.vercel.app/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Experience;
