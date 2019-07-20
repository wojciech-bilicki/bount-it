import React from 'react';
import { Link } from 'react-navi';
import styled from 'styled-components';
import { ColorSet } from '../common/Colors';
import RoutesUrls from '../utils/routesUrls';
import './navigation.css';

const NAVIGATION_BAR_WIDTH = "70%";

const NavigationWrapper = styled.nav`
  display: flex;
  width: ${NAVIGATION_BAR_WIDTH};
  margin: 24px auto 16px;
  justify-content: space-between;
`
const Separator = styled.hr`
  height: 7px;
  width: ${NAVIGATION_BAR_WIDTH};
  border: none;
  border-radius: 14px;
  margin: 0 auto;
  background-color: ${ColorSet.LIGHT_PINK};
`;


const NavigationBar = () => (
  <>
  <NavigationWrapper>
    <Link exact activeClassName="active-link" className="link" href={RoutesUrls.HOME}>Your ideas</Link>
    <Link activeClassName="active-link" className="link" href={RoutesUrls.ADD_IDEA}>Add idea</Link>
    <Link activeClassName="active-link" className="link" href={RoutesUrls.MY_ACCOUNT}>My Account</Link>
  </NavigationWrapper>
  <Separator />
  </>
)

export default NavigationBar;