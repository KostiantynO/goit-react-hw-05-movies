import styled from 'styled-components';
import { PlaceholderIcon } from 'images';
import { GoChevronLeft } from 'react-icons/go';

export const MovieDetailsPageStyled = styled.div`
  position: relative;

  .FlexContainer {
    display: flex;
    margin-bottom: 20px;

    @media screen and (max-width: 767px) {
      flex-wrap: wrap;
      gap: 20px;
    }

    @media screen and (min-width: 768px) {
      gap: 32px;
    }
  }

  color: white;

  .FlexContainerColumn {
    display: flex;
    flex-direction: column;
    gap: 20px;

    @media screen and (min-width: 768px) {
      gap: 32px;
    }
  }

  .AdditionalInfo {
    display: flex;
    gap: 20px;
    padding: 12px;

    color: #eee;
    background: linear-gradient(to right, rgba(0, 0, 0, 0.5), transparent);
    border-radius: 8px 16px 16px 8px;

    ul {
      display: flex;
      gap: 12px;
    }
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;

export const PlaceholderSvg = styled(PlaceholderIcon)`
  width: 121px;
  height: 121px;
  fill: white;
`;

export const MovieImage = styled.img`
  margin: 0 auto;
  border-radius: 12px;
`;

export const ArrowLeft = styled(GoChevronLeft)`
  width: 20px;
  height: 20px;
`;

export const GoBack = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 8px 16px 8px 8px;
  margin-bottom: 20px;
  border-radius: 8px;
  box-shadow: 2px 3px 4px 1px rgba(33, 33, 33, 0.21);
`;
