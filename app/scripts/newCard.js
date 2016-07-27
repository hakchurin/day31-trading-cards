import React from 'react';
import ReactDOM from 'react-dom';
import {router, Route, hashHistory} from 'react-router';
import adventureTime from './data';






const NewCard = React.createClass({
  render:function(){
    return (
      <form onSubmit={this.newCardFunction}>
      <input type="text" id="id" ref="id" placeholder="id"/>

      <input type="text" id="name" ref="name" placeholder="name"/>
      <input type="text" id="location" ref="location"  placeholder="location"/>
      <input type="text" id="url"  ref="url" placeholder="url"/>
      <input type="text" id="specie" ref="specie"  placeholder="specie"/>
      <input type="text" id="powerLevel"  ref="powerLevel" placeholder="powerLevel"/>
      <input type="text" id="occupation"  ref="occupation" placeholder="occupation"/>
      <input type="submit" id="button"  ref="submit" value="submit"/>
      </form>

    )
  },
  newCardFunction:function(e){
    e.preventDefault();
    let id= this.refs.id.value;
    let name= this.refs.name.value;
    let location= this.refs.location.value;
    let url= this.refs.url.value;
    let specie= this.refs.specie.value;
    let powerLevel= this.refs.powerLevel.value;
    let occupation= this.refs.occupation.value;
    let data = {
      id:id,
      name:name,
      location:location,
      url:url,
      specie:specie,
      powerLevel:powerLevel,
      occupation:occupation
    }
    adventureTime.push(data);
    hashHistory.push(`/CardPreviewList`);

  }
});

export default NewCard;
