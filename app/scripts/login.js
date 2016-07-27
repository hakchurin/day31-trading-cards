import React from 'react';
import ReactDOM from 'react-dom';
import {router, Route, hashHistory} from 'react-router';






const Login = React.createClass ({
  loginFunction:function(e){
    e.preventDefault();
    let username= this.refs.username.value;
    let password= this.refs.password.value;
// events:{
//     'click #submit': 'loginFunction',
// }
    let data = {
      username: username,
      password: password
    };
    hashHistory.push(`/CardPreviewList`);

  },
  render: function(){
    return(
        <form onSubmit ={this.loginFunction} id="loginForm">
        <p>
        <input type="text" id="username" placeholder="username" ref="username"/>
        </p>
        <p>
        <input type="password" id="password" placeholder="password" ref="password"/>
        </p>
        <p>
        <input type="submit" id="loginBtn" value="Submit"/>
        </p>
        </form>
      )
  },


});

export default Login;
