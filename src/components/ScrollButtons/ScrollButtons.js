import { scrollBot, scrollTop } from 'utils';
import { ArrowBottom, ArrowTop } from './ScrollButtons.styled';

export const ScrollButtons = () => {
  return (
    <div className="ScrollButtons">
      <button type="button" onClick={scrollTop}>
        <ArrowTop />
      </button>

      <button type="button" onClick={scrollBot}>
        <ArrowBottom />
      </button>
    </div>
  );
};
