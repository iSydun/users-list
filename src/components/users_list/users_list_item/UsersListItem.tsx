import React from "react";
import style from "./UsersListItem.module.scss";

interface IProps {
  id: number;
  name: string;
  username: string;
}

const UsersListItem = ({ id, name, username }: IProps) => {
  return (
    <div className={style.container}>
      <div className={style.id}>{id}</div>
      <div className={style.name}>{name}</div>
      <div className={style.username}>{username}</div>
    </div>
  );
};

export default UsersListItem;
