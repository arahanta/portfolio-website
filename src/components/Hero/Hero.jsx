import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={`${styles.title} ${styles.animateText}`}>
          Hi, I'm Arahanta
        </h1>
        <p className={styles.description}>
          I'm a final year student at Thapathali Campus, Tribhuvan University.
          I'm enthusiastic about machine learning and data science, and
          currently, I'm gaining practical experience as an AI intern
        </p>
        <a
          href="https://www.linkedin.com/in/pokhrel-arahanta-686503259/"
          className={styles.contactBtn}
        >
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/HeroImage.png")}
        alt=" "
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
