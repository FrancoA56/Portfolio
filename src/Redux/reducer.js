import { LANGUAGE, THEME } from "./types";

const initialState = {
  language: true,
  theme: "light"
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LANGUAGE:
      return {
        ...state,
        language: !state.language,
      };
    case THEME:
      return{...state,
        theme: payload
      }

    default:
      return { ...state };
  }
};

export default rootReducer;
