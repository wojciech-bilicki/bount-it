import React from 'react';
import Layout from '../Navigation/Layout';
import { useMyAccount } from './myAccount.hooks';


const MyAccountPage = () => {

  const [{bookmarks, ideas, isLoading}, deleteBookmark] = useMyAccount(); 
  return (
    <Layout>
      MyAccountPage
    </Layout>
  )
}

export default MyAccountPage;