import React from 'react';
import { Link } from 'react-navi';
import styled from 'styled-components';

const NavigationWrapper = styled.div`
  display: flex;
`;

const NavigationBar: React.FC = () => (
  <NavigationWrapper>
    <Link href="/">Ideas</Link>
    <Link href="/add">Add Idea</Link>
    <Link href="/my-account">My Account</Link>
  </NavigationWrapper>
)

export default NavigationBar;