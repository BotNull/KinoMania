import types from '@redux/actions/actionTypes';

const initialState = {
  loading: false,
  movie: [],
};

const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.START_ADD_MOVIE:
      return {
        ...state,
        loading: true,
      };
    case types.ADD_MOVIE:
      return {
        ...state,
        movie: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default moviesReducer;
