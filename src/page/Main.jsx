// React import
import React, { useState } from 'react';

//Component import
import Header from '../components/Header';
import Body from '../components/Body';

// Package import
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { a_contentList, b_contentList } from '../redux/modules/ListSlice';

const Main = () => {
  const dispatch = useDispatch();
  const {
    item: loading,
    followingItem,
    type,
  } = useSelector((state) => state.list);

  const handleScroll = (e) => {
    let scrollTopHandler = e.target.scrollTop;
    let clientHeightHandler = e.target.clientHeight;
    let scrollHeightHandler = e.target.scrollHeight;

    if (scrollHeightHandler - clientHeightHandler - scrollTopHandler - 30 < 0) {
      if (!loading) {
        if (followingItem) {
          if (type === 'a') {
            dispatch(a_contentList());
          } else {
            dispatch(b_contentList());
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
