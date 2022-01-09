import ShepherdService from "../../services/shepherd.service";
import { GET_SHEPHERDS, SET_MESSAGE } from "./type";

export const getShepherds = () => (dispatch) => {
  return ShepherdService.getParishes().then(
    (response) => {
      dispatch({ type: GET_SHEPHERDS, payload: response.data });
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });
    }
  );
};
