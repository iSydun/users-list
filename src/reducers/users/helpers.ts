import { IUser } from "./types";

const getNormalizedString = (inputValue: string | number): string =>
  inputValue.toString().toLowerCase();

export const filterUsers = (users: IUser[], searchRule: string): IUser[] => {
  const normalizedSearchRule = getNormalizedString(searchRule);
  return users.filter((user) => {
    const normalizedUserName = getNormalizedString(user.name);
    return normalizedUserName.includes(normalizedSearchRule);
  });
};
