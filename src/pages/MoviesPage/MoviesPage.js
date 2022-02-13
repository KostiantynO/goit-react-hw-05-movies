import { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { fetchSearchMovies } from 'apis/tmdb-api';
import { toast } from 'react-toastify';
import { Container, Searchbar, MoviesList, Section } from 'components';
import { Status } from 'utils';
import { GoBackLink } from './MoviesPage.styled';
const { IDLE, PENDING, RESOLVED, REJECTED } = Status;

export const MoviesPage = () => {
  const [searchMovies, setSearchMovies] = useState(null);
  const [query, setQuery] = useState('');
  const [status, setStatus] = useState(IDLE);
  const [error, setError] = useState(null);
  const [page] = useState(1);

  const location = useLocation();
  const searchQuery = new URLSearchParams(location.search).get('query');

  useEffect(() => {
    if (query === '') {
      setSearchMovies(null);
      setStatus(IDLE);
      setError(null);
      return;
    }

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
  }, [location, page, query, searchQuery, setStatus]);

  useEffect(() => {
    return () => {
      setSearchMovies(null);
      console.log('MoviesPage UNmounted');
    };
  }, []);

  const hasRequestMovies = searchMovies?.results?.length > 0;
  const goBackURL = location?.state?.from ?? '/';

  return (
    <div>
      <Container>
        <Searchbar onSubmit={setQuery} status={status} />

        <GoBackLink to={goBackURL}>&lArr; Go back</GoBackLink>

        {!error && (
          <Section>
            {hasRequestMovies && <MoviesList items={searchMovies.results} />}
          </Section>
        )}
      </Container>

      <Outlet />
    </div>
  );
};
