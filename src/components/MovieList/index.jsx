import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getShowList } from '../../redux/action/movie';
import style from './style.module.css';
import MovieItem from './movieItem';

const MovieList = ({
  searchByActorsQ,
  searchByNameQ,
  setSearchByNameQ,
  setSearchByActorsQ,
}) => {
  const dispatch = useDispatch();
  const { showList, movies } = useSelector((state) => state.movie);
  return (
    <div className={style.wrapper}>
      <button
        onClick={() => dispatch(getShowList())}
        className={style.showList}
      >
        Show list of movies
      </button>
      {showList && (
        <input
          value={searchByNameQ}
          onChange={(e) => setSearchByNameQ(e.target.value)}
          className={style.searchByName}
          type="text"
          placeholder="Search by title"
        />
      )}
      {showList && (
        <input
          value={searchByActorsQ}
          onChange={(e) => {
            setSearchByActorsQ(e.target.value);
          }}
          className={style.searchByName}
          type="text"
          placeholder="Search by actors"
        />
      )}
      <div className={style.container}>
        {showList &&
          movies.map((movie) => <MovieItem key={movie.id} movie={movie} />)}
      </div>
      {!movies.length && showList ? <div>Nothing to found..</div> : null}
    </div>
  );
};

export default MovieList;
