// React import
import React, { useEffect } from 'react';

// Package import
import styled from 'styled-components';

//Shared import
import { SearchDelete, SearchImg } from '../shared';
import { useDispatch } from 'react-redux';
import { searchAction } from '../redux/modules/SearchSlice';
import { useSelector } from 'react-redux';

const Search = () => {
  const dispatch = useDispatch();
  const searchData = useSelector((state) => state.search.searchList);

  const onChangeHandler = (e) => {
    dispatch(searchAction(e.target.value));
  };

  const reset = () => {
    dispatch(searchAction(''));
  };

  return (
    <SearchWrap>
      <SearchContainer>
        <div>
          <SearchImg />
        </div>
        <input
          type='text'
          placeholder='검색어를 입력하세요'
          autoFocus
          value={searchData}
          onChange={onChangeHandler}
        />
        {searchData === '' ? (
          <></>
        ) : (
          <SearchDelete onClick={() => reset()} style={{ cursor: 'pointer' }} />
        )}
      </SearchContainer>
    </SearchWrap>
  );
};

const SearchWrap = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;
const SearchContainer = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${(props) => props.theme.colors.Gray1};
  border-radius: 5px;

  width: 310px;
  height: 30px;
  padding: 10px 20px;
  gap: 10px;

  :hover {
    border: 1px solid ${(props) => props.theme.colors.Blue};
  }

  div {
    display: flex;
    svg {
      width: 15px;
    }
  }
  input {
    width: 100%;
    border: none;
    &:focus {
      outline: none;
    }
  }
`;

export default Search;
