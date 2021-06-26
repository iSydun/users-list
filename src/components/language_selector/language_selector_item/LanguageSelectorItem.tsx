import React from "react";
import style from "./LanguageSelectorItem.module.scss";
import { AppLanguages } from "../../../translations/i18n";
import classNames from "classnames";

interface IProps {
  name: AppLanguages;
  onSelect: (language: AppLanguages) => void;
  selected: boolean;
}
const LanguageSelectorItem = ({ name, onSelect, selected }: IProps) => {
  const handleOnClick = () => {
    onSelect(name);
  };
  return (
    <div
      className={classNames(style.container, { [style.selected]: selected })}
      onClick={handleOnClick}
    >
      {name}
    </div>
  );
};

export default LanguageSelectorItem;
