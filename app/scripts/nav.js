import React from 'react';
import ReactDOM from 'react-dom';
import {router, Route, hashHistory, Link} from 'react-router';
import adventureTime from './data';
import CardPreviewList from './cardPreviewList'
import SignUp from'./signUp';






const Nav = React.createClass({
    render: function() {
        return (
            <nav className = 'nav' >
                <ul>
                  <li>
                      <Link to="/cardPreviewList" > Card Collection </Link>
                  </li>
                  <li>
                      <Link to ="/newCard"> Add New Card </Link>
                </li>
                <li>
                      <Link to ="/login"> Login </Link>
                </li>
                <li>
                      <Link to ="/signUp">  Sign Up </Link>
                </li>
              </ul>
            </nav>
        )
    }
});

export default Nav;
