// React import
import React from 'react';

//Component import
import Navbar from './Navbar';
import Search from './Search';
import Content from './Content';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { contentList } from '../redux/modules/ListSlice';

const Body = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.list.item);
  const [isCheck, setIsCheck] = useState(false);

  console.log(data);

  useEffect(() => {
    dispatch(contentList());
  }, []);

  return (
    <BodyWrap>
      <Search />
      <Navbar isCheck={isCheck} setIsCheck={setIsCheck} />
      <Content data={data} />
    </BodyWrap>
  );
};

const BodyWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

export default Body;
