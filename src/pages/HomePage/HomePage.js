import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { fetchTrendingMovies } from 'apis/tmdb-api';
import { Status } from 'utils';
import { Container, Section, MoviesList } from 'components';
import { Title } from './HomePage.styled';

const { IDLE, PENDING, RESOLVED, REJECTED } = Status;

export const HomePage = () => {
  const [trending, setTrending] = useState(null);
  const [status, setStatus] = useState(IDLE);
  const [page] = useState(1);

  useEffect(() => {
    const getTrending = async () => {
      try {
        setStatus(PENDING);
        const newTrendingDayMovies = await fetchTrendingMovies(page);
        setTrending(newTrendingDayMovies);
        setStatus(RESOLVED);
      } catch (error) {
        toast('No results, please try again');
        setStatus(REJECTED);
      }
    };
    getTrending();
  }, [page]);

  const hasTrendingMovies = trending?.results?.length > 0;
  const error = status === REJECTED;

  return (
    <Section className="HomePage">
      <Container>
        <Title>Trending today</Title>

        {!error && hasTrendingMovies && <MoviesList items={trending.results} />}
      </Container>
    </Section>
  );
};
