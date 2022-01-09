import ParishService from "../../services/parish.service";
import { GET_PARISHES, SET_MESSAGE } from "./type";

export const getParishes = () => (dispatch) => {
  return ParishService.getParishes().then(
    (response) => {
      dispatch({ type: GET_PARISHES, payload: response.data });
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
