import styled from 'styled-components';

export const SectionStyled = styled.section`
  padding: 20px 0;

  ${({ bg }) =>
    bg &&
    `background: linear-gradient(to bottom, rgba(47,48,58,0.4), rgba(47,48,58,0.4)), center / cover no-repeat url(${bg})`};

  background-attachment: fixed;

  @media screen and (min-width: 768px) {
    padding: 32px 0;
  }
`;
