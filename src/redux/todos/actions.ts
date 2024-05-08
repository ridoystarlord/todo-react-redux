import {
  ADDED,
  ALLCOMPLETED,
  CLEARCOMPLETED,
  COLORSELECTED,
  DELETED,
  TOGGLED,
} from "./actionTypes";

export const added = (todoText: string) => {
  return {
    type: ADDED,
    payload: { text: todoText },
  };
};
export const toogled = (id: number) => {
  return {
    type: TOGGLED,
    payload: { id },
  };
};
export const colorSelected = (id: number, color: string) => {
  return {
    type: COLORSELECTED,
    payload: { id, color },
  };
};
export const deleted = (id: number) => {
  return {
    type: DELETED,
    payload: { id },
  };
};
export const allCompleted = () => {
  return {
    type: ALLCOMPLETED,
  };
};
export const clearCompleted = () => {
  return {
    type: CLEARCOMPLETED,
  };
};
