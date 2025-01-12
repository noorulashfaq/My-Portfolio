import React from "react";
import "./About.css";
import Image from "../../assets/avatar-2.svg";
import AboutBox from "./AboutBox";

const About = () => {
  const downloadResume = async () => {
    window.open("https://drive.google.com/file/d/1xAQqrgUa3U_yWrFDI4jZUI8svsVaU-Nl/view?usp=sharing", "_blank");
  };

  return (
    <section className="about container section" id="about">
      <h2 className="section__title">About Me</h2>

      <div className="about__container grid">
        <img src={Image} alt="" className="about__img" />

        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">
              Hello! I'm Noorul, a passionate Full Stack Developer skilled in
              creating dynamic and scalable web applications. With expertise in{" "}
              <strong>MERN Stack, Java, C#, and SQL</strong>. I thrive on
              solving complex challenges and building intuitive, user-focused
              solutions.
              <br />
              <br />I bring hands-on experience from internships and projects
              where I’ve designed, developed, and deployed robust software
              systems. My strengths lie in{" "}
              <em>object-oriented programming, database management</em>, and
              collaborating in <em>Agile environments</em> to deliver
              high-quality results. I’m driven by a love for learning and
              innovation, constantly exploring new technologies to stay ahead.
              Beyond coding, I enjoy participating in workshops, presenting
              technical papers, and mentoring peers.
            </p>
          </div>

          <div className="about__skills grid">
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Development</h3>
                <span className="skills__number">90%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage coding"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Logic Building</h3>
                <span className="skills__number">95%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage logic_building"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Mentoring</h3>
                <span className="skills__number">80%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage mentoring"></span>
              </div>
            </div>
          </div>
          <br />
          <p>Let’s create something impactful together!</p>
          <br />
          <button className="btn" onClick={downloadResume}>
            Download Resume
          </button>
        </div>
      </div>

      <AboutBox />
    </section>
  );
};

export default About;
