import React from 'react';
import styled from 'styled-components';
import { ColorSet } from '../../Colors';
import { Idea } from '../../common/types';
import Vote from './Vote';

const IdeaRowWrapper = styled.li`
  border-bottom: 2px solid ${ColorSet.LIGHT_PINK};
  display: flex;
  padding: 16px;
  align-items: center;
`;

const DescriptionWrapper = styled.span`
margin-left: 16px;
  display: flex;
  flex-direction: column;
    h3 {
      font-size: 24px;
      color: ${ColorSet.MAIN_VIOLET}
    }
    p {
      font-style: italic;
      color: ${ColorSet.LIGHT_VIOLET};
      font-size: 16px;
    }
`;

const BookmarkButton = styled.button`
  border: none;
  background: transparent;
  outline: none;
  cursor: pointer;
  margin-left: auto;

  &:hover {
    color: ${ColorSet.LIGHT_VIOLET};
  }
  
  i{
    font-size: 32px;
  }
`;

type Props = Idea & {
  upvote: (id: string) => Promise<void>,
  downvote: (id: string) => Promise<void>,
  bookmark: (id: string) => Promise<void>
}

const IdeaRow:React.FC<Props> = ({idea, description, downvotes, upvotes, upvote, downvote, id}: Props) => (
  <IdeaRowWrapper>  
      <Vote iconName="add_circle" onAddVote={(id:string) => upvote(id)} votesNumber={upvotes} id={id}/>
      <Vote iconName="remove_circle" onAddVote={(id: string) => downvote(id)} votesNumber={downvotes} id={id}/>
      <DescriptionWrapper>
        <h3>{idea}</h3>
        <p>{description}</p>
    </DescriptionWrapper>
    <BookmarkButton>
      <i className="material-icons">bookmark_border</i>
    </BookmarkButton>
  </IdeaRowWrapper>
);

export default IdeaRow;