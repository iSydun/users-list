import i18n from "i18next";
import en from "../assets/translations/en";
import pl from "../assets/translations/pl";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

export enum AppLanguages {
  ENGLISH = "en",
  POLISH = "pl",
}
export const SUPPORTED_APP_LANGUAGES = Object.values(AppLanguages);
export const DEFAULT_APP_LANGUAGE = AppLanguages.ENGLISH;

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    debug: false,
    fallbackLng: DEFAULT_APP_LANGUAGE,
    supportedLngs: SUPPORTED_APP_LANGUAGES,
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en,
      pl,
    },
    react: {
      transSupportBasicHtmlNodes: true,
    },
  });

export const changeLanguage = async (language: AppLanguages) => {
  await i18n.changeLanguage(language);
};

export default i18n;
