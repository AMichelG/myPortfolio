import React from "react";
import "./nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { CgUserList } from "react-icons/cg";
import { BsLightningCharge } from "react-icons/bs";
import { BiMailSend } from "react-icons/bi";
import { useState } from "react";

const Nav = () => {
  const [activeNav, setActiveNave] = useState("#");

  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveNave("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNave("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <CgUserList />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNave("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
      >
        <BiBook />
      </a>
      <a
        href="#skills"
        onClick={() => setActiveNave("#skills")}
        className={activeNav === "#skills" ? "active" : ""}
      >
        <BsLightningCharge />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNave("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <BiMailSend />
      </a>
    </nav>
  );
};

export default Nav;
