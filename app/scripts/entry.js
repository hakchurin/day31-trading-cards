import React from 'react';
import ReactDOM from 'react-dom';
import CardPreviewList from './cardPreviewList';
import adventureTime from './data';
//import {Router,Route} from 'react-router';
import { Router, Route, hashHistory } from 'react-router';
import router from './router';





ReactDOM.render(router, document.getElementById('container'));
