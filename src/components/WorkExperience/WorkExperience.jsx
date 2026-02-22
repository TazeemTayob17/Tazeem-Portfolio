import React from "react";

import styles from "./WorkExperience.module.css";

function WorkExperience() {
  const tech = [
    "Typescript",
    "ReactJS",
    "NodeJS",
    "PostgreSQL",
    "Prisma ORM",
    "Azure App Service",
    "Microsoft Graph API",
    "DevOps Pipelining",
  ];

  return (
    <section className={styles.container} id="work">
      <h2 className={styles.title}>Work Experience</h2>

      <div className={styles.content}>
        <div className={styles.accent} aria-hidden />

        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <div>
              <h3 className={styles.roleTitle}>Software Engineering Internship</h3>
              <div className={styles.company}>BBD Software</div>
            </div>

            <div className={styles.headerRight}>
              <div className={styles.date}>JANUARY 2026</div>
              {/* attempt to load a BBD/company logo from src/assets/company/ */}
              {(() => {
                try {
                  const modules = import.meta.glob('../../assets/company/*.{png,jpg,jpeg,svg}', { eager: true, as: 'url' });
                  const entry = Object.entries(modules).find(([p]) => p.toLowerCase().includes('bbd'));
                  const logoUrl = entry ? entry[1] : null;
                  return logoUrl ? (
                    <img src={logoUrl} alt="BBD logo" className={styles.logo} />
                  ) : null;
                } catch (e) {
                  return null;
                }
              })()}
            </div>
          </div>

          <p className={styles.description}>
            Built a full-stack stock management app for BBD stock managers.
          </p>

          <ul className={styles.techList}>
            {tech.map((t) => (
              <li key={t} className={styles.techPill}>
                {t}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default WorkExperience;
