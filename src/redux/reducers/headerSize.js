import { SET_HEADER_SIZE } from "../types/types";

const initialState = {};

export const headerSize = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_HEADER_SIZE: {
      return payload.size;
    }
    default: {
      return state;
    }
  }
};
