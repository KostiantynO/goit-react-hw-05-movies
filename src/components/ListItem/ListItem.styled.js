import { Link as RouterLink } from 'react-router-dom';
import styled from 'styled-components';

export const ListItemStyled = styled.li`
  max-width: 320px;

  img {
    border-radius: 12px;
  }

  span i {
    font-size: 0.8rem;
    vertical-align: top;
  }
`;

export const Link = styled(RouterLink)`
  position: relative;

  display: flex;
  gap: 8px;
  align-items: center;
  text-decoration: none;
`;
