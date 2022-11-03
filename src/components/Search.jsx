// React import
import React from 'react';

// Redux import
import { searchAction } from '../redux/modules/ListSlice';

// Package import
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

//Shared import
import { SearchDelete, SearchImg } from '../shared';

const Search = () => {
  const dispatch = useDispatch();
  const { searchWord } = useSelector((state) => state.list);

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
          value={searchWord}
          onChange={onChangeHandler}
        />
        {searchWord === '' ? (
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
