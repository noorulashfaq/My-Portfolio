import React from "react";
import "./Home.css";
import DecryptedText from "../Animations/DecryptedText";
import BlurText from "../Animations/BlurText";
import Me from "../../assets/avatar-1.svg";
import HeaderSocials from "./HeaderSocials";
import ScrollDown from "./ScrollDown";
import Shapes from "./Shapes";

const Home = () => {
  return (
    <section className="home container" id="home">
      <div className="intro">
        <img src={Me} alt="" className="home__img" width="120" />
        
        <BlurText
          text="Noorul Ashfaq A"
          delay={150}
          animateBy="words"
          direction="top"
          className="home__name text-2xl mb-8"
        />
        <div>
          <DecryptedText
            className="home__education"
            text="Software Engineer & Designer"
            animateOn="view"
            revealDirection="center"
          />
        </div>
        <HeaderSocials />

        <a href="#contact" className="btn">
          {" "}
          Contact Me
        </a>

        <ScrollDown />
      </div>

      <Shapes />
    </section>
  );
};

export default Home;
