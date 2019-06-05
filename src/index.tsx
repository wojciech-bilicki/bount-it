import { mount, route } from 'navi';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-navi';
import { createGlobalStyle } from "styled-components";
import { BOUNCE_IT_TOKEN_KEY } from './Auth/auth.api';
import { withAuthentication } from './Auth/authenticatedRoute';
import LoginPage from './Auth/LoginPage';
import RegisterPage from './Auth/RegisterPage';
import Api from './common/Api';
import AddIdeaPage from './Ideas/AddIdea/AddIdeaPage';
import IdeasPage from './Ideas/IdeasList/IdeasListPage';
import './index.css';
import MyAccountPage from './MyAccount/MyAccountPage';



const GlobalStyles = createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/css?family=Lato');
    font-family: 'Lato', sans-serif;
  }
`

const routes = mount({
  '/': withAuthentication(route({
    title: 'Ideas',
    view: <IdeasPage />
  })),
  "/add": withAuthentication(route({
    title: 'Add Idea',
    view: <AddIdeaPage />
  })),
  "/me": withAuthentication(route({
    title: "My Account",
    view: <MyAccountPage />
  })),
  '/login': route({
    title: 'Login',
    view: <LoginPage />
  }),
  "/register": route({
    title: "Register",
    view: <RegisterPage />
  }),
})

Api.init();


ReactDOM.render(<>
<GlobalStyles />
<Router context={{
  token: localStorage.getItem(BOUNCE_IT_TOKEN_KEY)
}} routes={routes} /></>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
