import React from "react";
import { useTranslation } from "react-i18next";
import { NavLink, Link } from "react-router-dom";
import perfil from "../assets/img/perfil.png";
import logo from "../assets/img/1-7d027107.png";
import "../assets/css/styles.css";
const Navbar = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <header className="navbar">
      <div className="container">
        <div className="home-logo">
          <NavLink to="/">
            <img src={logo} alt="Logo" className="home-logo-img" />
          </NavLink>
        </div>

        {/* Bloque de perfil (foto + nombre) */}
        <div className="perfil">
          <img src={perfil} alt="Mi Foto" className="perfil-img" />
          <span className="perfil-text">Carlos 'Tuto' Curiel Ramos</span>
        </div>

        {/* Menú de navegación */}
        <nav>
          <ul className="nav-list">
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                {t("nav.about")}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                {t("nav.projects")}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/education"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                {t("nav.education")}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/skills"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                {t("nav.skills")}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                {t("nav.contact")}
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* Selector de idioma */}
        <div className="lang-selector">
          <button onClick={() => changeLanguage("es")}>ES</button>
          <button onClick={() => changeLanguage("en")}>EN</button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
