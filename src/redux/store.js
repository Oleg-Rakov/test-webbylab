import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunkMiddleWare from 'redux-thunk';
import authReducer from './auth-reducer';
import movieReducer from './movie-reducer';

const reducers = combineReducers({
  movie: movieReducer,
  auth: authReducer,
});

const store = createStore(reducers, applyMiddleware(thunkMiddleWare));
window.store = store;

export default store;
