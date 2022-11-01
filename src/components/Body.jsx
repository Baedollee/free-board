// React import
import React from 'react';

//Component import
import Navbar from './Navbar';
import Search from './Search';
import Content from './Content';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { a_contentList } from '../redux/modules/ListSlice';

const Body = () => {
  const url = 'https://recruit-api.yonple.com/recruit/652179';
  const dispatch = useDispatch();
  // const data = useSelector((state) => state.list.item);

  const checked = {
    a: false,
    b: false,
  };

  const [check, setCheck] = useState(checked);
  const [a_checked, setA_checked] = useState(true);
  const [b_checked, setB_checked] = useState(false);

  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`${url}/a-posts`)
      .then((response) => {
        setData(...data, response.data);
      })
      .catch((error) => console.log(error.response));
    // dispatch(a_contentList());
  }, []);
  console.log(data);

  return (
    <BodyWrap>
      <Search />
      <Navbar
        a_checked={a_checked}
        setA_checked={setA_checked}
        b_checked={b_checked}
        setB_checked={setB_checked}
        check={check}
        setCheck={setCheck}
      />
      <Content a_checked={a_checked} b_checked={b_checked} data={data} />
    </BodyWrap>
  );
};

const BodyWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

export default Body;
