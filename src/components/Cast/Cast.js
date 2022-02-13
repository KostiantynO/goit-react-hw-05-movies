import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { fetchMovieCredits } from 'apis/tmdb-api';
import { makeUrl, scrollBottom } from 'utils';
import { Status } from 'utils';
import { PlaceholderIcon } from 'images';
import { Container } from 'components';
import { CastStyled, CastList } from './Cast.styled';

const { IDLE, PENDING, RESOLVED, REJECTED } = Status;

export const Cast = () => {
  const [movieCast, setMovieCast] = useState(null);
  const [status, setStatus] = useState(IDLE);
  const { movieId } = useParams();

  useEffect(() => {
    const getCast = async () => {
      try {
        setStatus(PENDING);
        const newMovieCast = await fetchMovieCredits(movieId);
        setMovieCast(newMovieCast);
        setStatus(RESOLVED);
      } catch (error) {
        toast('No results, please try again');
        setStatus(REJECTED);
      }
    };

    getCast();
  }, [movieId]);

  const hasMovieCast = movieCast && movieCast?.cast?.length > 0;

  scrollBottom(status);

  return (
    <CastStyled>
      <Container>
        {hasMovieCast ? (
          <CastList>
            {movieCast.cast.map(({ id, character, name, profile_path }) => (
              <li key={id}>
                {profile_path ? (
                  <img
                    width={121}
                    height="auto"
                    src={makeUrl(profile_path, 'profile', 'md')}
                    alt={name || 'actor image'}
                  />
                ) : (
                  <PlaceholderIcon width="121" height="121" fill="white" />
                )}

                <p>{name}</p>
                <p>Character: {character}</p>
              </li>
            ))}
          </CastList>
        ) : (
          <div>
            <p>There is no cast information for the movie</p>
          </div>
        )}
      </Container>
    </CastStyled>
  );
};
