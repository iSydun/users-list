import React from "react";
import { useTranslation } from "react-i18next";
import {
  AppLanguages,
  changeLanguage,
  SUPPORTED_APP_LANGUAGES,
} from "../../translations/i18n";
import style from "./LanguageSelector.module.scss";
import LanguageSelectorItem from "./language_selector_item/LanguageSelectorItem";

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const selectedLanguage = i18n.language;

  const handleChangeLanguage = async (changeLanguageTo: AppLanguages) => {
    if (selectedLanguage !== changeLanguageTo) {
      await changeLanguage(changeLanguageTo);
    }
  };

  return (
    <div className={style.container}>
      {SUPPORTED_APP_LANGUAGES.map((language, index) => (
        <LanguageSelectorItem
          key={index}
          selected={selectedLanguage === language}
          name={language}
          onSelect={handleChangeLanguage}
        />
      ))}
    </div>
  );
};

export default LanguageSelector;
