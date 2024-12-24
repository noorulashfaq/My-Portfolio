import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode, SiCodechef, SiHackerrank } from "react-icons/si";

const HeaderSocials = () => {
  return (
    <div className="home__socials">
      <a
        href="https://github.com/noorulashfaq"
        className="home__social-link"
        target="_blank"
        rel="noreferrer"
      >
        <FaGithub />
      </a>

      <a
        href="https://www.linkedin.com/in/noorulashfaq/"
        className="home__social-link"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedinIn />
      </a>

      <a
        href="https://leetcode.com/u/noorul_ashfaq/"
        className="home__social-link"
        target="_blank"
        rel="noreferrer"
      >
        <SiLeetcode />
      </a>

      <a
        href="https://www.codechef.com/users/noorul_ashfaq"
        className="home__social-link"
        target="_blank"
        rel="noreferrer"
      >
        <SiCodechef />
      </a>

      <a
        href="https://www.hackerrank.com/profile/noorulashfaq786"
        className="home__social-link"
        target="_blank"
        rel="noreferrer"
      >
        <SiHackerrank />
      </a>
    </div>
  );
};

export default HeaderSocials;
