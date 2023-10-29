import React, { useState } from 'react';

import Movie from '@components/Movie/Movie';
import Search from '@components/Search/Search';

const Home = () => {
  const [isSearch, setIsSearch] = useState(false);

  return isSearch ? (
    <Movie setIsSearch={setIsSearch} />
  ) : (
    <Search setIsSearch={setIsSearch} />
  );
};

export default Home;
