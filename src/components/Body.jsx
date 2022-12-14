// React import
import React from 'react';

//Component import
import Navbar from './Navbar';
import Search from './Search';
import Content from './Content';

// Package import
import styled from 'styled-components';

const Body = () => {
  return (
    <BodyWrap>
      <Search />
      <Navbar />
      <Content />
    </BodyWrap>
  );
};

const BodyWrap = styled.div`
  display: flex;
  flex-direction: column;
  padding: 35px 300px;
  @media (max-width: 1000px) {
    padding: 35px 100px;
  }
`;

export default Body;
