import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import styles from './SectionHero.module.scss';

export default function SectionHero() {
  return (
    <section>
      <div className={styles.h1Hero}>
        <h1>
          Design partner for
          <br /> early stage tech
          <br /> and scale ups.
        </h1>
      </div>
      <div className={styles.divHero}>
        <p className={styles.paraHero1}>
          I’ve spent a couple of decades creating brands and digital products —
          acting as a VP of design, co-founder and advisor. Based in London,
          Toronto and NYC.
        </p>
        <br />
        <p className={styles.paraHero2}>
          My studio <a href="https://theworkshop.co/">The Workshop</a> partners
          with founders and VC to brand, build and bring product ideas to life.
        </p>
        <br />
        <p className={styles.paraAHero}>
          <a className={styles.paraHero3} href="mailto:jb@jasonbriscoe.com">
            Email me
          </a>
          <a className={styles.paraHero4} href="https://calendly.com/">
            Schedule a discovery call
          </a>
        </p>
      </div>
    </section>
  );
}
