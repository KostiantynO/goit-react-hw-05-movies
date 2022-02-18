import { useState, useEffect, Suspense } from 'react';
import { Outlet, useLocation, useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { fetchSearchMovies } from 'apis/tmdb-api';
import { Status } from 'utils';
import { Container, Searchbar, MoviesList, Section } from 'components';
import { GoBackLink } from './MoviesPage.styled';
const { IDLE, PENDING, RESOLVED, REJECTED } = Status;

export const MoviesPage = () => {
  const [searchMovies, setSearchMovies] = useState(null);
  const [status, setStatus] = useState(IDLE);
  const [error, setError] = useState(null);
  const [page] = useState(1);

  const location = useLocation();
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query');

  useEffect(() => {
    if (!query) return;

    const getMovies = async () => {
      setStatus(PENDING);
      try {
        const newSearchMovies = await fetchSearchMovies(query, page);
        if (!newSearchMovies?.results?.length) {
          toast(`No results for ${query}`);
        }

        setSearchMovies(newSearchMovies);
        setStatus(RESOLVED);
      } catch (error) {
        toast(`Error while fetching ${query}. Please try another search`);
        setError(error);
        setStatus(REJECTED);
      }
    };

    getMovies();
  }, [page, query]);

  useEffect(() => {
    return () => {
      // setSearchMovies(null);
      setError(null);
    };
  }, []);

  const hasRequestMovies = searchMovies?.results?.length > 0;
  const goBackURL = location?.state?.from ?? '/';

  return (
    <div>
      <Container>
        <Searchbar status={status} />

        <GoBackLink to={goBackURL}>&lArr; Go back</GoBackLink>

        {!error && (
          <Section>
            {hasRequestMovies && <MoviesList items={searchMovies.results} />}
          </Section>
        )}
      </Container>

      <Suspense fallback="">
        <Outlet />
      </Suspense>
    </div>
  );
};
