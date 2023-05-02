import React, { useState, useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { fetchMovieByName } from 'api';
import { SearchMovie } from '../components/SearchMovies/SearchMovie';
import { Styled } from 'components/MovieList/StyledMovieList';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    const query = searchParams.get('query') ?? '';
    if (!query) return;

    const getMovie = async () => {
      try {
        const { results } = await fetchMovieByName(query);

        if (results.length === 0) {
          toast.dismiss();
          toast.error('No movies found');
          setMovies([]);
        } else {
          setMovies(results);
        }
      } catch (error) {
        toast.error(error.message);
        setMovies([]);
      }
    };

    getMovie();
  }, [searchParams]);

  const handleSubmit = query => {
    setSearchParams({ query });
  };

  return (
    <main>
      <Styled.Section>
        <Styled.Title>Movies Page</Styled.Title>
        <SearchMovie onSubmit={handleSubmit} />
        <Styled.List>
          {movies.map(movie => (
            <Styled.ListItem key={movie.id}>
              <Styled.Link
                to={`/movies/${movie.id}`}
                state={{ from: location }}
              >
                {movie.title}
              </Styled.Link>
            </Styled.ListItem>
          ))}
        </Styled.List>
      </Styled.Section>
    </main>
  );
};

export default Movies;
