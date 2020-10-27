import { SET_TOOLBAR_SIZE } from "../types/types";

const initialState = {};

export const toolbarSize = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_TOOLBAR_SIZE: {
      return payload.size;
    }
    default: {
      return state;
    }
  }
};
