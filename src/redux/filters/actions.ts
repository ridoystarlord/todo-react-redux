import { STATUSCHANGED, COLORCHANGED } from "./actionTypes";

export const colorChanged = (color: string, changeType: string) => {
  return {
    type: COLORCHANGED,
    payload: {
      color,
      changeType,
    },
  };
};
export const statusChanged = (status: string) => {
  return {
    type: STATUSCHANGED,
    payload: {
      status,
    },
  };
};
