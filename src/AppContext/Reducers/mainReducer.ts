import { AppContextProps } from "../AppContext.types";
import { Actions, ActionType } from "./mainReducer.types";

export const mainReducer = (
  state: AppContextProps,
  action: Actions
): AppContextProps => {
  let updatedState;
  switch (action.type) {
    case ActionType.ADD:
      updatedState = [...state.people];
      updatedState.push(action.payload);
      return { ...state, people: updatedState };
    default:
      return state;
  }
};
