import React from "react";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  return (
    <section className="section about-section">
      <div className="container">
        <h2 className="section-title">{t("about.title")}</h2>
        <p className="section-text">{t("about.text")}</p>
      </div>
    </section>
  );
};

export default About;
