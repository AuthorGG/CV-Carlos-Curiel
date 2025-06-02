// src/components/Skills.jsx
import React from "react";
import { useTranslation } from "react-i18next";
import AnimatedIcon from "./AnimatedIcon";
import "../assets/css/styles.css";
//logos lottie
import jsAnimation from "../assets/lottie/JS.json";
import html5Animation from "../assets/lottie/html.json";
import css3Animation from "../assets/lottie/css.json";
import reactAnimation from "../assets/lottie/react.json";
import nodejsAnimation from "../assets/lottie/nodejs.json";
import sqlAnimation from "../assets/lottie/sql.json";

const Skills = () => {
  const { t } = useTranslation();

  const knownLanguages = [
    {
      name: "JavaScript",
      animationData: jsAnimation,
    },
    {
      name: "HTML5",
      animationData: html5Animation,
    },
    {
      name: "CSS",
      animationData: css3Animation,
    },
    {
      name: "React",
      animationData: reactAnimation,
    },
    {
      name: "NodeJs",
      animationData: nodejsAnimation,
    },
    {
      name: "SQL",
      animationData: sqlAnimation,
    },
  ];
  return (
    <section className="section skills-section">
      <div className="container">
        <h2 className="section-title">{t("skills.title")}</h2>

        <div className="skills-group">
          <h3 className="skills-subtitle">{t("skills.knownTitle")}</h3>
          <ul className="skills-list">
            {knownLanguages.map((lang, idx) => (
              <li className="skill-item" key={idx}>
                {/* Componente que renderiza la animación */}
                <AnimatedIcon
                  animationData={lang.animationData}
                  width="60px"
                  height="60px"
                  loop={true}
                  autoplay={true}
                  speed={1}
                />
                <span className="skill-name">{lang.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
