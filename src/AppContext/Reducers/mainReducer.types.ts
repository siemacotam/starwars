import { Person } from "src/global";

export enum ActionType {
  ADD,
}

export interface AddPerson {
  type: ActionType.ADD;
  payload: Person;
}

export type Actions = AddPerson;
