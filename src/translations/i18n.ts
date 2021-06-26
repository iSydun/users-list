import i18n from "i18next";
import en from "../assets/translations/en";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

export const AppLanguages = {
  ENGLISH: "en",
};
export const DEFAULT_APP_LANGUAGE = AppLanguages.ENGLISH;

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    debug: false,
    fallbackLng: DEFAULT_APP_LANGUAGE,
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en,
    },
    react: {
      transSupportBasicHtmlNodes: true,
    },
  });

export default i18n;
