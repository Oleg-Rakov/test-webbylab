import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  createMovie,
  getActors,
  getFile,
  getFormat,
  getTitle,
  getYear,
  resetFields,
  showModal,
} from '../../redux/action/movie';
import style from './style.module.css';
import { NotificationManager } from 'react-notifications';

const CreateFilm = () => {
  const dispatch = useDispatch();
  const {
    showModal: modal,
    title,
    year,
    format,
    actors,
    movieFormat,
  } = useSelector((state) => state.movie);
  const applyFilm = () => {
    if (!title && !year && !format) {
      NotificationManager.error('Please fill out the form correctly');
    } else {
      NotificationManager.success('Movie added successfully');
    }

    dispatch(
      createMovie(
        Date.now(),
        title,
        year,
        format,
        actors[0].split(',').map((actor) => actor.trim())
      )
    );

    dispatch(resetFields());
  };
  return (
    <>
      <div className={style.container}>
        <button
          className={style.createBtn}
          onClick={() => dispatch(showModal())}
        >
          Create Movie
        </button>
        {modal && (
          <div className={style.wrapper}>
            <input
              value={title}
              onChange={(e) => dispatch(getTitle(e.target.value))}
              className={style.item}
              type="text"
              placeholder="Movie name"
            />
            <input
              value={year === null ? '' : year}
              onChange={(event) => {
                dispatch(getYear(event.target.value));
                return event.charCode >= 48 && event.charCode <= 57;
              }}
              className={style.item}
              type="number"
              placeholder="Movie year"
            />
            <select
              defaultValue="Choose the format movie"
              className={style.select}
              onChange={(e) => dispatch(getFormat(e.currentTarget.value))}
            >
              <option value="Choose the format movie" disabled hidden>
                Choose the format movie
              </option>
              {movieFormat.map((format) => {
                return (
                  <option key={format.format} value={format.value}>
                    {format.format}
                  </option>
                );
              })}
            </select>
            <input
              value={actors}
              onChange={(e) => dispatch(getActors(e.target.value))}
              className={style.item}
              type="text"
              placeholder="Movie actors"
            />
            <input
              onChange={() => {
                dispatch(getFile(document.getElementById('userfile').files[0]));
              }}
              id="userfile"
              type="file"
            />
            <button className={style.applyBtn} onClick={applyFilm}>
              Apply Movie
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CreateFilm;
