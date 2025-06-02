// src/components/Footer.jsx
import React from "react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <p>
          &copy; {year} Carlos Augusto Curiel Ramos. {t("footer.rights")}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
