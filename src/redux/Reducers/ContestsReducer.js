const initialState = {
  loading: false,
  contests: false,
  error: null,
  news: false,
};

const FETCH_CONTESTS_REQUEST = "FETCH_CONTESTS_REQUEST";
const FETCH_CONTESTS_SUCCESS = "FETCH_CONTESTS_SUCCESS";
const FETCH_CONTESTS_FAILURE = "FETCH_CONTESTS_FAILURE";
const FETCH_CONTESTS_NEWS = "FETCH_CONTESTS_NEWS";

const contestReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CONTESTS_REQUEST:
      return { ...state, loading: true };
    case FETCH_CONTESTS_SUCCESS:
      return { ...state, loading: false, contests: action.payload };
    case FETCH_CONTESTS_FAILURE:
      return { ...state, loading: false, error: action.error };
    case FETCH_CONTESTS_NEWS:
      return { ...state, news: action.payload };
    default:
      return state;
  }
};

export const setLoadingAction = (payload) => ({
  type: FETCH_CONTESTS_REQUEST,
  payload,
});
export const getContestsAction = (payload) => ({
  type: FETCH_CONTESTS_SUCCESS,
  payload,
});
export const setErrorContestsAction = (payload) => ({
  type: FETCH_CONTESTS_FAILURE,
  payload,
});
export const getNewsContestsAction = (payload) => ({
  type: FETCH_CONTESTS_NEWS,
  payload,
});

export default contestReducer;
