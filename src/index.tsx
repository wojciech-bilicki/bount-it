import { mount, route, compose, withView } from 'navi';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, View } from 'react-navi';
import { BOUNCE_IT_TOKEN_KEY } from './Auth/auth.api';
import { withAuthentication } from './Auth/authenticatedRoute';
import LoginPage from './Auth/LoginPage';
import RegisterPage from './Auth/RegisterPage';
import IdeasPage from './Ideas/IdeasList/IdeasListPage';
import './index.css';
import AddIdeaPage from './Ideas/AddIdea/AddIdeaPage';
import Api from './common/Api';


const routes = mount({
  '/': withAuthentication(route({
    title: 'Ideas',
    view: <IdeasPage />
  })),
  "/add": withAuthentication(route({
    title: 'Add Idea',
    view: <AddIdeaPage />
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


ReactDOM.render(<Router context={{
  token: localStorage.getItem(BOUNCE_IT_TOKEN_KEY)
}} routes={routes} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
