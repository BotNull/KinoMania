import types from '@redux/actions/actionTypes';

const initialState = {
  currentSeason: 0,
  currentEpisode: 0,
};

const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_CURRENT_SEASON:
      return {
        ...state,
        currentSeason: action.payload,
      };
    case types.UPDATE_CURRENT_EPISODE:
      return {
        ...state,
        currentEpisode: action.payload,
      };
    case types.RESET_ITEM:
      return {
        ...state,
        currentEpisode: 0,
        currentSeason: 0
      }
    default:
      return state;
  }
};

export default itemReducer;
