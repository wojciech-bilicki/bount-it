import React from 'react';
import Layout from '../../Navigation/NavigationBar';
import { useIdeasList } from './IdeasList.hooks';


const IdeasPage: React.FC = () => {

  const {ideas, memoBookmark, downvote, upvote} = useIdeasList();

  return (
    <Layout>
      Ideas
      <table>
        <thead>
          <tr>
            <th>Tytuł</th>
            <th>Opis</th>
            <th>Dodaj</th>
            <th>Plusy</th>
            <th>Minusy</th>
            <th>Minusuj</th>
            <th>Plusuj</th>
          </tr>
        </thead>
        <tbody>
          {ideas.map(idea => <tr key={idea.id}>
                              <td>{idea.idea}</td>
                              <td>{idea.description}</td>
                              <td><button onClick={() => memoBookmark(idea.id)}>Bookmark</button></td>
                              <td>{idea.downvotes}</td>
                              <td>{idea.upvotes}</td>
                              <td><button onClick={() => downvote(idea.id)}>Minusuj</button></td>
                              <td><button onClick={() => upvote(idea.id)}>Plusuj</button></td>
                            </tr>)}
        </tbody>
      </table>
    </Layout>
  )
}

export default IdeasPage;
