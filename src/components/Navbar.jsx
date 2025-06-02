import React from "react";
import { useTranslation } from "react-i18next";
import perfil from "../assets/img/perfil.png";
import logo from "../assets/img/1-7d027107.png";

const Navbar = ({ onNavClick, activeSection }) => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  const handleClick = (sectionKey) => {
    onNavClick(sectionKey);
  };

  return (
    <header className="navbar">
      <div className="container">
        <div className="home-logo">
          <a href="/">
            <img src={logo} alt="Logo" className="home-logo-img" />
          </a>
        </div>
        <div className="perfil">
          <img src={perfil} alt="Mi Foto" className="perfil-img" />
          <span className="perfil-text">Carlos 'Tuto' Curiel Ramos</span>
        </div>

        <nav>
          <ul className="nav-list">
            <li>
              <button
                onClick={() => handleClick("about")}
                className={
                  activeSection === "about" ? "nav-link active" : "nav-link"
                }
              >
                {t("nav.about")}
              </button>
            </li>
            <li>
              <button
                onClick={() => handleClick("education")}
                className={
                  activeSection === "education" ? "nav-link active" : "nav-link"
                }
              >
                {t("nav.education")}
              </button>
            </li>
            <li>
              <button
                onClick={() => handleClick("skills")}
                className={
                  activeSection === "skills" ? "nav-link active" : "nav-link"
                }
              >
                {t("nav.skills")}
              </button>
            </li>
            <li>
              <button
                onClick={() => handleClick("contact")}
                className={
                  activeSection === "contact" ? "nav-link active" : "nav-link"
                }
              >
                {t("nav.contact")}
              </button>
            </li>
          </ul>
        </nav>

        <div className="lang-selector">
          <button onClick={() => changeLanguage("es")}>ES</button>
          <button onClick={() => changeLanguage("en")}>EN</button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
