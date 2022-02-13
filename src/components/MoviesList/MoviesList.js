import PropTypes from 'prop-types';
import { ListItem } from 'components';
import { MoviesListStyled } from './MoviesList.styled';

export const MoviesList = ({ items = [] }) => (
  <MoviesListStyled>
    {items?.map(item => (
      <ListItem key={item.id} item={item} />
    ))}
  </MoviesListStyled>
);

MoviesList.protTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
};
