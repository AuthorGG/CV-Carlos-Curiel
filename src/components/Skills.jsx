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
import tsAnimation from "../assets/lottie/ts.json";
import angularAnimation from "../assets/lottie/angular.json";
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
  const softSkills = t("skills.SoftSkillsList", { returnObjects: true });
  const learningTechs = [
    { name: "TypeScript", animationData: tsAnimation },
    { name: "Advanced React.js", animationData: reactAnimation },
    { name: "Angular", animationData: angularAnimation },
  ];
  return (
    <section id="skills" className="section">
      <h2 className="section-title">{t("skills.title")}</h2>

      <div className="skills-group">
        <h3 className="skills-subtitle">{t("skills.knownTitle")}</h3>
        <ul className="skills-list">
          {knownLanguages.map((lang, idx) => (
            <li className="skill-item" key={idx}>
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
      <div className="skills-group">
        <h3 className="skills-subtitle">{t("skills.learningTitle")}</h3>
        <ul className="skills-list learning-list">
          {learningTechs.map((tech, idx) => (
            <li className="skill-item" key={idx}>
              <AnimatedIcon
                animationData={tech.animationData}
                width="60px"
                height="60px"
                loop
                autoplay
                speed={1}
              />
              <span className="skill-name learning">{tech.name}</span>
            </li>
          ))}
        </ul>
        <h3 className="skills-subtitle">{t("skills.SoftSkillsTitle")}</h3>
        <ul className="soft-skills-list">
          {softSkills.map((skill, index) => (
            <li key={index} className="soft-skill-item">
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
