import React, { useState } from 'react';

import { SearchIcon } from '@icons';
import { fetchData } from '@redux/actions/moviesAction';
import '@components/Search/style.css';
import { useDispatch } from 'react-redux';

const Search = ({ setIsSearch }) => {
  const dispatch = useDispatch();
  const [id, setId] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    if (!id) return;

    dispatch(fetchData(id));

    setIsSearch(true);
  };

  return (
    <div className="container">
      <div className="page">
        <div className="title">
          <h1>
            <span>Киномания</span> — просмотр фильмов и сериалов.
          </h1>
          <p>
            Смотрите фильмы и сериалы без прерывания рекламными роликами по
            КиноПоиск ID.
          </p>
        </div>
        <form className="form" method="post" onSubmit={e => handleSubmit(e)}>
          <div className="icon">
            <SearchIcon />
          </div>
          <input
            type="text"
            value={id}
            onChange={e => setId(e.target.value)}
            placeholder="Укажите КиноПоиск ID"
          />
        </form>
      </div>
    </div>
  );
};

export default Search;
