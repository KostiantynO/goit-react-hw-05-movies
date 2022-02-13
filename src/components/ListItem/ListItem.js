import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Link, ListItemStyled } from './ListItem.styled';
import { ScoreIcon } from 'components';
import { makeUrl } from 'utils';

export const ListItem = ({
  item: { id, title, name, poster_path, vote_average },
}) => {
  const location = useLocation();
  const currentState = { from: location };
  const url = '/movies';

  return (
    <ListItemStyled>
      <Link to={`${url}/${id}`} state={currentState}>
        {poster_path && (
          <img src={makeUrl(poster_path, 'poster', 'sl')} alt={'poster'} />
        )}

        <b>{title || name}</b>

        <ScoreIcon score={vote_average} size={40} />
      </Link>
    </ListItemStyled>
  );
};

ListItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string,
    name: PropTypes.string,
    poster_path: PropTypes.string,
    vote_average: PropTypes.number,
  }),
};
