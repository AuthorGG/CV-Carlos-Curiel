// src/components/Contact.jsx
import React from "react";
import { useTranslation } from "react-i18next";
import githubIcon from "../assets/img/icons8-github.svg";
import linkedinIcon from "../assets/img/linkedin-svgrepo-com.svg";
import WhatsAppButton from "./WhatsAppButton";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <section id="contact" className="section">
      <h2 className="section-title">{t("contact.title")}</h2>
      <p className="section-text">{t("contact.text")}</p>
      <ul className="social-list">
        <li>
          <a
            href="https://github.com/AuthorGG"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={githubIcon} alt="GitHub" className="icon" /> GitHub
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/carlos-curiel-66bb1b105/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedinIcon} alt="LinkedIn" className="icon" /> LinkedIn
          </a>
        </li>
        <li>
          <WhatsAppButton />
        </li>
        {/*  más redes */}
      </ul>
    </section>
  );
};

export default Contact;
