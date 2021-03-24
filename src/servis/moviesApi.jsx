import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

axios.defaults.params = {
  api_key: '79121d9cf6a0bcf9a51dd363b9565e52',
};
export const getTrending = () => {
  return axios.get(`/trending/movie/day`);
};

export const getApiADetails = movieId => {
  return axios.get(`/movie/${movieId}`);
};

export const getActors = movieId => {
  return axios.get(`/movie/${movieId}/credits`);
};

export const getSearch = movie => {
  return axios.get(`/search/movie?query=${movie}`);
};

export const getReviews = movieId => {
  return axios.get(`/movie/${movieId}/reviews`);
};
