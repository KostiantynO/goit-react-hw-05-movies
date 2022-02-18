import { scrollBot, scrollTop } from 'utils';
import {
  ArrowBottom,
  ArrowTop,
  ScrollButtonsStyled,
} from './ScrollButtons.styled';

export const ScrollButtons = () => {
  return (
    <ScrollButtonsStyled>
      <button type="button" onClick={scrollTop}>
        <ArrowTop />
      </button>

      <button type="button" onClick={scrollBot}>
        <ArrowBottom />
      </button>
    </ScrollButtonsStyled>
  );
};
