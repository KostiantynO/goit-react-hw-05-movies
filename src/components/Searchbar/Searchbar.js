import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
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

export const Searchbar = ({ status }) => {
  const [query, setQuery] = useState('');
  const [, setSearchParams] = useSearchParams();

  const inputQueryChange = e => {
    setQuery(e.target.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();
    const newQuery = query.trim();

    if (newQuery === '') {
      setSearchParams({});
      return toast.error('Please enter search query');
    }

    setSearchParams({ query: newQuery });
    setQuery('');
  };

  return (
    <SearchbarStyled>
      <SearchFormStyled onSubmit={handleSubmit}>
        <SearchFormLabelStyled>
          <SearchFormInputStyled
            name="query"
            value={query} // searchParams.get('query') || ''
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
