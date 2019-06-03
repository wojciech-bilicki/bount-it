import React from 'react';
import styled from 'styled-components';
import Logo from '../../assets/logo-light.png';
import { ColorSet } from '../Colors';



const TopBarWrapper = styled.header`
  display: flex;
  padding: 24px 32px;
  background-color: ${ColorSet.MAIN_VIOLET};
`;


const MenuButton = styled.button`
  background-color: transparent;
  height: 3rem;
  width: 3rem;
  border: none;
  /* border-radius: 50%; */
  outline: none;
  cursor: pointer;
  
`;

const MenuToggle = styled.span`
  display: block;
  width: 2rem;
  height: 2px;
  background-color: white;
  position: relative;
  margin: auto;
  border-radius: 3px;
  background-color: ${ColorSet.MAIN_PINK};

  &::after, &::before {
    background-color: ${ColorSet.MAIN_PINK};
    height: 2px;
    width: 2rem;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
}

 &::after {
  top: 1.25rem;
 }

 &::before {
  top: -1.3rem;
}

`;



const TopBar = () => (
  <TopBarWrapper>
    <MenuButton >
    <MenuToggle />
    </ MenuButton> 

    <img src={Logo} />
    <i className="material-icons">search</i>
    <i className="material-icons">account_circle</i>
  </TopBarWrapper>
)

export default TopBar;