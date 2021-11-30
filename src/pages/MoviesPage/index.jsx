import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import CreateFilm from '../../components/CreateFilm';
import { getMovies } from '../../redux/action/movie';
import MovieList from '../../components/MovieList';

function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);
  return debouncedValue;
}

const MoviePage = () => {
  const dispatch = useDispatch();
  const { isAuth } = useSelector((state) => state.auth);

  const [searchByActorsQ, setSearchByActorsQ] = useState('');
  const [searchByNameQ, setSearchByNameQ] = useState('');
  const sName = useDebounce(searchByNameQ, 800);
  const sActor = useDebounce(searchByActorsQ, 800);

  useEffect(() => {
    dispatch(getMovies(sActor, sName));
  }, [sName, sActor]);

  return (
    <>
      {isAuth || localStorage.getItem('token') ? (
        <>
          <CreateFilm />
          <MovieList
            searchByActorsQ={searchByActorsQ}
            searchByNameQ={searchByNameQ}
            setSearchByNameQ={setSearchByNameQ}
            setSearchByActorsQ={setSearchByActorsQ}
          />
        </>
      ) : (
        <NavLink to="/">Authorization is failed. Go to Login please</NavLink>
      )}
    </>
  );
};

export default MoviePage;
