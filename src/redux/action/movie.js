import { movieAPI } from '../../api/api';
import {
  CREATE_MOVIE,
  DELETE_MOVIE,
  INFO_ABOUT_FILM,
  RESET_FIELDS,
  SET_ACTORS,
  SET_FILE,
  SET_FORMAT,
  SET_MOVIES,
  SET_TITLE,
  SET_YEAR,
  SHOW_LIST,
  SHOW_MODAL,
} from '../movie-reducer';

export const setCreateMovie = (id, title, year, format, actors) => ({
  type: CREATE_MOVIE,
  payload: { id, title, year, format, actors },
});

export const setInfoAboutFilm = (infoAboutCurrentMovie) => ({
  type: INFO_ABOUT_FILM,
  infoAboutCurrentMovie,
});

export const setTitle = (title) => ({
  type: SET_TITLE,
  title,
});

export const setActors = (actors) => ({
  type: SET_ACTORS,
  actors,
});

export const setFile = (file) => ({
  type: SET_FILE,
  file,
});

export const setYear = (year) => ({
  type: SET_YEAR,
  year,
});

export const setFormat = (format) => ({
  type: SET_FORMAT,
  format,
});

export const setMovies = (movies) => ({
  type: SET_MOVIES,
  movies,
});

export const setDeleteMovie = (id) => ({
  type: DELETE_MOVIE,
  id,
});

export const setResetFields = () => ({
  type: RESET_FIELDS,
});

export const setShowModal = () => ({
  type: SHOW_MODAL,
});

export const setShowList = () => ({
  type: SHOW_LIST,
});

export const getMovies = (searchByActors, searchByName) => {
  return async (dispatch) => {
    const response = await movieAPI.getMovieList(searchByActors, searchByName);
    dispatch(setMovies(response.data.data || []));
  };
};

export const createMovie = (id, title, year, format, actors) => {
  return async (dispatch) => {
    const response = await movieAPI.createMovie(
      id,
      title,
      year,
      format,
      actors
    );
    if (response.statusText === 'OK') {
      const data = await movieAPI.getMovieList();
      dispatch(setMovies(data.data.data));
    }
  };
};

export const deleteMovie = (id) => {
  return async (dispatch) => {
    await movieAPI.deleteMovie(id);
    dispatch(setDeleteMovie(id));
  };
};

export const showInfoAboutFilm = (id) => {
  return async (dispatch) => {
    const response = await movieAPI.getInfoAboutCurrentMovie(id);
    dispatch(setInfoAboutFilm(response.data.data));
  };
};

export const getFile = (file) => {
  return async (dispatch) => {
    const response = await movieAPI.importFile(file);
    dispatch(setFile(file));
    dispatch(setMovies(response.data.data));
  };
};

export const getTitle = (title) => {
  return (dispatch) => {
    dispatch(setTitle(title));
  };
};

export const getYear = (year) => {
  return (dispatch) => {
    dispatch(setYear(year));
  };
};

export const getActors = (actors) => {
  return (dispatch) => {
    dispatch(setActors(actors));
  };
};

export const getFormat = (format) => {
  return (dispatch) => {
    dispatch(setFormat(format));
  };
};

export const resetFields = () => {
  return (dispatch) => {
    dispatch(setResetFields());
  };
};

export const showModal = () => {
  return (dispatch) => {
    dispatch(setShowModal());
  };
};

export const getShowList = () => {
  return (dispatch) => {
    dispatch(setShowList());
  };
};
