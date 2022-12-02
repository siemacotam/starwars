import { Person } from "src/global";
import { ActionType, AddPerson } from "./mainReducer.types";

export const addPerson = (person: Person): AddPerson => ({
  type: ActionType.ADD,
  payload: person,
});
