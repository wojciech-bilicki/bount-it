import React, { useEffect, useRef, useState } from 'react';
import { Link, useCurrentRoute } from 'react-navi';
import styled from 'styled-components';
import { ColorSet } from '../common/Colors';
import TopBar from '../common/components/TopBar';
import './navigation.css';

const NavigationWrapper = styled.div`
  display: flex;
  width: 70%;
  margin: 24px auto 16px;
  justify-content: space-between;
`;


interface SeparatorProps {
  position: number;
}

// export const StyledSeparator: Styled<SeparatorProps, 'span'> = ({
//     position,
//   ...props
// }) => <input {...props} />;



const Separator = styled.span`
  display: block;
  width: 70%;
  background-color: ${ColorSet.LIGHT_PINK};
  height: 7px;
  border-radius: 30px;
  margin: 0 auto;
  position: relative;
`;

let lastAnimation = '0px';

const Bar = styled.span`

    display: block;
    height: 7px;
    width: 182px;
    background-color: ${ColorSet.MAIN_PINK};
    position: absolute;
    left: ${lastAnimation};
    transition: all 1s ease;
  }
`;



const AppWrapper = styled.div``;

const Layout: React.FC = (props) => {

  const ref = useRef<HTMLSpanElement>(null);
  const {url: {pathname}} = useCurrentRoute();
  const [left, setLeft] = useState(lastAnimation);
  
  console.log('render')
  useEffect(() => {
    if(pathname === "/") {
      setLeft('0px')
      lastAnimation = '0px'
    } else if (pathname === "/add") {
      setLeft('50%');
      lastAnimation = '50%'
    } else  {
    setLeft('90%');
    lastAnimation = '90%';
    }

  },[pathname])


    if(ref.current !== null) {
      ref.current.style.left = left;
    }

    console.log(lastAnimation);
  return ( <>
    <TopBar />
    <NavigationWrapper>
      <Link  exact={true} activeClassName="active-link" className="link" href="/">your ideas</Link>
      <Link   activeClassName="active-link" className="link" href="/add">Add Idea</Link>
      <Link   activeClassName="active-link" className="link"href="/me">My Account</Link>     
    </NavigationWrapper>
    <Separator>
      <Bar ref={ref}/>
    </Separator>
    <AppWrapper>
      {props.children}
    </AppWrapper>
  </>)
}

export default Layout;