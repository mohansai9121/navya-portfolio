import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import profile from "../assests/profile.jpg";
import "./Profile.css";

const Profile = () => {
  return (
    <div className="profile">
      <h1>
        I am <span className="name">Navya Sri,</span> from Dekalb
      </h1>
      <h2>SoftWare Developer</h2>
      <h3>
        Experience in designing, testing, and developing software solutions
      </h3>
      <div className="profile-respond">
        <div className="connect">
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
              alt="Mohan Sai"
              title="Mohan Sai"
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
              <div className="about-skill">
                <h3>Tableau</h3>
                <hr width="90%" />
                90%
              </div>
              <div className="about-skill">
                <h3>JAVA</h3>
                <hr width="80%" />
                80%
              </div>
              <div className="about-skill">
                <h3>MATLAB</h3>
                <hr width="60%" />
                60%
              </div>
              <div className="about-skill">
                <h3>PowerBI</h3>
                <hr width="70%" />
                70%
              </div>
              <div className="about-skill">
                <h3>Python</h3>
                <hr width="90%" />
                90%
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
      </div>
    </div>
  );
};

export default Profile;
