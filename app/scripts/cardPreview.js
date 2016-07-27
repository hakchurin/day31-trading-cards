import React from 'react';
import ReactDOM from 'react-dom';
import {router, Route, hashHistory, Link} from 'react-router';
import adventureTime from './data';
//import router from './router';
import CardPreviewList from './cardPreviewList'




// <h3>{this.props.card.name}</h3>

const CardPreview = React.createClass({

  render: function(){
    console.log(this.props);
    return(
      <div className="CardPreview">
        <li className="cardLi">
        <Link to={`singleCard/${this.props.card.id}`}>{this.props.card.name}
        </Link>


        <img src= {this.props.card.url}>
        </img>
        </li>

        </div>

    )
  }
});

export default CardPreview;
///single card preview with all of char info
