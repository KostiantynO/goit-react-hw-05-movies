/*
https://api.themoviedb.org/3/configuration?api_key=0bd610b1a3557ac4e7f9b5501edcfef4
*/

const getConfig = async () => {
  blabla;
};

const fetchMovies = async (query, page) => {
  const baseURL = 'https://api.themoviedb.org/3/';
  const MOVIE_API_KEY = '0bd610b1a3557ac4e7f9b5501edcfef4';

  const params = new URLSearchParams({
    q: query,
    api_key: MOVIE_API_KEY,
  });

  const url = `${baseURL}?${params}`;

  const res = await fetch(url);

  return !res.ok
    ? Promise.reject(new Error(`No images for query ${query}`))
    : res.json();
};

const imagesComplete = async () =>
  await Promise.all(
    Array.from(document.images)
      .filter(img => !img.complete)
      .map(img => new Promise(res => (img.onload = img.onerror = res))),
  );

export const API = { fetchMovies, imagesComplete };
