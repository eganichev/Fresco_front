import {
  LOG_IN,
  SAVE_PICTURE,
  CREATE_PROJECT,
  SET_HEADER_SIZE,
  SET_TOOLBAR_SIZE,
  SET_ACTIVE_PROJECT,
} from "../types/types";

export const logIn = (user) => ({
  type: LOG_IN,
  payload: { user },
});

export const createProject = (project) => ({
  type: CREATE_PROJECT,
  payload: { project },
});

export const savePicture = (picture) => ({
  type: SAVE_PICTURE,
  payload: { picture },
});

export const setActiveProject = (project) => ({
  type: SET_ACTIVE_PROJECT,
  payload: { project },
});

export const setHeaderSize = (size) => ({
  type: SET_HEADER_SIZE,
  payload: { size },
});

export const setToolbarSize = (size) => ({
  type: SET_TOOLBAR_SIZE,
  payload: { size },
});
