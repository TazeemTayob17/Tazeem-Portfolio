import React from "react";

import styles from "./WorkExperience.module.css";

const logos = import.meta.glob("../../assets/company/*.{png,jpg,jpeg,svg}", {
  eager: true,
  import: "default",
});

function getLogo(key) {
  const entry = Object.entries(logos).find(([p]) =>
    p.toLowerCase().includes(key),
  );
  return entry ? entry[1] : null;
}

const experiences = [
  {
    role: "Software Engineering Internship",
    company: "BBD Software",
    date: "JANUARY 2026",
    logoKey: "bbd",
    description:
      "Built a full-stack stock management app for BBD stock managers.",
    tech: [
      "Typescript",
      "ReactJS",
      "NodeJS",
      "PostgreSQL",
      "Prisma ORM",
      "Azure App Service",
      "Microsoft Graph API",
      "DevOps Pipelining",
    ],
  },
  {
    role: "Software Engineering Internship",
    company: "Synthesis Software",
    date: "JUN - JUL 2026",
    logoKey: "synthesis",
    description:
      "Built an AI-powered financial advisory system giving personalised advice, using LLM/RAG with Gemini and Ollama.",
    tech: ["Typescript", "ReactJS", "LLM", "RAG", "Gemini", "Ollama"],
  },
  {
    role: "Data Science / Machine Learning Internship",
    company: "Isazi.ai",
    date: "NOV - DEC 2026",
    logoKey: "isazi",
    description:
      "Engineered an automated KYC risk-testing framework: a synthetic data generator producing realistic fictional company profiles, paired with an ML-driven anomaly detector that flags inconsistencies and raises risk alerts.",
    tech: [
      "Python",
      "Machine Learning",
      "Anomaly Detection",
      "Synthetic Data Generation",
      "scikit-learn",
      "Pandas",
      "FastAPI",
    ],
  },
  {
    role: "Co-Founder",
    company: "Lotz",
    date: "LAUNCHING SOON",
    logoKey: "lotz",
    logoLight: true,
    description:
      "Co-founding Lotz, a marketplace platform with real-time bidding, live streaming and chat. Launching soon.",
    tech: [
      "AWS",
      "Terraform",
      "Java",
      "Spring Boot",
      "React Native",
      "PostgreSQL",
      "Valkey",
      "LiveKit",
    ],
  },
];

function WorkExperience() {
  return (
    <section className={styles.container} id="work">
      <h2 className={styles.title}>Work Experience</h2>

      {experiences.map((exp) => {
        const logoUrl = getLogo(exp.logoKey);
        return (
          <div className={styles.content} key={exp.company}>
            <div className={styles.accent} aria-hidden />

            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <div>
                  <h3 className={styles.roleTitle}>{exp.role}</h3>
                  <div className={styles.company}>{exp.company}</div>
                </div>

                <div className={styles.headerRight}>
                  <div className={styles.date}>{exp.date}</div>
                  {logoUrl && (
                    <img
                      src={logoUrl}
                      alt={`${exp.company} logo`}
                      className={`${styles.logo} ${exp.logoLight ? styles.logoLight : ""}`}
                    />
                  )}
                </div>
              </div>

              <p className={styles.description}>{exp.description}</p>

              <ul className={styles.techList}>
                {exp.tech.map((t) => (
                  <li key={t} className={styles.techPill}>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default WorkExperience;
