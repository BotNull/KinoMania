import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { ArrowIcon } from '@icons';
import ItemList from '@ItemList/ItemList';
import { updateSeason, updateEpisode } from '@redux/actions/itemAction';
import { isObjectNested } from '@utils/objectNested';
import '@components/Movie/style.css';

const Movie = ({ setIsSearch }) => {
  const { currentSeason, currentEpisode } = useSelector(
    state => state.itemReducer,
  );
  const { movie, loading } = useSelector(state => state.moviesReducer);

  const [current, setCurrent] = useState(null);

  useEffect(() => {
    if (!loading) {
      if (isObjectNested(movie)) {
        const download =
          movie[0][currentSeason]['folder'][currentEpisode]['download'];
        setCurrent(
          download['1080p'] ||
            download['720p'] ||
            download['480p'] ||
            download['360p'] ||
            download['240p'],
        );
      } else {
        const str = Object.values(movie)[0];
        const match =
          /^(?=(.*\[1080p\]|.*\[720p\]|.*\[480p\]|.*\[360p\]|.*\[240p\]))\1([^,\s]+)/.exec(
            str,
          );
        if (match) {
          setCurrent(match[2]);
        }
      }
    }
  }, [currentEpisode, current, movie]);

  return (
    <>
      <div className="header">
        <div className="container">
          <button className="back" onClick={() => setIsSearch(false)}>
            <ArrowIcon /> <span>Назад</span>
          </button>
        </div>
      </div>
      <div className="container">
        <div className="content">
          {loading || typeof current === 'undefined' ? (
            <h3>Загрузка...</h3>
          ) : (
            <>
              {isObjectNested(movie) ? (
                <ItemList
                  items={movie[0]}
                  current={currentSeason}
                  itemAction={updateSeason}
                />
              ) : null}
              <div className="video">
                <video
                  width="100%"
                  height="100%"
                  controls
                  src={current}
                ></video>
              </div>
              {isObjectNested(movie) ? (
                <ItemList
                  items={movie[0][currentSeason]['folder']}
                  current={currentEpisode}
                  itemAction={updateEpisode}
                />
              ) : null}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Movie;
