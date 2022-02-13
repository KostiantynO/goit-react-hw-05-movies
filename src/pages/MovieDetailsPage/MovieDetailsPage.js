import { useEffect, useState } from 'react';
// prettier-ignore
import { NavLink, Outlet, useLocation, useParams } from 'react-router-dom';
import { fetchMovieDetails } from 'apis/tmdb-api';
import { toast } from 'react-toastify';
import { makeUrl, Status } from 'utils';
import { Container, Section, ScoreIcon, ScrollButtons } from 'components';
// prettier-ignore
import { MovieDetailsPageStyled, ArrowLeft, MovieImage, PlaceholderSvg, TitleWrapper, GoBackLink } from './MovieDetailsPage.styled';

const { IDLE, PENDING, RESOLVED, REJECTED } = Status;

const INITIAL_STATE = Object.freeze({
  poster_path: '',
  backdrop_path: '',
  original_title: '',
  title: '',
  genres: [],
  vote_average: 0,
  overview: '',
  release_date: '',
});

export const MovieDetailsPage = () => {
  const [movieDetails, setMovieDetails] = useState({ ...INITIAL_STATE });
  const [status, setStatus] = useState(IDLE);
  const { movieId } = useParams();
  const location = useLocation();

  useEffect(() => {
    const getDetails = async () => {
      try {
        setStatus(PENDING);
        const newMovieDetails = await fetchMovieDetails(movieId);
        setMovieDetails(newMovieDetails);
        setStatus(RESOLVED);
      } catch (error) {
        toast('There is no details for the movie');
        setStatus(REJECTED);
      }
    };

    getDetails();
  }, [movieId]);

  const {
    poster_path,
    backdrop_path,
    original_title,
    title,
    genres,
    vote_average,
    overview,
    release_date,
  } = movieDetails;

  // const hasMovieDetails = movieDetails && Object.keys(movieDetails)?.length > 0;

  const genresNames =
    genres?.length > 0 ? genres.map(({ name }) => name).join(', ') : '';
  const releaseDate = `(${release_date?.slice(0, 4)})`;
  const goBackURL = location?.state?.from ?? '/movies';
  const error = status === REJECTED;

  return (
    <MovieDetailsPageStyled>
      <Section bg={makeUrl(backdrop_path, 'bg', 'lg')}>
        <Container>
          <GoBackLink to={goBackURL}>
            <ArrowLeft />
            <span>Go back</span>
          </GoBackLink>

          {!error && (
            <>
              <div className="FlexContainer">
                {poster_path ? (
                  <MovieImage
                    src={makeUrl(poster_path, 'poster', 'lg')}
                    alt={title || original_title || 'poster image'}
                  />
                ) : (
                  <PlaceholderSvg />
                )}

                <div className="FlexContainerColumn">
                  <TitleWrapper>
                    {vote_average && (
                      <ScoreIcon score={vote_average} size={40} />
                    )}
                    <h1>{title || original_title || 'Title'}</h1>
                    <span>{releaseDate}</span>
                  </TitleWrapper>

                  <div>
                    <h2>Overview</h2>
                    <p>{overview}</p>
                  </div>

                  <div>
                    <h3>Genres</h3>
                    <p>{genresNames}</p>
                  </div>
                </div>
              </div>

              <div className="AdditionalInfo">
                <h3>Additional information</h3>

                <ul>
                  <li>
                    <NavLink to="cast">Cast</NavLink>
                  </li>

                  <li>
                    <NavLink to="reviews">Review</NavLink>
                  </li>
                </ul>
              </div>
            </>
          )}
        </Container>

        <Outlet />
      </Section>

      <ScrollButtons />
    </MovieDetailsPageStyled>
  );
};
