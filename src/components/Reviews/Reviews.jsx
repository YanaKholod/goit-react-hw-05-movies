import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'api';
import { Styled } from './StyledReviews';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const { results } = await fetchMovieReviews(movieId);
        setReviews(results);
      } catch (error) {
        console.log(error);
      }
    };

    fetchReviews();
  }, [movieId]);

  return (
    <Styled.Wrapper>
      <Styled.Header>Reviews</Styled.Header>

      {reviews.length ? (
        <Styled.List className="reviews-container">
          {reviews.map(review => (
            <Styled.ListItem className="review-card" key={review.id}>
              <Styled.Author>Author: {review.author}</Styled.Author>
              <Styled.Review>{review.content}</Styled.Review>
            </Styled.ListItem>
          ))}
        </Styled.List>
      ) : (
        <Styled.NoText>
          We don't have any reviews for this movie yet.
        </Styled.NoText>
      )}
    </Styled.Wrapper>
  );
};

export default Reviews;
