import { SectionStyled } from './Section.styled';

export const Section = ({ bg, children }) => (
  <SectionStyled bg={bg}>{children}</SectionStyled>
);
