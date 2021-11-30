export const SHOW_MODAL = 'SHOW_MODAL';
export const CREATE_MOVIE = 'CREATE_MOVIE';
export const SET_MOVIES = 'SET_MOVIES';
export const DELETE_MOVIE = 'DELETE_MOVIE';
export const INFO_ABOUT_FILM = 'INFO_ABOUT_FILM';
export const SHOW_LIST = 'SHOW_LIST';
export const SET_TITLE = 'SET_TITLE';
export const SET_YEAR = 'SET_YEAR';
export const SET_FORMAT = 'SET_FORMAT';
export const SET_ACTORS = 'SET_ACTORS';
export const SET_FILE = 'SET_FILE';
export const RESET_FIELDS = 'RESET_FIELDS';

const initialState = {
  movies: [],
  infoAboutMovies: {},
  movieFormat: [
    {
      format: 'DVD',
    },
    { format: 'VHS' },
    { format: 'Blu-Ray' },
  ],
  title: '',
  year: null,
  actors: [''],
  showModal: false,
  infoAboutFilm: false,
  showList: false,
  file: null,
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_MOVIE:
      return {
        ...state,
        ...action.payload,
      };
    case SET_MOVIES:
      return {
        ...state,
        movies: action.movies,
      };
    case DELETE_MOVIE: {
      const { [action.id]: _, ...newInfoAboutMovies } = state.infoAboutMovies;
      return {
        ...state,
        movies: state.movies.filter((movie) => movie.id !== action.id),
        infoAboutMovies: newInfoAboutMovies,
      };
    }
    case SHOW_MODAL:
      return {
        ...state,
        showModal: !state.showModal,
      };
    case SHOW_LIST:
      return {
        ...state,
        showList: !state.showList,
      };
    case INFO_ABOUT_FILM: {
      return {
        ...state,
        infoAboutFilm: !state.infoAboutFilm,
        infoAboutMovies: {
          ...state.infoAboutMovies,
          [action.infoAboutCurrentMovie.id]:
            action.infoAboutCurrentMovie.actors,
        },
      };
    }
    case RESET_FIELDS: {
      return {
        ...state,
        title: '',
        year: null,
        actors: [],
      };
    }
    case SET_FILE:
      return {
        ...state,
        file: action.file,
      };
    case SET_ACTORS:
      return {
        ...state,
        actors: [action.actors],
      };
    case SET_TITLE:
      return {
        ...state,
        title: action.title,
      };
    case SET_YEAR:
      return {
        ...state,
        year: action.year,
      };
    case SET_FORMAT:
      return {
        ...state,
        format: action.format,
      };
    default:
      return state;
  }
};

export default movieReducer;
