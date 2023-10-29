import types from '@redux/actions/actionTypes';
import { resetItems } from '@redux/actions/itemAction';
import axios from 'axios';
import cheerio from 'cheerio';

const startAddMovie = () => {
  return {
    type: types.START_ADD_MOVIE
  }
}

const addMovie = obj => {
  return {
    type: types.ADD_MOVIE,
    payload: obj,
  }
}

export const fetchData = id => {
  return async dispatch => {
    dispatch(startAddMovie());

    await axios
      .get('//1696854416.svetacdn.in/r0bcpkSqsjWe', {
        params: {
          kp_id: id,
        },
      })
      .then(({ data }) => {
        const $ = cheerio.load(data);

        const obj = JSON.parse($('#files').val());

        dispatch(addMovie(obj));
        dispatch(resetItems())
      })
      .catch(() => {
        dispatch(startAddMovie());
      });
  };
};
