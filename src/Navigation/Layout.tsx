import React, { useState } from 'react';
import MenuDrawer from './MenuDrawer';
import NavigationBar from './NavigationBar';
import TopBar from './TopBar';

const Layout: React.FC = ({children}) => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
  <>
    <TopBar toggleVisibility={toggleVisibility} />
    <NavigationBar />
    <MenuDrawer isVisible={isVisible} toggleVisibility={toggleVisibility} />
    {children}
  </>)
}

export default Layout;