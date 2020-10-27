import { LOG_IN } from "../types/types";

const initialState = {
  currentUser: {},
  usersList: [],
};

export const users = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOG_IN: {
      return {
        currentUser: payload.user,
        usersList: state.usersList.concat(payload.user),
      };
    }
    default: {
      return state;
    }
  }
};
