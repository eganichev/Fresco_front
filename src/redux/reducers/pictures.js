import { SAVE_PICTURE } from "../types/types";

const initialState = [];

export const pictures = (state = initialState, { type, payload }) => {
  switch (type) {
    case SAVE_PICTURE: {
      const findingPicture = !!state.find(
        (picture) => picture.projectId === payload.picture.projectId
      );
      if (findingPicture) {
        return state.map((picture) => {
          if (picture.projectId === payload.picture.projectId) {
            return {
              ...picture,
              notes: payload.picture.notes,
              layer: payload.picture.layer,
            };
          } else {
            return picture;
          }
        });
      } else {
        return state.concat(payload.picture);
      }
    }
    default: {
      return state;
    }
  }
};
