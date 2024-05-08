import { ActionType } from "../interface";
import {
  ADDED,
  ALLCOMPLETED,
  CLEARCOMPLETED,
  COLORSELECTED,
  DELETED,
  TOGGLED,
} from "./actionTypes";
import { initialState } from "./initialState";
import { Todo } from "./interface";

const todoReducers = (state: Todo[] = initialState, action: ActionType) => {
  const maxId = state.reduce(
    (max: number, todo: Todo) => Math.max(todo.id, max),
    -1
  );
  switch (action.type) {
    case ADDED:
      return [
        ...state,
        { ...action.payload, id: maxId + 1, color: "", completed: false },
      ];
    case TOGGLED:
      return state.map((todo: Todo) => {
        if (todo.id !== action.payload.id) {
          return todo;
        }
        return {
          ...todo,
          completed: !todo.completed,
        };
      });
    case COLORSELECTED:
      return state.map((todo: Todo) => {
        if (todo.id !== action.payload.id) {
          return todo;
        }
        return {
          ...todo,
          color: action.payload.color,
        };
      });

    case DELETED:
      return state.filter((todo: Todo) => todo.id !== action.payload.id);
    case ALLCOMPLETED:
      return state.map((todo: Todo) => ({ ...todo, completed: true }));
    case CLEARCOMPLETED:
      return state.filter((todo: Todo) => !todo.completed);

    default:
      return [...state];
  }
};
export default todoReducers;
