const initState = {
    isLoading: false,
}

export const loadingReducer = (state: State = initState, action: LoadingActionType): State => {
  switch (action.type) {
    case "CHANGE_LOADING": {
      return { ...state, isLoading: action.isLoading };
    }

    default:
      return state;
  }
};

export const loadingAC = (isLoading: boolean): LoadingActionType =>
  ({
    type: "CHANGE_LOADING",
    isLoading,
  } as const);
type LoadingActionType = {
  type: "CHANGE_LOADING";
  isLoading: boolean;
};
export type State = {
  isLoading: boolean;
  // theme?: { themeId: number };
};