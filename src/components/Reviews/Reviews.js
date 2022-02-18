import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { fetchMovieReviews } from 'apis/tmdb-api';
import { scrollBottom, Status } from 'utils';
import { Container } from 'components';

const { IDLE, PENDING, RESOLVED, REJECTED } = Status;

export const Reviews = () => {
  const [movieReviews, setMovieReviews] = useState(null);
  const [status, setStatus] = useState(IDLE);

  const { movieId } = useParams();

  useEffect(() => {
    const getReviews = async () => {
      try {
        setStatus(PENDING);
        const newMovieReviews = await fetchMovieReviews(movieId);
        setMovieReviews(newMovieReviews);
        setStatus(RESOLVED);
      } catch (error) {
        toast('No results, please try again');
        setStatus(REJECTED);
      }
    };

    getReviews();
  }, [movieId]);

  const hasMovieReviews = movieReviews?.results?.length > 0;

  scrollBottom(status);

  return (
    <Container id="reviews">
      {hasMovieReviews ? (
        <ul>
          {movieReviews.results.map(({ id, author, content }) => (
            <li key={id}>
              <b>Author: {author}</b>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <div>
          <p>There is no reviews for the movie</p>
        </div>
      )}
    </Container>
  );
};
