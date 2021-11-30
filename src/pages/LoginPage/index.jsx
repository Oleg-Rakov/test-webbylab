import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getLogin, getPassword, getAuth } from '../../redux/auth-reducer';
import style from './style.module.css';

const LoginPage = () => {
  const dispatch = useDispatch();
  const { login, password } = useSelector((state) => state.auth);
  return (
    <div className={style.container}>
      <h1>Login</h1>
      <div>
        <input
          onChange={(e) => dispatch(getLogin(e.currentTarget.value))}
          type="text"
          placeholder="Email"
        />
        <input
          onChange={(e) => dispatch(getPassword(e.currentTarget.value))}
          type="password"
          placeholder="Password"
        />
      </div>
      <NavLink onClick={() => dispatch(getAuth(login, password))} to="/movies">
        Login
      </NavLink>
    </div>
  );
};

export default LoginPage;
