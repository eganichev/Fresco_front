import { combineReducers } from "redux";
import { users } from "./users";
import { projects } from "./projects";
import { pictures } from "./pictures";
import { headerSize } from "./headerSize";
import { toolbarSize } from "./toolbarSize";

export const rootReducer = combineReducers({
  users,
  projects,
  pictures,
  headerSize,
  toolbarSize,
});
