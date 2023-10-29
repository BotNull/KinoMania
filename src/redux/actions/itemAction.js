import types from '@redux/actions/actionTypes';

export const updateSeason = season => {
  return {
    type: types.UPDATE_CURRENT_SEASON,
    payload: season,
  };
};

export const updateEpisode = episode => {
  return {
    type: types.UPDATE_CURRENT_EPISODE,
    payload: episode,
  };
};

export const resetItems = () => {
  return {
    type: types.RESET_ITEM
  }
}