import React from 'react';
import styled from 'styled-components';

const Content = () => {
  return (
    <ContentWrap>
      <ContentContainer>
        <ContentHeader>
          <div className='headerNum'>1.</div>
          <div className='headerTitle'>제목</div>
        </ContentHeader>
        <ContentBody>body</ContentBody>
      </ContentContainer>
    </ContentWrap>
  );
};

const ContentWrap = styled.div`
  display: flex;
  padding: 18px;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 18px;
`;

const ContentHeader = styled.div`
  display: flex;
  flex-direction: row;
`;
const ContentBody = styled.div`
  display: flex;
`;

export default Content;
