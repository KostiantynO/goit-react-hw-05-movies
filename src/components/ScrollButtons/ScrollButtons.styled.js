import styled from 'styled-components';
import { GoChevronUp, GoChevronDown } from 'react-icons/go';

export const ScrollButtonsStyled = styled.div`
  .ScrollButtons {
    position: sticky;
    right: 20px;
    bottom: 64px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 8px;
    max-width: 40px;
    margin-left: auto;

    > button {
      display: flex;
      align-items: center;
      justify-content: center;
      background: none;
      border: none;
      padding: 8px;
      border-radius: 8px;

      box-shadow: 2px 3px 4px 1px rgba(33, 33, 33, 0.21);
      transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
      transition-property: color, box-shadow;

      :hover,
      :focus {
        color: tomato;
      }
    }
  }
`;

export const ArrowTop = styled(GoChevronUp)`
  width: 20px;
  height: 20px;
`;

export const ArrowBottom = styled(GoChevronDown)`
  width: 20px;
  height: 20px;
`;
