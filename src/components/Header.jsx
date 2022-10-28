// React import
import React from 'react';

// Package import
import styled from 'styled-components';

const Header = () => {
  return (
    <HeaderWrap>
      <h1 className='title'>배돌이 게시판</h1>
      <h3 className='subTitle'>게시물을 검색해보세요</h3>
    </HeaderWrap>
  );
};

const HeaderWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
  .title {
    margin: 50px 0 5px 0;
    font-size: ${(props) => props.theme.fontSizes.xl};
  }
  .subTitle {
    margin: 10px 0 5px 0;
    font-size: ${(props) => props.theme.fontSizes.md};
    color: ${(props) => props.theme.colors.Gray2};
  }
`;

export default Header;
