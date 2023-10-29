import {
  ADD_MOVIE_SUCCESS,
  ADD_MOVIE_STARTED,
  ADD_MOVIE_ERROR,
} from '@redux/actions/actionTypes';

const initialState = {
  loading: false,
  movie: [],
};

const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MOVIE_STARTED:
      return {
        ...state,
        loading: true,
      };
    case ADD_MOVIE_SUCCESS:
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
