import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import {
  SearchbarStyled,
  SearchFormStyled,
  SearchFormButtonStyled,
  SearchFormButtonSpanStyled,
  SearchFormInputStyled,
  SearchFormLabelStyled,
} from './Searchbar.styled';
import { Status } from 'utils';

const { PENDING } = Status;

export const Searchbar = ({ onSubmit, status }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const inputQueryChange = e => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const formSubmit = e => {
    e.preventDefault();
    const formQuery = searchQuery.trim();

    if (formQuery === '') {
      return toast.error('Please enter search query');
    }

    onSubmit(formQuery);
    setSearchQuery('');
  };

  return (
    <SearchbarStyled>
      <SearchFormStyled onSubmit={formSubmit}>
        <SearchFormLabelStyled>
          <SearchFormInputStyled
            name="searchQuery"
            value={searchQuery}
            onChange={inputQueryChange}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search movies"
          />
        </SearchFormLabelStyled>

        <SearchFormButtonStyled type="submit" disabled={status === PENDING}>
          <FaSearch />
          <SearchFormButtonSpanStyled>Search</SearchFormButtonSpanStyled>
        </SearchFormButtonStyled>
      </SearchFormStyled>
    </SearchbarStyled>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
  status: PropTypes.string,
};
