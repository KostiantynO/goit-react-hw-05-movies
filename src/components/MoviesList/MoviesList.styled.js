import styled from 'styled-components';

export const MoviesListStyled = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;

  margin: 0 auto;
  list-style: none;

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (min-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;
