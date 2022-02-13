import styled from 'styled-components';

export const CastStyled = styled.div``;

export const CastList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px 4px;

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media screen and (min-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  p {
    color: #eee;
    background: linear-gradient(to right, rgba(0, 0, 0, 0.5), transparent);
    border-radius: 8px 16px 16px 8px;
  }

  img {
    border-radius: 12px;
  }
`;
