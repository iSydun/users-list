import { httpService } from "../index";
import { IUser } from "../../reducers/users/types";

const getUsers = (): Promise<IUser[]> => {
  return httpService.get(`/users`);
};

const usersApi = {
  getUsers,
};

export default usersApi;
