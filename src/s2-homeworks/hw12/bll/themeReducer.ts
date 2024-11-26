const initState = {
    themeId: 1,
}

export const themeReducer = (state: StateTheme = initState, action: ChangeTheme): StateTheme => {
  switch (action.type) {
    case "SET_THEME_ID":
      return { ...state, themeId: action.id };
    default:
      return state;
  }
};

export const changeThemeId = (id: number): ChangeTheme => ({ type: "SET_THEME_ID", id } as const); // fix any
type ChangeTheme = {
  type: "SET_THEME_ID";
  id: number;
};
export type StateTheme = {
  themeId: number;
};