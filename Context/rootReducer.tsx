import { TDispatchAuth, IStateReducer } from "../Types/Auth-type";
import * as Type from "../Types/Auth-type";
import { HANDLE_THEME } from "../Types/Theme-type";
import { GET_DATA_USER } from "../Types/User-type";
export const rootReducer = (state: IStateReducer, action: TDispatchAuth) => {
  switch (action.type) {
    case Type.HANDLE_CHANGE_REGISTER:
      return {
        ...state,
        Auth: { ...state.Auth, [action.payload.name]: action.payload.value },
      };
    case HANDLE_THEME:
      return {
        ...state,
        theme: state.theme === "light" ? "dark" : "light",
      };
    case GET_DATA_USER:
      return { ...state, User: action.payload };

    default:
      return state;
  }
  console.log(state, "< states");
};
