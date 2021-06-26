import React from "react";
import style from "./CustomButton.module.scss";

interface IProps {
  title: string;
  onClick: () => void;
}
const CustomButton = ({ title, onClick }: IProps) => {
  return (
    <button className={style.button} onClick={onClick}>
      {title}
    </button>
  );
};

export default CustomButton;
