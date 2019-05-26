import React from 'react';
import Layout from '../../Navigation/NavigationBar';
import { useIdeaModel } from './addIdea.hooks';

const AddIdeaPage = () => {
  const { inputProps, onSubmit } = useIdeaModel();
  return (
    <Layout>
      <form onSubmit={onSubmit}>
        <label htmlFor="idea">Title</label>
        <input name="idea" {...inputProps.idea} />
        <label htmlFor="description">Description</label>
        <textarea name="description" {...inputProps.description} />
        <button>Save idea</button>
      </form>
    </Layout>
  )
}

export default AddIdeaPage;