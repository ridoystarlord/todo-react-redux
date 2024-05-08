import { combineReducers } from "redux";
import todoReducers from "./todos/reducer";
import filterReducers from "./filters/reducer";

const rootReducer = combineReducers({
  todo: todoReducers,
  filter: filterReducers,
});

export default rootReducer;
