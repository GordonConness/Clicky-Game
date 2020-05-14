import React from 'react';

const Dogs = props => (
    <div 
    className="card img-container hover">
    <img alt={props.name} src={props.image} id={props.id}
      onClick={() => props.shuffleCards(props.id)} className='shuffleCards'/>

    </div>
)

export default Dogs;