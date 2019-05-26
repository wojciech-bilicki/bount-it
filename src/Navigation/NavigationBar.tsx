import React from 'react';
import { Link } from 'react-navi';
import styled from 'styled-components';

const NavigationWrapper = styled.div`
  display: flex;
`;

const AppWrapper = styled.div``;

const Layout: React.FC = (props) => (
  <>
    <NavigationWrapper>
      <Link href="/">Ideas</Link>
      <Link href="/add">Add Idea</Link>
      <Link href="/my-account">My Account</Link>
    </NavigationWrapper>
    <AppWrapper>
      {props.children}
    </AppWrapper>
  </>
)

export default Layout;