import { useEffect, useState } from 'react';
import Api from '../common/Api';
import { Idea } from '../common/types';



interface MyAccountData {
  id: string;
  username: string;
  ideas: Idea[];
  bookmarks: Idea[];
}

type MyAccountHookData = [Partial<MyAccountData> & {isLoading: boolean}, (id: string) => Promise<void>, (id: string) => Promise<void>]

export const useMyAccount = (): MyAccountHookData => {

  const [username, setUsername] = useState('');
  const [bookmarks, setBookmarks] = useState<Idea[]>([]);
  const [ideas, setIdeas] = useState<Idea[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchMe = async () => {
      setIsLoading(true);
      const {data: {username, bookmarks, ideas}} = await Api.get<MyAccountData>('me');
      setUsername(username);
      setBookmarks(bookmarks);
      setIdeas(ideas);
      setIsLoading(false);
    } 

    fetchMe();
  }, [])

  const deleteBookmark = async (id: string) => {
    setIsLoading(true);
    const oldBookmarks = bookmarks;
    const newBookmarks = bookmarks.filter(bookmark => bookmark.id !== id);
    setBookmarks(newBookmarks);
    try {
      await Api.delete(`ideas/${id}/bookmark`);
    } catch {
      setBookmarks(oldBookmarks);
    } finally {
      setIsLoading(false);
    }
    
  }

  const deleteIdea = async (id: string) => {
    setIsLoading(true);
    const oldIdeas = ideas;
    const newIdeas = ideas.filter(idea => idea.id !== id);
    setBookmarks(newIdeas);
    try {
      await Api.delete(`ideas/${id}`);
    } catch {
      setBookmarks(oldIdeas);
    } finally {
      setIsLoading(false);
    }
    
  }

  return [{isLoading, ideas, username, bookmarks}, deleteBookmark, deleteIdea ];  
}