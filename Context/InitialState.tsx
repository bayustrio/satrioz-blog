import { IStateReducer } from "../Types/Auth-type";
import { IGetDataUser, IInfoDataUser } from "../Types/User-type";

export // INITIAL STATE
const initialState = {
  Auth: {
    email: "",
    password: "",
    username: "",
    confirmPassword: "",
  },
  theme: "light",
  User: {
    success: "",
    User: {} as IInfoDataUser,
  },
};
