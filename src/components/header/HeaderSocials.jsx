import React from "react";
import { SlSocialLinkedin } from "react-icons/sl";
import { SlSocialGithub } from "react-icons/sl";

const HeaderSocials = () => {
  return (
    <div>
      <div className="header__socials">
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
    </div>
  );
};

export default HeaderSocials;
