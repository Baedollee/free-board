// React import
import React from 'react';

// Package import
import styled from 'styled-components';

const Navbar = () => {
  return (
    <NavbarWrap>
      <div>A Posts</div>
      <div>B Posts</div>
    </NavbarWrap>
  );
};

const NavbarWrap = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-bottom: 7px;
  border-bottom: 1px solid ${(props) => props.theme.colors.Gray2};

  div {
    display: flex;
    padding: 10px;
    font-size: ${(props) => props.theme.fontSizes.ms};
  }
`;

export default Navbar;
