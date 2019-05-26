import { useState } from "react";
import Api from "../../common/Api";

export const useIdeaModel = ({ defaultValues = { idea: '', description: '' } } = {}) => {
  const [idea, setIdea] = useState(defaultValues.idea);
  const [description, setDescription] = useState(defaultValues.description);

  return {
    error: idea.length === 0 ? "Please enter the idea" : description.length === 0 ? "Please enter the description" : null,
    inputProps: {
      idea: {
        value: idea,
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => setIdea(e.target.value)
      },
      description: {
        value: description,
        onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => setDescription(e.target.value)
      }
    },
    onSubmit: (e: React.FormEvent) => {
      e.preventDefault();
      Api.post('ideas', {
        idea,
        description
      })
    }
  }
}