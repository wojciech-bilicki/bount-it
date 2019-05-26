import React, { useEffect, useState } from 'react';
import Layout from '../../Navigation/NavigationBar';
import Api from '../../common/Api';

interface Idea {
  idea: string;
  description: string;
  id: string;
}

interface IdeasResponse {
  data: Idea[];
}

const IdeasPage: React.FC = () => {

  const [ideas, setIdeas] = useState<Idea[]>([]);

  useEffect(() => {
    const fetchIdeas = async () => {
      const { data } = await Api.get<Idea[]>('ideas');
      setIdeas(data);
    }
    fetchIdeas();
  }, [])

  return (
    <Layout>
      Ideas
      <table>
        <tbody>
          {ideas.map(idea => <tr key={idea.id}><td>{idea.idea}</td><td>{idea.description}</td></tr>)}
        </tbody>
      </table>
    </Layout>
  )
}

export default IdeasPage;
