// React import
import React, { useEffect } from 'react';

// Redux import
import { useSelector, useDispatch } from 'react-redux';

// Package import
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import {
  a_contentList,
  b_contentList,
  a_searchDataList,
  b_searchDataList,
  clearItem,
  resetPaging,
} from '../redux/modules/ListSlice';

const Content = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { searchWord, itemList, type } = useSelector((state) => state.list);

  useEffect(() => {
    if (type === 'a') {
      if (searchWord.length === 0) {
        dispatch(a_contentList());
      } else {
        dispatch(a_searchDataList(searchWord));
      }
    } else {
      if (searchWord.length === 0) {
        dispatch(b_contentList());
      } else {
        dispatch(b_searchDataList(searchWord));
      }
    }
    return () => {
      dispatch(resetPaging());
      dispatch(clearItem());
    };
  }, [type, searchWord]);

  return (
    <ContentWrap>
      {itemList.map((item, index) => {
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
