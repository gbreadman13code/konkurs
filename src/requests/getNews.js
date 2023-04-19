import { BASE_URL, NEWS_API } from "../BASE_URL";
import {
  getContestsAction,
  getNewsContestsAction,
  setErrorContestsAction,
} from "../redux/Reducers/ContestsReducer";

export const getNews = (id) => {
  return async (dispatch) => {
    try {
      const response = await fetch(NEWS_API + id);
      const news = await response.json();
      dispatch(getNewsContestsAction(news));
    } catch (error) {
      dispatch(setErrorContestsAction(error));
    }
  };
};
