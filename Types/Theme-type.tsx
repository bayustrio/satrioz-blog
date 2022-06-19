export const HANDLE_THEME = "HANDLE_THEME";

export interface IDispatchTHeme {
  value: string;
}

export interface IThemeAction {
  type: typeof HANDLE_THEME;
  payload: string;
}
