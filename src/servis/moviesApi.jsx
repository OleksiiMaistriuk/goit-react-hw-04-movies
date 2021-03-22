import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

axios.defaults.params = {
  api_key: '79121d9cf6a0bcf9a51dd363b9565e52',
};

export const getApiAllDay = () => {
  axios.get(`/all/day`).then(data => {
    console.log(data);
  });
};
export const getApiSearch = () => {
  axios.get(`/search/movie&page=1`).then(data => {
    console.log(data);
  });
};
export const getApiADetails = movieId => {
  axios.get(`/movie/${movieId}`).then(data => {
    console.log(data);
  });
};
export const getApiActors = movieId => {
  axios.get(`/movie/${movieId}/credits`).then(data => {
    console.log(data);
  });
};
export const getApiReviews = movieId => {
  axios.get(`/movie/${movieId}/reviews`).then(data => {
    console.log(data);
  });
};
