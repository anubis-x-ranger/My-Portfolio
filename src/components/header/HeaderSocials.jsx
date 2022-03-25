import React from "react";
import { BsLinkedin, BsMedium } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/satyajit-sahu-34396318b"
        target="__blank"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/anubis-x-ranger" target="__blank">
        <FaGithub />
      </a>
      <a href="https://medium.com" target="__blank">
        <BsMedium />
      </a>
    </div>
  );
};

export default HeaderSocials;
