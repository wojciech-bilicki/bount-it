import React from 'react';
import styled from "styled-components";
import { ColorSet } from '../Colors';

interface VisibleDiv {
  isVisible: boolean;
}

const MenuWrapper = styled.div<VisibleDiv>`
    top: 0;
    position: fixed;
    width: 250px;
    height: 100%;
    z-index: 12;
    background-color: white;
    transform: translateX(${props => (props.isVisible ? 0 : '-100%')});
    transition: transform 0.3s ease-out;
    display: flex; 
    flex-direction: column;
    justify-content: flex-start;
`;

const MenuDrawerOverlay = styled.div<VisibleDiv>`
  top: 0;
  pointer-events: ${props => (props.isVisible ? 'all' : 'none')};
  position: fixed;
  z-index: 11;
  width: 100vw;
  height: 100%;
  transition: opacity 0.3s ease-out;
  background-color: #000;
  opacity: ${props => (props.isVisible ? 0.3 : 0)};
`;

interface Props {
    isVisible: boolean;
    toggleVisibility: () => void; 
}

const MenuIcon = styled.i`
  color: ${ColorSet.MAIN_PINK};
  border: 3px solid ${ColorSet.LIGHT_PINK};
  border-radius: 50%;
  margin-left: 8px;
  
`;

const MenuTab = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 10% 16px;
  align-items: center;
  cursor: pointer;
`;

const CloseTab = styled(MenuTab)`
  
`;

const MenuLabel = styled.label`
  text-transform: uppercase;
  font-size: 20px;
  font-weight: bold;
  color: ${ColorSet.LIGHT_PINK};
  cursor: pointer;
`
const menuLabels = ["Your Ideas", "Your collections", "Explore", "Profile Settings", "Statistics"]

const MenuList = styled.ul`
  padding: 0;

  li:last-child {
    border-bottom: 2px solid ${ColorSet.LIGHT_PINK};
  }
`;

const MenuEntry = styled.li`
  font-size: 20px;
  color: ${ColorSet.LIGHT_PINK};
  cursor: pointer;
  border-top: 2px solid ${ColorSet.LIGHT_PINK};
  padding: 15% 10%;
  list-style: none;

  &:hover {
    color: ${ColorSet.MAIN_PINK};
  }
`;

const LogoutTab = styled(MenuTab)`
margin-top: auto;
  i {
    border:none;
  }
`;

const MenuDrawer: React.FC<Props> = ({isVisible = true, toggleVisibility}) => (
  <>
    <MenuWrapper isVisible={isVisible}>
      <CloseTab onClick={toggleVisibility}>
        <MenuLabel>Close</MenuLabel>
        <MenuIcon className="material-icons">close</MenuIcon>
      </CloseTab>
      <MenuList>
        {menuLabels.map(label => <MenuEntry key={label}>{label}</MenuEntry>)}
      </MenuList>
      <LogoutTab>
        <MenuLabel>Logout</MenuLabel>
        <MenuIcon className="material-icons">exit_to_app</MenuIcon>
      </LogoutTab>
    </MenuWrapper>
    <MenuDrawerOverlay isVisible={isVisible} onClick={toggleVisibility} />
  </>
)

export default MenuDrawer;