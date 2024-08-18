import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import profile from "../assests/profile.jpg";
import "./Profile.css";

const Profile = () => {
  return (
    <div className="profile" id="home">
      <div className="flip-box">
        <div className="flip-box-inner">
          <div className="front-view">
            <h1>
              I am <span className="name">Navya Sri,</span> from Dekalb
            </h1>
            <h2>SoftWare Developer</h2>
            <h3>
              Experience in designing, testing, and developing software
              solutions
            </h3>
          </div>
          <div className="back-view">
            <h1>
              Hi!, I am <span className="name">Navya Sri,</span> from Dekalb
            </h1>
            <h2>SoftWare Developer</h2>
            <h4>
              Possesses a deep understanding of web technologies and a proven
              track record of delivering innovative business solutions. Thrives
              in a fast-paced, high-energy environment, demonstrating a strong
              willingness to undertake additional responsibilities.
            </h4>
          </div>
        </div>
      </div>
      <div className="profile-respond">
        <div className="resume">
          <AnchorLink offset={50} href="#contact" className="anchor">
            Connect with me
          </AnchorLink>
        </div>
        <div className="resume">
          <a
            href="https://drive.google.com/file/d/1iQQJhSw4-8hncd0LZZ1Wpfv3x5QUwQ9e/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "none", color: "white" }}
          >
            My Resume
          </a>
        </div>
      </div>
      <div className="about" id="about">
        <div>
          <h1>About Me</h1>
        </div>
        <br></br>
        <div className="about-details">
          <div>
            <img
              src={profile}
              alt="Navya Sri"
              title="Navya Sri"
              className="secondImage"
            />
          </div>
          <div>
            <div className="bio">
              <p>
                Proficient software developer with experience in designing,
                developing, and deploying high-quality web and mobile
                applications. Strong expertise in multiple programming
                languages, frameworks, and tools, with a focus on delivering
                efficient, scalable solutions. Adept at collaborating with
                cross-functional teams to drive projects from concept to
                completion, with a keen eye for detail and a passion for
                continuous learning
              </p>
            </div>
            <div className="about-skills">
              <div className="about-skills1">
                <h3 style={{ textDecoration: "underline" }}>
                  Programming Languages & Frameworks
                </h3>
                <div className="about-skill">
                  <h4>Python</h4>
                  <h4>Tableau</h4>
                  <h4>SQL</h4>
                  <h4>R</h4>
                  <h4>Java</h4>
                  <h4>C</h4>
                  <h4>Informatica</h4>
                  <h4>Matlab</h4>
                  <h4>Power BI</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="about-skills2">
          <div className="about-skills21">
            <h3 style={{ textAlign: "center", textDecoration: "underline" }}>
              SoftWare & Tools
            </h3>
            <div className="about-skill22">
              <h4>MS Excel</h4>
              <h4>Linux</h4>
              <h4>Windows</h4>
            </div>
          </div>
          <div className="about-skills21">
            <h3 style={{ textAlign: "center", textDecoration: "underline" }}>
              Core Competencies
            </h3>
            <div className="about-skill22">
              <h4>Robotics</h4>
              <h4>Data Structures</h4>
              <h4>Linear Algebra</h4>
              <h4>Advanced Excel</h4>
              <h4>Project Management</h4>
              <h4>Team Collaboration</h4>
            </div>
          </div>
        </div>
        <br></br>
        <div className="experience">
          <div>
            <h2>2+</h2>
            <p className="exSubTitle">
              Years experience as a Software Developer
            </p>
          </div>
          <hr />
          <div>
            <h2>20+</h2>
            <p className="exSubTitle">Managed & Configured Oracle apps</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
