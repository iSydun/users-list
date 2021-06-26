import style from "./CustomInput.module.scss";
import React, { ChangeEvent } from "react";

interface IProps {
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
}

const CustomInput = ({ value, onChange, placeholder }: IProps) => {
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };
  return (
    <input
      className={style.input}
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={handleOnChange}
    />
  );
};

export default CustomInput;
