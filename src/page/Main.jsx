// React import
import React from 'react';

//Component import
import Header from '../components/Header';
import Body from '../components/Body';

// Redux import
import {
  a_contentList,
  a_searchDataList,
  b_searchDataList,
  b_contentList,
} from '../redux/modules/ListSlice';

// Package import
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

const Main = () => {
  const dispatch = useDispatch();
  const { itemList, followingItem, type, loading, searchWord } = useSelector(
    (state) => state.list
  );

  const handleScroll = (e) => {
    let scrollTopHandler = e.target.scrollTop;
    let clientHeightHandler = e.target.clientHeight;
    let scrollHeightHandler = e.target.scrollHeight;

    if (scrollHeightHandler - clientHeightHandler - scrollTopHandler - 50 < 0) {
      if (searchWord.length === 0) {
        if (itemList) {
          if (followingItem) {
            if (!loading) {
              if (type === 'a') {
                dispatch(a_contentList());
              } else {
                dispatch(b_contentList());
              }
            }
          }
        }
      } else {
        if (itemList) {
          if (followingItem) {
            if (!loading) {
              if (type === 'a') {
                dispatch(a_searchDataList(searchWord));
              } else {
                dispatch(b_searchDataList(searchWord));
              }
            }
          }
        }
      }
    }
  };

  return (
    <MainWrap onScroll={handleScroll}>
      <Header />
      <Body />
    </MainWrap>
  );
};

const MainWrap = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
  height: 100vh;
  width: 100%;
`;

export default Main;
