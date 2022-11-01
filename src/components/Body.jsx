// React import
import React from 'react';

//Component import
import Navbar from './Navbar';
import Search from './Search';
import Content from './Content';
import styled from 'styled-components';
import { useState } from 'react';

const Body = () => {
  const checked = {
    a: false,
    b: false,
  };

  const [check, setCheck] = useState(checked);
  const [a_checked, setA_checked] = useState(true);
  const [b_checked, setB_checked] = useState(false);

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
      <Content a_checked={a_checked} />
    </BodyWrap>
  );
};

const BodyWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

export default Body;
