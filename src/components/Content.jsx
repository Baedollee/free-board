import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Content = ({ a_checked }) => {
  const url = 'https://recruit-api.yonple.com/recruit/652179';

  const navigate = useNavigate();
  const [data, setData] = useState([]);

  const infinityScroll = { loading: false, followingItem: true, paging: 0 };

  useEffect(() => {
    if (a_checked === true) {
      axios
        .get(`${url}/a-posts?page=${infinityScroll.paging}`)
        .then((res) => {
          setData(res?.data);
          infinityScroll.loading = false;
          infinityScroll.paging = infinityScroll.paging + 1;
        })
        .catch((err) => {
          console.log(err.response);
          infinityScroll.loading = false;
        });

      return () => {
        setData([]);
      };
    } else {
      axios
        .get(`${url}/b-posts?page=${infinityScroll.paging}`)
        .then((res) => {
          setData(res?.data);
        })
        .catch((err) => console.log(err.response));

      return () => {
        setData([]);
      };
    }

    // dispatch(a_contentList());
  }, [JSON.stringify(a_checked)]);

  return (
    <ContentWrap>
      {data?.map((item, index) => {
        return (
          <ContentContainer
            onClick={() =>
              navigate(`/${item.type}-posts/${item?.id}`, {
                state: {
                  id: item.id,
                  type: item.type,
                },
              })
            }
            key={`${item?.id}_${index}`}>
            <ContentHeader>
              <ContentHeaderNum>{item?.id}.</ContentHeaderNum>
              <ContentHeaderTitle>{item?.title}</ContentHeaderTitle>
            </ContentHeader>
            <ContentBody>{item?.content}</ContentBody>
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
  border-radius: 10px;
  box-shadow: 1px 4px 4px 1px #dadce0 inset;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 18px;
  cursor: pointer;

  :hover {
    background-color: ${(props) => props.theme.colors.SkyBlue};
  }
`;

const ContentHeader = styled.div`
  display: flex;
  flex-direction: row;
`;
const ContentHeaderNum = styled.div`
  color: ${(props) => props.theme.colors.Blue};
  font-size: ${(props) => props.theme.fontSizes.ms};
  font-weight: 700;
`;
const ContentHeaderTitle = styled.div`
  font-size: ${(props) => props.theme.fontSizes.ms};
  font-weight: 700;
`;

const ContentBody = styled.div`
  display: flex;
  font-size: ${(props) => props.theme.fontSizes.sm};
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

export default Content;
