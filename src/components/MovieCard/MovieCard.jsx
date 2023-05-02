import React from 'react';
import { useLocation } from 'react-router-dom';
import LoadingPoints from 'components/SharedLayout/LoadingPoints';
import PropTypes from 'prop-types';
import { Styled } from './StyledMovieCard';

const MovieCard = ({ movie }) => {
  const { title, release_date, poster_path, vote_average, overview, genres } =
    movie;
  const location = useLocation();
  const releaseDate = new Date(release_date);

  const releaseYear = isNaN(releaseDate)
    ? 'Unknown'
    : releaseDate.getFullYear();

  const posterUrl = poster_path
    ? `https://image.tmdb.org/t/p/w400/${poster_path}`
    : 'https://via.placeholder.com/400x600.png?text=Poster+Not+Available';

  const userScore = vote_average
    ? `${(vote_average * 10).toFixed(0)}%`
    : 'Not rated yet';

  if (!title) {
    return <LoadingPoints />;
  }

  return (
    <>
      <Styled.Wrapper>
        <Styled.Img src={posterUrl} alt={`${title} poster`} />

        <Styled.Info>
          <Styled.Name>
            {title ?? 'Unknown'} ({releaseYear})
          </Styled.Name>
          <Styled.InfoText>User Score: {userScore}</Styled.InfoText>
          <Styled.InfoText>
            <Styled.InfoTextBold>Overview:</Styled.InfoTextBold> {overview}
          </Styled.InfoText>
          {genres && genres.length > 0 && (
            <Styled.InfoText>
              <Styled.InfoTextBold>Genres:</Styled.InfoTextBold>
              {genres.map(genre => genre.name).join(', ')}
            </Styled.InfoText>
          )}
        </Styled.Info>
      </Styled.Wrapper>
      <Styled.MoreInfo>
        <Styled.MoreInfoHeader>Additional information</Styled.MoreInfoHeader>
        <Styled.List>
          <Styled.ListItem>
            <Styled.Link
              to="cast"
              state={{ from: location?.state?.from ?? '/' }}
            >
              Cast
            </Styled.Link>
          </Styled.ListItem>
          <Styled.ListItem>
            <Styled.Link
              to="reviews"
              state={{ from: location?.state?.from ?? '/' }}
            >
              Reviews
            </Styled.Link>
          </Styled.ListItem>
        </Styled.List>
      </Styled.MoreInfo>
    </>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    release_date: PropTypes.string,
    poster_path: PropTypes.string,
    vote_average: PropTypes.number,
    overview: PropTypes.string,
    genres: PropTypes.arrayOf(
      PropTypes.shape({ name: PropTypes.string.isRequired })
    ),
  }).isRequired,
};

export default MovieCard;
