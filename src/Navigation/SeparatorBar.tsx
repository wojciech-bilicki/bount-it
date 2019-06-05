import React, { useRef } from 'react';
import styled from 'styled-components';
import { ColorSet } from '../common/Colors';


const Separator = styled.span`
  display: block;
  width: 70%;
  background-color: ${ColorSet.LIGHT_PINK};
  height: 7px;
  border-radius: 30px;
  margin: 0 auto;
  position: relative;
`;

const Bar = styled.span`

    display: block;
    height: 7px;
    width: 182px;
    background-color: ${ColorSet.MAIN_PINK};
    position: absolute;
    left: 0px;
    transition: left 1s ease;
  }
`;

interface Props {
  calcCssFn: string;
}


const SeparatorBar = ({calcCssFn}: Props) => {
  const barElement = useRef(null);
  return (
    <Separator>
    <Bar key="aaa" style={{left: calcCssFn}} ref={barElement} />
  </Separator>
  )


}
  

 

export default SeparatorBar;
