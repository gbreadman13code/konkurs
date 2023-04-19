import { BASE_URL } from "../BASE_URL";
import {
  getContestsAction,
  setErrorContestsAction,
} from "../redux/Reducers/ContestsReducer";

export const fetchContests = (slug, setNotFound) => {
  return async (dispatch) => {
    try {
      const response = await fetch(BASE_URL + slug + "/");
      if (response.status === 404) {
        setNotFound(true);
        return;
      }
      const contests = await response.json();
      dispatch(getContestsAction(contests));
    } catch (error) {
      dispatch(setErrorContestsAction(error));
    }
  };
};
