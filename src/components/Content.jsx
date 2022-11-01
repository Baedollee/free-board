import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Content = ({ a_checked, b_checked, data }) => {
  const navigate = useNavigate();

  return (
    <ContentWrap>
      {data.map((item, index) => {
        return (
          <ContentContainer
            onClick={() => navigate(`/a-posts/${item.id}`)}
            key={`${item.id}_${index}`}>
            <ContentHeader>
              <div className='headerNum'>{item.id}.</div>
              <div className='headerTitle'>{item.title}</div>
            </ContentHeader>
            <ContentBody>{item.content}</ContentBody>
          </ContentContainer>
        );
      })}
    </ContentWrap>
  );
};

const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
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
