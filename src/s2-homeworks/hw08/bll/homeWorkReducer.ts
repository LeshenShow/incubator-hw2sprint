import { UserType } from "../HW8";

type ActionType =
  | { type: "sort"; payload: "up" | "down" }
  | { type: "check"; payload: number };

export const homeWorkReducer = (
  state: UserType[],
  action: ActionType
): UserType[] => {
  // need to fix any

  switch (action.type) {
    case "sort": {
      const way = action.payload;
      if (way === "up") {
        return [...state].sort((a, b) => a.name.localeCompare(b.name));
      }
      if (way === "down") {
        return [...state]
          .sort((a, b) => a.name.localeCompare(b.name))
          .reverse();
      }
      return state;
    }
    case "check": {
      return state.filter((user) => {
        return user.age >= action.payload;
      });
    }
    default:
      return state;
  }
};
