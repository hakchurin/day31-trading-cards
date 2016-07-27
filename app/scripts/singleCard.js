import React from 'react';
import ReactDOM from 'react-dom';
import {router, Route, hashHistory} from 'react-router';
import adventureTime from './data';
import CardPreviewList from './cardPreviewList'
import CardPreview from './cardPreview';
import Nav from './nav';

// {singleCardPreview}

// <div> card={card} key={i}</div>;


const SingleCard = React.createClass({
  render:function(){
    // console.log(this.props);
    let singleCardPreview = adventureTime.filter((card,i) =>{
      if (String(this.props.params.id) === String(card.id)){
        return true;
      }
    })
    console.log(singleCardPreview);
  return (
    <div>
    <Nav></Nav>
    <p>
     <img src={singleCardPreview[0].url}>
     </img>
     </p>
    <p>
    name: {singleCardPreview[0].name}
    </p>
    <p>
    location: {singleCardPreview[0].location}
     </p>

      <p>
      specie: {singleCardPreview[0].specie}
       </p>
       <p>
       power level: {singleCardPreview[0].powerLevel}
        </p>
        <p>
        occupation: {singleCardPreview[0].occupation}
         </p>





    </div>
  )
  }
});

export default SingleCard;
