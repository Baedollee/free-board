// React import
import React, { useState } from 'react';

// Package import
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

// Shared import
import axios from 'axios';
import { Back } from '../shared';

const ContentDetail = () => {
  const url = 'https://recruit-api.yonple.com/recruit/652179';
  const navigate = useNavigate();
  const location = useLocation();
  const { id, type } = location.state;
  const [data, setData] = useState([]);

  axios
    .get(`${url}/${type}-posts/${id}`)
    .then((res) => {
      setData(...data, res.data);
    })
    .catch((err) => console.log(err.response));

  const scrollState = localStorage.getItem('scroll');
  console.log(scrollState);

  return (
    <DetailWrap>
      <DetailContainer>
        <button onClick={() => navigate(-1)}>
          <Back />
        </button>
        <ContentContainer>
          <ContentTitle>{data.title}</ContentTitle>
          <ContentIn>{data.content}</ContentIn>
        </ContentContainer>
      </DetailContainer>
    </DetailWrap>
  );
};

const DetailWrap = styled.div`
  display: flex;
  margin: 70px 0px;
  padding: 35px;
`;
const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  button {
    width: 50px;
    height: 50px;
    border-radius: 10px;
    border: none;
    background-color: ${(props) => props.theme.colors.White};
    cursor: pointer;
  }
  button:hover {
    svg {
      width: 25px;
      height: 25px;
    }
  }
`;
const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 35px;
  border: 1px solid ${(props) => props.theme.colors.Gray2};
  border-radius: 5px;
  margin-bottom: 15px;
`;
const ContentTitle = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 35px;
  font-size: ${(props) => props.theme.fontSizes.lg};
  font-weight: 500;
`;
const ContentIn = styled.div`
  font-size: ${(props) => props.theme.fontSizes.ms};
`;

export default ContentDetail;
