import React, { Suspense, useState, useEffect } from 'react';
import { useParams, Outlet, useLocation, Link } from 'react-router-dom';
import { fetchMovieById } from 'api';
import MovieCard from 'components/MovieCard/MovieCard';
import LoadingPoints from 'components/SharedLayout/LoadingPoints';
import { Styled } from './StyledMovieDetails';

const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const [selectedMovie, setSelectedMovie] = useState({});

  useEffect(() => {
    const fetchSelectedMovie = async movieId => {
      try {
        const movieData = await fetchMovieById(movieId);
        setSelectedMovie(movieData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchSelectedMovie(movieId);
  }, [movieId]);
  return (
    <main>
      <Styled.Wrapper>
        <Link to={location?.state?.from ?? '/'}>
          <Styled.Button type="button">Go back</Styled.Button>
        </Link>
        <MovieCard movie={selectedMovie} />
        <Suspense fallback={<LoadingPoints />}>
          <Outlet />
        </Suspense>
      </Styled.Wrapper>
    </main>
  );
};

export default MovieDetails;
