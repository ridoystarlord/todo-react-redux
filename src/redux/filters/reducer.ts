import { ActionType } from "../interface";
import { COLORCHANGED, STATUSCHANGED } from "./actionTypes";
import { initialState } from "./initialState";
import { Filter } from "./interface";

const filterReducers = (state: Filter = initialState, action: ActionType) => {
  switch (action?.type) {
    case STATUSCHANGED:
      return { ...state, status: action.payload.status };
    case COLORCHANGED:
      if (action.payload.changeType === "added") {
        const colors = [...state.color, action.payload.color];
        return {
          ...state,
          color: [...colors],
        };
      } else {
        return {
          ...state,
          color: [...state.color].filter(
            (color: string) => color != action.payload.color
          ),
        };
      }

    default:
      return { ...state };
  }
};
export default filterReducers;
