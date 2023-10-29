import {
  ADD_MOVIE_SUCCESS,
  ADD_MOVIE_STARTED,
} from '@redux/actions/actionTypes';
import { updateEpisode, updateSeason } from '@redux/actions/itemAction';
import axios from 'axios';
import cheerio from 'cheerio';

export const fetchData = id => {
  return async dispatch => {
    dispatch({
      type: ADD_MOVIE_STARTED,
    });
    await axios
      .get('//1696854416.svetacdn.in/r0bcpkSqsjWe', {
        params: {
          kp_id: id,
        },
      })
      .then(({ data }) => {
        const $ = cheerio.load(data);

        const obj = JSON.parse($('#files').val());

        dispatch({
          type: ADD_MOVIE_SUCCESS,
          payload: obj,
        });
        dispatch(updateEpisode(0));
        dispatch(updateSeason(0));
      })
      .catch(err => {
        dispatch({
          type: ADD_MOVIE_STARTED,
        });
      });
  };
};
