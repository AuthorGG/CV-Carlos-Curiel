import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>© 2025 Carlos Augusto Curiel Ramos. {t("footer.text")}</p>
      <p className="footer-tech">{t("footer.madeWith")}</p>
    </footer>
  );
};

export default Footer;
