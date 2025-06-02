// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslation from "../src/assets/locales/en/translation.json";
import esTranslation from "../src/assets/locales/es/translation.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: enTranslation },
    es: { translation: esTranslation },
  },
  lng: "es", // idioma predeterminado al cargar
  fallbackLng: "es", // en caso de que falte alguna clave
  interpolation: {
    escapeValue: false, // React ya escapa por defecto
  },
});

export default i18n;
