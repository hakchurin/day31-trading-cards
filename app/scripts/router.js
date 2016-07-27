import React from 'react';
import ReactDOM from 'react-dom';
import CardPreviewList from './cardPreviewList'
import { Router, Route, hashHistory } from 'react-router';
import login from './login';
import CardPreview from './cardPreview';
import SingleCard from './singleCard';
import NewCard from './newCard';
import SignUp from './signUp';

const router = (

    <Router history= {hashHistory}>
      <Route path = "/CardPreviewList" component = {CardPreviewList}/>
      <Route path = "/Login" component = {login}/>
      <Route path = "/" component = {login}/>
      <Route path = "/singleCard/:id" component = {SingleCard}/>
      <Route path = "/newCard" component = {NewCard}/>
      <Route path = "/signUp" component = {SignUp}/>



    </Router>
)

export default router;


// <Route path = "/cardPreview" component = {CardPreview}/>
