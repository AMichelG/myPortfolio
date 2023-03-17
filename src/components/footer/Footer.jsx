import React from "react";
import "./footer.css";
import { SlSocialLinkedin } from "react-icons/sl";
import { SlSocialGithub } from "react-icons/sl";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="fotter__logo">
        Antonio Michel
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a
          href="https://linkedin.com/in/antonio-michel-952296bb/"
          target="_blank"
          rel="noreferrer"
        >
          <SlSocialLinkedin />
        </a>
        <a href="https://github.com/AMichelG" target="_blank" rel="noreferrer">
          <SlSocialGithub />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; </small>
      </div>
    </footer>
  );
};

export default Footer;
