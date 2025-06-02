// src/components/Education.jsx
import React from "react";
import { useTranslation } from "react-i18next";

const Education = () => {
  const { t } = useTranslation();

  return (
    <section className="section education-section">
      <div className="container">
        <h2 className="section-title">{t("education.title")}</h2>
        <ul className="education-list">
          <li>
            <strong>{t("education.item1.degree")}</strong>{" "}
            <span>{t("education.item1.institution")}</span>
          </li>
          <li>
            <strong>{t("education.item2.degree")}</strong>{" "}
            <span>{t("education.item2.institution")}</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Education;
