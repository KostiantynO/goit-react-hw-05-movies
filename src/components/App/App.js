import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { chunk } from 'utils';
import { Layout } from 'components';
import { AppStyled } from './App.styled';

const HomePage = chunk('HomePage');
const MoviesPage = chunk('MoviesPage');
const MovieDetailsPage = chunk('MovieDetailsPage');
const NotFound = chunk('NotFound');
const Cast = chunk('Cast', true);
const Reviews = chunk('Reviews', true);

export const App = () => {
  return (
    <AppStyled>
      <Suspense fallback="">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="movies" element={<MoviesPage />} />
            <Route path="movies/:movieId/*" element={<MovieDetailsPage />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <ToastContainer autoClose={3000} />
    </AppStyled>
  );
};
