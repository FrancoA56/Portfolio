import { LANGUAGE, THEME } from "./types";
import Swal from "sweetalert2";

const showErrorAlert = (message) => {
  Swal.fire({
    icon: "error",
    title: "Error",
    confirmButtonColor: "rgb(94 195 191)",
    text: `${message}`,
  });
};

export const changeLanguage = () => {
  return function (dispatch) {
    try {
      return dispatch({
        type: LANGUAGE,
      });
    } catch (error) {
      showErrorAlert(error.message);
    }
  };
};

export const changeTheme = (value) => {
  return function (dispatch) {
    try {
      return dispatch({
        type: THEME,
        payload: value,
      });
    } catch (error) {
      showErrorAlert(error.message);
    }
  };
};
