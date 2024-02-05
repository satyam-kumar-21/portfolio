import React from "react";
import "./about.css";
import myImage from "../../assets/my-image2.png";
import { GiGraduateCap } from "react-icons/gi";
import { BsBookmarkStar } from "react-icons/bs";
import { TfiWorld } from "react-icons/tfi";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={myImage} alt="Me" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <GiGraduateCap className="about__icon" />
              <h5>Degree</h5>
              <small>
                B.tech from CSE. <br />
                <i>Rajiv Gandhi University of Technology</i>
              </small>
            </article>

            <article className="about__card">
              <BsBookmarkStar className="about__icon" />
              <h5>Current GPA</h5>
              <small>8.35</small>
            </article>

            <article className="about__card">
              <TfiWorld className="about__icon" />
              <h5>Domains</h5>
              <small>
                <ul>
                <br />
                  <li>Web developer</li>
                </ul>
              </small>
            </article>
          </div>
          <p>
          Hello there! I'm <b>Satyam kumar</b>, aspiring full-stack developer skilled in Node.js, eager to create
            innovative web applications. Proficient in JavaScript, React,
            Express, and MongoDB, with a passion for problem-solving and
            continuous learning. Ready to contribute my expertise and
            adaptability to drive impactful solutions and excel in a dynamic
            tech environment.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
