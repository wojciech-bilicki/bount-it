import React, { useCallback, useEffect, useState } from 'react';
import Api from '../../common/Api';
import { Idea } from '../../common/types';
import Layout from '../../Navigation/NavigationBar';



const IdeasPage: React.FC = () => {

  const [ideas, setIdeas] = useState<Idea[]>([]);

  useEffect(() => {
    const fetchIdeas = async () => {
      const { data } = await Api.get<Idea[]>('ideas');
      setIdeas(data);
    }
    fetchIdeas();
  }, [])

  const memoBookmark = useCallback(async (id:string) => {
    await Api.post(`ideas/${id}/bookmark`)
  }, [])

  return (
    <Layout>
      Ideas
      <table>
        <tbody>
          {ideas.map(idea => <tr key={idea.id}><td>{idea.idea}</td><td>{idea.description}</td><td><button onClick={() => memoBookmark(idea.id)}>Bookmark</button></td></tr>)}
        </tbody>
      </table>
    </Layout>
  )
}

export default IdeasPage;
