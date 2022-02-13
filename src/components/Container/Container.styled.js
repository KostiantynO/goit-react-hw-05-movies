import styled from 'styled-components';

export const ContainerStyled = styled.div`
  max-width: 320px;
  padding: 0 16px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    max-width: 768px;
  }

  @media screen and (min-width: 1200px) {
    max-width: 1200px;
  }
`;
