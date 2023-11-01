import { LANGUAGE } from "./types";

const initialState = {
  language: true,
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LANGUAGE:
      return {
        ...state,
        language: !state.language,
      };

    default:
      return { ...state };
  }
};

export default rootReducer;
