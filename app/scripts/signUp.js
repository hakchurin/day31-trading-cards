import React from 'react';
import ReactDOM from 'react-dom';
import {router, Route, hashHistory} from 'react-router';



const SignUp = React.createClass({
  submitFunction:function(e){
    e.preventDefault();
    let name= this.refs.name.value;
    let username= this.refs.username.value;
    let email= this.refs.email.value;
    let data= {
      name:name,
      username:username,
      email:email
    };
    hashHistory.push(`/CardPreviewList`);

  },
  render:function(){
    return(
      <form onSubmit={this.submitFunction}>
      <input type="text" placeholder="name" ref="name"/>
      <input type="usernmae" placeholder="username" ref="username"/>
      <input type="email" placeholder="email" ref="email"/>
      <input type="submit" placeholder="submit" value="submit"/>

      </form>
    )
  }
})

export default SignUp;
