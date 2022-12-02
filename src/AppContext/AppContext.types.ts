import { Dispatch } from "react";
import { Actions } from "./Reducers/mainReducer.types";
import { Person } from "src/global";

export type Values<T> = T[keyof T];

export interface AppContextState {
  state: AppContextProps;
  dispatch: Dispatch<Actions>;
}

export interface AppContextProps {
  people: Person[];
}

export interface AppContextProviderProps {
  children: JSX.Element;
}
