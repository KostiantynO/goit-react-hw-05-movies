import styled from 'styled-components';

export const SearchbarStyled = styled.header`
  position: sticky;
  top: 0;
  left: 0;

  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 64px;
  padding: 12px 24px;
  border-radius: 4px;

  color: #fff;
  background: linear-gradient(180deg, rgba(33, 150, 243, 0.21), transparent);
`;

export const SearchFormStyled = styled.form`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background: none;
  border-radius: 3px;

  :hover,
  :focus-within {
    input:not(:disabled) {
      box-shadow: 0.21rem 0.21rem 0.35rem 0.03rem rgb(21 21 21 / 50%);
    }
  }

  .Wrapper {
    position: relative;
  }
`;

export const SearchFormButtonStyled = styled.button`
  display: inline-block;
  position: absolute;
  top: 50%;
  right: 4px;

  width: 48px;
  height: 48px;
  border: 0;

  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;

  transform: translateY(-50%);

  :hover {
    opacity: 1;
  }
`;

export const SearchFormButtonSpanStyled = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  clip-path: inset(50%);
  border: 0;
`;

export const SearchFormLabelStyled = styled.label`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const SearchFormInputStyled = styled.input`
  display: inline-block;
  padding: 4px 12px 8px;
  font-family: inherit;
  font-size: clamp(1.7rem, 2.1vw, 2.1rem);
  font-weight: 500;
  background: 0 0/300% 200% radial-gradient(circle at top left, #fff, #ddd);
  border: 1px solid rgba(21, 21, 21, 0.1);
  border-radius: 0.5rem;
  outline: none;
  box-shadow: 0.9rem 0.9rem 1rem 0.2rem rgb(21 21 21 / 50%);

  transition: var(--time) var(--cubic);
  transition-property: color, box-shadow;

  :hover:not(:disabled) {
    box-shadow: 0.21rem 0.21rem 0.35rem 0.03rem rgb(21 21 21 / 50%);
  }

  :focus {
    border-color: var(--color-accent);
    box-shadow: 0.1rem 0.1rem 0.1rem 0.21rem rgb(135 198 248 / 70%);
  }

  ::placeholder {
    font: inherit;
    font-size: clamp(1.7rem, 2.1vw, 2.1rem);
  }
`;
