import {
  UPDATE_CURRENT_SEASON,
  UPDATE_CURRENT_EPISODE,
} from '@redux/actions/actionTypes';

const initialState = {
  currentSeason: 0,
  currentEpisode: 0,
};

const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_CURRENT_SEASON:
      return {
        ...state,
        currentSeason: action.payload,
      };
    case UPDATE_CURRENT_EPISODE:
      return {
        ...state,
        currentEpisode: action.payload,
      };
    default:
      return state;
  }
};

export default itemReducer;
