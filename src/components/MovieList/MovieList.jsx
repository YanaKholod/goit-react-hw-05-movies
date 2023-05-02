import React from 'react';
import PropTypes from 'prop-types';
import { Styled } from './StyledMovieList';

const MovieList = ({ trendingMovies }) => {
  return (
    <Styled.Section>
      <Styled.Title>Trending today</Styled.Title>
      <Styled.List>
        {trendingMovies.map(trendingMovie => (
          <Styled.ListItem key={trendingMovie.id}>
            <Styled.Link to={`/movies/${trendingMovie.id}`}>
              {trendingMovie.title}
            </Styled.Link>
          </Styled.ListItem>
        ))}
      </Styled.List>
    </Styled.Section>
  );
};
MovieList.propTypes = {
  trendingMovies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      release_date: PropTypes.string.isRequired,
      overview: PropTypes.string.isRequired,
      poster_path: PropTypes.string,
      vote_average: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default MovieList;
