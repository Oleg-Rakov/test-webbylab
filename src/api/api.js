import * as axios from 'axios';

const token = localStorage.getItem('token');

const instance = axios.create({
  baseURL: 'http://localhost:8000/',
  headers: {
    authorization: `${token}`,
  },
});

export const movieAPI = {
  getMovieList(searchByActors, searchByName) {
    return instance.get(
      `api/v1/movies?sort=title&order=ASC&limit=60&offset=0${
        searchByActors ? `&actor=${searchByActors}` : ''
      }${searchByName ? `&title=${searchByName}` : ''}`
    );
  },
  createMovie(id, title, year, format, actors) {
    return instance.post(`api/v1/movies`, { id, title, year, format, actors });
  },
  getInfoAboutCurrentMovie(id) {
    return instance.get(`api/v1/movies/${id}`);
  },
  deleteMovie(id) {
    return instance.delete(`api/v1/movies/${id}`);
  },
  importFile(file) {
    const formData = new FormData();
    formData.append('movies', file);
    return instance.post(`api/v1/movies/import`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  },
};

export const authAPI = {
  login(email, password) {
    return instance.post(`api/v1/sessions`, { email, password });
  },
};
