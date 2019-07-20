import React from 'react';
import styled from 'styled-components';
import Layout from '../../Navigation/Layout';
import IdeaRow from './IdeaRow';
import { useIdeasList } from './IdeasList.hooks';


const IdeasList = styled.ul`
  list-style: none;
  padding-inline-end: 40px;
`;


const IdeasPage: React.FC = () => {

  const {ideas, memoBookmark, downvote, upvote} = useIdeasList();

  return (
    <Layout>
      <IdeasList>
        {ideas.map(idea => <IdeaRow {...idea}  downvote={downvote} upvote={upvote} bookmark={memoBookmark}/>)}
      </IdeasList>
      </Layout>
  )
}

export default IdeasPage;
