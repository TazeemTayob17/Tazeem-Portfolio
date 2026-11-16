import React from "react";

import styles from "./About.module.css";
//import getImageUrl from "../../utils.js";
import cursorIcon from "../../assets/about/cursorIcon.png";
import aboutImage from "../../assets/about/avatar-final.png";
import serverIcon from "../../assets/about/serverIcon.png";
import uilcon from "../../assets/about/uiIcon.png";
 
function About() {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={aboutImage}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={cursorIcon} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Full-Stack Engineer</h3>
              <p>
                I build end-to-end products, from polished React and React Native interfaces to Spring Boot and Node.js services backed by PostgreSQL, delivered in TypeScript, Java and Python.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={serverIcon} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Cloud & DevOps</h3>
              <p>
                I design and deploy scalable systems on AWS and Microsoft Azure, using Docker, Terraform and CI/CD pipelines to keep infrastructure reproducible and reliable.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={uilcon} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>AI & Machine Learning</h3>
              <p>
                As a BSc Honours student specialising in AI, ML and reinforcement learning, I build LLM/RAG systems and ML models, from DQN game agents to predictive analytics.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={cursorIcon} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Professional Experience</h3>
              <p>
                Internships at BBD Software, Synthesis Software and Isazi.ai, and co-founder of Lotz, a live auction marketplace launching soon.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={serverIcon} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Problem Solving</h3>
              <p>
                A strong foundation in algorithms and mathematics lets me break down complex problems and ship clean, maintainable software that real users rely on.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default About;
