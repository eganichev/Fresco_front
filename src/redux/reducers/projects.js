import { CREATE_PROJECT, SET_ACTIVE_PROJECT } from "../types/types";

const initialState = {
  currentProject: {},
  projectsList: [],
};

export const projects = (state = initialState, { type, payload }) => {
  switch (type) {
    case CREATE_PROJECT: {
      return {
        currentProject: payload.project,
        projectsList: state.projectsList.concat(payload.project),
      };
    }
    case SET_ACTIVE_PROJECT: {
      return {
        ...state,
        currentProject: payload.project,
      };
    }
    default: {
      return state;
    }
  }
};
