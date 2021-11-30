import React, { useState } from 'react';
import { NotificationManager } from 'react-notifications';
import { useDispatch, useSelector } from 'react-redux';
import { deleteMovie, showInfoAboutFilm } from '../../redux/action/movie';
import style from './style.module.css';

const MovieItem = ({ movie }) => {
  const [isInfoVisible, setInfoVisible] = useState(null);
  const dispatch = useDispatch();
  const movieActors = useSelector(
    (state) => state.movie.infoAboutMovies[movie.id]
  );
  const showActors = !!movieActors;
  const actors = movieActors || [];
  return (
    <div className={style.item}>
      <span className={style.title}>{movie.title}</span>
      <span>Movie year: {movie.year}</span>
      <span className={style.format}>Movie format: {movie.format}</span>
      {isInfoVisible && showActors && (
        <>
          {actors.map((e, index) => {
            return (
              <span key={e.id}>
                {!index && 'Movie actors: '}
                {e.name}
              </span>
            );
          })}
        </>
      )}
      <button
        className={style.infoBtn}
        onClick={() => {
          if (isInfoVisible === null) {
            dispatch(showInfoAboutFilm(movie.id));
          }
          setInfoVisible((prev) => !Boolean(prev));
        }}
      >
        Show info about movie
      </button>
      <button
        className={style.deleteBtn}
        onClick={() => {
          dispatch(deleteMovie(movie.id));
          NotificationManager.success('Movie deleted successfully');
        }}
      >
        Delete movie
      </button>
    </div>
  );
};

export default MovieItem;
