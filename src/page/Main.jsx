// React import
import React from 'react';

//Component import
import Header from '../components/Header';
import Body from '../components/Body';

// Package import
import styled from 'styled-components';

const Main = () => {
  return (
    <MainWrap>
      <Header />
      <Body />
    </MainWrap>
  );
};

const MainWrap = styled.div`
  display: flex;
  flex-direction: column;
  padding: 35px;
`;

export default Main;
