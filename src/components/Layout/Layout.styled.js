import { NavLink as LinkToStyle } from 'react-router-dom';
import styled from 'styled-components';

export const MainNav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;

export const Header = styled.header`
  padding: 12px 0;
`;

export const NavLink = styled(LinkToStyle)`
  position: relative;
  transition: color var(--time) var(--cubic);

  ::after {
    content: '';
    position: absolute;
    top: 100% + 8px;
    left: 0;

    display: block;
    width: 100%;
    height: 2px;

    background-color: #2196f3;
    border-radius: 4px;

    transition: transform var(--time) var(--cubic);
    transform: scaleX(0);
  }

  &.active {
    color: #2196f3;

    ::after {
      transform: scaleX(1);
    }
  }

  &:hover {
    color: #2156f0;
  }
`;
