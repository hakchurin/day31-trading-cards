import React from 'react';
import ReactDOM from 'react-dom';
import {router, Route, hashHistory} from 'react-router';
import adventureTime from './data';
import CardPreview from './cardPreview';
import Nav from './nav';



const CardPreviewList = React.createClass({
  render: function(){
    let cardList = adventureTime.map((card,i) =>{
      return <CardPreview card={card} key={i}/>;

    })
    return(
      <div>
        <Nav/>
        <ul>
          {cardList}
        </ul>
      </div>

    )
  }

});

export default CardPreviewList;



///list of all 5 cards with all info or prefferably just pic and name
