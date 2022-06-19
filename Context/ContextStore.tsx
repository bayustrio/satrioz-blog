import React, { createContext, Dispatch, useReducer } from "react";
import { IStateReducer, IAuthChanges, TDispatchAuth } from "../Types/Auth-type";
import { rootReducer } from "./rootReducer";
import { initialState } from "./InitialState";

export const rootContext = createContext<{
  state: IStateReducer;
  dispatch: Dispatch<TDispatchAuth>;
}>({
  state: initialState,
  dispatch: () => null,
});

const ContextStore = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(rootReducer, initialState);
  return (
    <rootContext.Provider value={{ state, dispatch }}>
      {children}
    </rootContext.Provider>
  );
};

export default ContextStore;
