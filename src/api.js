const baseURL = 'https://api.themoviedb.org';
const API_KEY = '28027c59bdca8e7ee28a28ecaf4d25ca';

export const fetchTrendMovies = async () => {
  const response = await fetch(
    `${baseURL}/3/trending/movie/day?api_key=${API_KEY}`
  );
  const data = await response.json();

  return data;
};

export const fetchMovieByName = async query => {
  const response = await fetch(
    `${baseURL}/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
  );
  const data = await response.json();

  return data;
};

export const fetchMovieById = async movieId => {
  const response = await fetch(
    `${baseURL}/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`
  );
  const data = await response.json();

  return data;
};
export const fetchMovieCast = async movieId => {
  const response = await fetch(
    `${baseURL}/3/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
  );
  const data = await response.json();

  return data;
};

export const fetchMovieReviews = async movieId => {
  const response = await fetch(
    `${baseURL}/3/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );
  const data = await response.json();

  return data;
};
