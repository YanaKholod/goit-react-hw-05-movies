import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from 'api';
import { Styled } from './StyledCast';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const { cast } = await fetchMovieCast(movieId);
        setCast(cast);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCast();
  }, [movieId]);
  return (
    <Styled.Wrapper>
      <Styled.CastHeader>Cast</Styled.CastHeader>
      {cast.length ? (
        <Styled.CastList>
          {cast.map(actor => (
            <Styled.CastItem className="cast-card" key={actor.id}>
              {actor.profile_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                  alt={`${actor.name} profile`}
                />
              ) : (
                <img
                  src={`https://via.placeholder.com/200x300?text=No+Image`}
                  alt={`${actor.name} profile`}
                />
              )}

              <Styled.CastInfo>
                <Styled.CastName>{actor.name}</Styled.CastName>
                <p>Character: {actor.character}</p>
              </Styled.CastInfo>
            </Styled.CastItem>
          ))}
        </Styled.CastList>
      ) : (
        <Styled.NoCastText>
          We don't have any information about the cast yet.
        </Styled.NoCastText>
      )}
    </Styled.Wrapper>
  );
};

export default Cast;
