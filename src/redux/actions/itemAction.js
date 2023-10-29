import {
  UPDATE_CURRENT_SEASON,
  UPDATE_CURRENT_EPISODE,
} from '@redux/actions/actionTypes';

export const updateSeason = season => {
  return {
    type: UPDATE_CURRENT_SEASON,
    payload: season,
  };
};

export const updateEpisode = episode => {
  return {
    type: UPDATE_CURRENT_EPISODE,
    payload: episode,
  };
};
