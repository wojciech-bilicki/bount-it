import { useCallback, useEffect, useState } from "react";
import Api from "../../common/Api";
import { Idea } from "../../common/types";


export const useIdeasList = () => {

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
  }, [ideas])

  const downvote = async (id: string) => {

    await Api.post(`ideas/${id}/downvote`);
    const { data } = await Api.get<Idea[]>('ideas');
    setIdeas(data);
  }

  const upvote = async (id: string) => {
    await Api.post(`ideas/${id}/upvote`);
    const { data } = await Api.get<Idea[]>('ideas');
    setIdeas(data);
  }


  return {ideas, memoBookmark, downvote, upvote}
} 