// React import
import React from 'react';

//Component import
import Navbar from './Navbar';
import Search from './Search';
import Content from './Content';
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
`;

export default Body;
