// React import
import React from 'react';

// Package import
import styled from 'styled-components';

const Navbar = ({
  a_checked,
  setA_checked,
  b_checked,
  setB_checked,
  check,
  setCheck,
}) => {
  const aSelect = () => {
    setA_checked(true);
    setB_checked(false);
    // setCheck(...check, (check.a = true));
    // setCheck(...check, (check.b = false));
  };
  const bSelect = () => {
    setB_checked(true);
    setA_checked(false);
    // setCheck(...check, (check.b = true));
    // setCheck(...check, (check.a = false));
  };

  return (
    <NavbarWrap>
      <SelectA onClick={() => aSelect()} state={a_checked}>
        A Posts
      </SelectA>
      <SelectB onClick={() => bSelect()} state={b_checked}>
        B Posts
      </SelectB>
    </NavbarWrap>
  );
};

const NavbarWrap = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-bottom: 7px;
  border-bottom: 1px solid ${(props) => props.theme.colors.Gray2};

  button {
    display: flex;
    padding: 10px;
    border: 0;
    outline: 0;
    background-color: white;
    font-size: ${(props) => props.theme.fontSizes.ms};
  }
`;
const SelectA = styled.button`
  color: ${(props) =>
    props.state ? `${props.theme.colors.Blue}` : `${props.theme.colors.Black}`};
`;
const SelectB = styled.button`
  color: ${(props) =>
    props.state ? `${props.theme.colors.Blue}` : `${props.theme.colors.Black}`};
`;

export default Navbar;
