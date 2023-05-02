import React from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-hot-toast';
import { Styled } from 'components/MovieList/StyledMovieList';

export const SearchMovie = ({ onSubmit }) => {
  const handleSubmit = e => {
    e.preventDefault();

    const query = e.target.elements.query.value;
    if (!query) {
      toast.error('Please enter something');
      return;
    }

    onSubmit(query);
    e.target.reset();
  };
  return (
    <Styled.Form onSubmit={handleSubmit}>
      <Styled.Input type="text" placeholder="Search movies" />
      <Styled.Button type="submit">Search</Styled.Button>
    </Styled.Form>
  );
};

SearchMovie.propTypes = { onSubmit: PropTypes.func.isRequired };
