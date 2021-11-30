import { authAPI } from '../api/api';

const IS_AUTH = 'IS_AUTH';
const SET_LOGIN = 'SET_LOGIN';
const SET_PASSWORD = 'SET_PASSWORD';

const initialState = {
  isAuth: false,
  login: '',
  password: '',
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOGIN:
      return {
        ...state,
        login: action.login,
      };
    case SET_PASSWORD:
      return {
        ...state,
        password: action.password,
      };
    case IS_AUTH:
      return {
        ...state,
        isAuth: action.isAuth,
      };
    default:
      return state;
  }
};

export const setLogin = (login) => ({
  type: SET_LOGIN,
  login,
});

export const setPassword = (password) => ({
  type: SET_PASSWORD,
  password,
});

export const setAuth = (isAuth) => ({
  type: IS_AUTH,
  isAuth,
});

export const getLogin = (login) => {
  return async (dispatch) => {
    dispatch(setLogin(login));
  };
};

export const getPassword = (password) => {
  return async (dispatch) => {
    dispatch(setPassword(password));
  };
};

export const getAuth = (email, password) => {
  return async (dispatch) => {
    const response = await authAPI.login(email, password);
    if (response.data.status === 1) {
      dispatch(setAuth(true));
      localStorage.setItem('token', response.data.token);
    }
  };
};

export default authReducer;
