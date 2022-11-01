import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import {
  a_contentList,
  b_contentList,
  clearItem,
  resetPaging,
} from '../redux/modules/ListSlice';

const Content = ({ a_checked }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { item: data, type, paging } = useSelector((state) => state.list);
  console.log(data, type, paging);

  const searchData = useSelector((state) => state.search.searchList);

  useEffect(() => {
    if (type === 'a') {
      dispatch(a_contentList());
    } else {
      dispatch(b_contentList());
    }
  }, [type]);

  useEffect(() => {
    return () => {
      dispatch(resetPaging());
      dispatch(clearItem());
    };
  }, [type]);

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
