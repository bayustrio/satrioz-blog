export const GET_DATA_USER = "GET_DATA_USER";

// DATA LOGIN
export interface ILoginDataUser {
  token?: string;
  success: string;
}

// DATA USER
export interface IInfoDataUser {
  createdAt?: string;
  email?: string;
  photo?: string;
  readListLength?: number;
  role?: string;
  updatedAt?: string;
  username?: string;
  __v?: number;
  _id?: number;
}

export interface IGetDataUser extends ILoginDataUser {
  data?: IInfoDataUser;
}

export interface IUpdateProfile {
  username: string;
  image: string | File;
  photoPrev: File | string;
  email: string;
}
