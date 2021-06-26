import style from "./CustomInput.module.scss";
import React from "react";

interface IProps {
  placeholder: string;
  value: string;
  onChange: () => void;
}

const CustomInput = ({ value, onChange, placeholder }: IProps) => {
  return (
    <input
      className={style.input}
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default CustomInput;
