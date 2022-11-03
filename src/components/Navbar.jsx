// React import
import React from 'react';

// Redux import
import { useDispatch, useSelector } from 'react-redux';
import { selectType } from '../redux/modules/ListSlice';

// Package import
import styled from 'styled-components';

const Navbar = () => {
  const dispatch = useDispatch();
  const type = useSelector((state) => state.list.type);

  return (
    <NavbarWrap>
      <SelectA onClick={() => dispatch(selectType('a'))} state={type}>
        A Posts
      </SelectA>
      <SelectB onClick={() => dispatch(selectType('b'))} state={type}>
        B Posts
      </SelectB>
    </NavbarWrap>
  );
};

const NavbarWrap = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 7px;
  border-bottom: 1px solid ${(props) => props.theme.colors.Gray2};

  button {
    display: flex;
    padding: 10px;
    border: 0;
    outline: 0;
    background-color: ${(props) => props.theme.colors.White};
    font-size: ${(props) => props.theme.fontSizes.ms};

    cursor: pointer;
    :hover {
      background-color: ${(props) => props.theme.colors.SkyBlue};
    }
  }
`;
const SelectA = styled.button`
  color: ${(props) =>
    props.state === 'a'
      ? `${props.theme.colors.Blue}`
      : `${props.theme.colors.Black}`};
`;
const SelectB = styled.button`
  color: ${(props) =>
    props.state === 'b'
      ? `${props.theme.colors.Blue}`
      : `${props.theme.colors.Black}`};
`;

export default Navbar;
