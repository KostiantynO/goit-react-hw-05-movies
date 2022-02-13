import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const MOVIE_API_KEY = '0bd610b1a3557ac4e7f9b5501edcfef4';
const key = `api_key=${MOVIE_API_KEY}`;
const censor = `&include_adult=false`;

const fetchOrError = async (url, query = '') => {
  const response = await axios.get(url);

  return !response?.data
    ? Promise.reject(new Error(`No results for query: '${query}'`))
    : response.data;
};

export const fetchTrendingMovies = async (page = 1) =>
  await fetchOrError(`/trending/movie/day?${key}&page=${page}${censor}`);

export const fetchSearchMovies = async (query, page = 1) =>
  await fetchOrError(
    `/search/movie?query=${query}&${key}&page=${page}${censor}`
  );

export const fetchMovieDetails = async movieId =>
  await fetchOrError(`/movie/${movieId}?${key}`);

export const fetchMovieCredits = async movieId =>
  await fetchOrError(`/movie/${movieId}/credits?${key}`);

export const fetchMovieReviews = async (movieId, page = 1) =>
  await fetchOrError(`/movie/${movieId}/reviews?${key}&page=${page}`);
