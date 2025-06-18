import React from "react";
import { useTranslation, Trans } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="section">
      <h2 className="section-title">{t("about.title")}</h2>
      <p className="about-text">
        {" "}
        <Trans
          i18nKey="about.text"
          components={{
            1: <span className="resaltado" />,
            2: <span className="resaltado" />,
            3: <span className="resaltado2" />,
          }}
        />
      </p>
    </section>
  );
};

export default About;
