import { IThemeAction } from "./Theme-type";
import { GET_DATA_USER, IGetDataUser, IInfoDataUser } from "./User-type";

export const HANDLE_CHANGE_REGISTER = "HANDLE_CHANGE_REGISTER";
// AUTH REGISTER
export interface IAuth {
  email: string;
  password: string;
  username?: string;
  confirmPassword: string;
}

export interface IAuthChanges {
  Auth: IAuth;
}

export interface IStateReducer {
  Auth: IAuth;
  theme: string;
  User: IGetDataUser;
}

export interface IOnChange {
  name: string;
  value: string;
}

export interface IHandleChange {
  type: typeof HANDLE_CHANGE_REGISTER;
  payload: IOnChange;
}

// GET DATA USER
export interface InGetUser {
  type: typeof GET_DATA_USER;
  payload: IGetDataUser;
}

export type TDispatchAuth = IHandleChange | IThemeAction | InGetUser;
