import React from "react";

import styles from "./about.module.css";
import { getImageUrl } from "../../utils";

import { IoCameraSharp } from "react-icons/io5";
import { PiSoccerBallFill } from "react-icons/pi";
import { BsServer } from "react-icons/bs";

const About = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/headshot.png")}
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <BsServer size={150} style={{ marginRight: '20px' }}/>
            <div className={styles.aboutItemText}>
              <h3>Full-Stack Developer</h3>
              <p>
                I'm an aspiring full-stack developer with experience in building responsive
                and optimized sites both in the front and back-end. 
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <IoCameraSharp size={180} style={{ marginRight: '20px' }}/>
            <div className={styles.aboutItemText}>
              <h3>Designer & Producer</h3>
              <p>
                I have experience creating professional quality flyers, video filming, video editing, 
                and, merch / gear, utilizing Sony Alpha a7ii, gimbal, Adobe Illustrator, and Adobe Premiere Pro.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <PiSoccerBallFill size={150} style={{ marginRight: '20px' }}/>
            <div className={styles.aboutItemText}>
              <h3>Athlete</h3>
              <p>
                As a retired soccer player, karate kid, tennis enthusiast, and current competitive dancer, 
                I believe teamwork is the success to everything.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;