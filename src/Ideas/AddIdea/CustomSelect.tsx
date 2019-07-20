import React, { useState } from 'react';
import styled from 'styled-components';
import { ColorSet } from '../../Colors';

const SelectOpener = styled.div`
  background-color: ${ColorSet.LIGHT_PINK};
  color: ${ColorSet.MAIN_PINK};
  font-size: 18px;
  font-weight: bold;
  border-radius: 16px;
  max-width: 250px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  cursor: pointer;
  position: relative;

  :hover {
    background-color: #F9CDCE;
  }

  i {
    color: white;
    transform: rotate(-90deg);
    font-size: 48px;
  }

  span {
    text-transform: capitalize;
  }
`;

const OptionList = styled.ul`
  position: absolute;
  top: 48px;
  left: 0;
  min-width: 250px;
  background-color: ${ColorSet.MAIN_PINK};
  color: white;
  margin: 0;
  padding-inline-start: 0px;
  list-style: none;
  text-transform: uppercase;
  max-height: 200px;
  overflow-y: scroll;



  li {
    border-bottom: 1px solid ${ColorSet.LIGHT_PINK};
    font-size: 12px;
    margin: 4px;
    margin-top: 8px;
  }

  li:hover{
    background-color: ${ColorSet.LIGHT_PINK};
  }

  &::-webkit-scrollbar {
    background-color: pink;
    width: 10px;

  }

  &::-webkit-scrollbar-track {
    background-color: red;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${ColorSet.LIGHT_PINK};
    border-radius: 10px;
  }



`;

const options = ["motorization", "home & garden", "animals", "electronics", "fashion & beauty", "events & occasions", "culture & art", "entertainment", "sport", "children"];

const CustomSelect = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);


  return (
    <SelectOpener onClick={() => setIsOpen(!isOpen)}>
      <span>{selectedOption || "Add to field"}</span>
      <i className="material-icons">arrow_left</i>
      {isOpen && <OptionList>
          {options.map(option => <li onClick={() => setSelectedOption(option)} key={option}>{option}</li>)}
      </OptionList>}
    </SelectOpener>
  )
}

export default CustomSelect;

