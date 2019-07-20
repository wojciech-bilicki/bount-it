import React from 'react';
import styled from 'styled-components';
import { ColorSet } from '../../Colors';


interface Props {
  iconName: string;
  votesNumber: number;
  onAddVote:  (id: string) => Promise<void>;
  id: string;
}

const VoteWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${ColorSet.MAIN_VIOLET};
  color: white;
  justify-content: center;
  border-radius: 15px;
  cursor: pointer;
  margin-right: 16px;
  max-height: 75px;
  i {
    color: ${ColorSet.LIGHT_VIOLET};
    padding-top: 8px;
  }

  span {
    padding-bottom: 8px;
  }

  &:hover {
    i {
      opacity: 0.5;
    
    }
  }

`;


const Vote: React.FC<Props> = ({iconName, votesNumber, onAddVote, id}) => (
  <VoteWrapper onClick={ async () => await onAddVote(id)}>
    <i className="material-icons">{iconName}</i>
    <span>{votesNumber}</span>
  </VoteWrapper>
);

export default Vote;