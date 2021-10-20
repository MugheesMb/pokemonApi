import React from 'react';
import './Card.css';

const Card = ({name}) => {


    return(


        <div className= ' card    grow '>
            <div >
            <img src={`https://img.pokemondb.net/artwork/large/${name}.jpg`} alt="asdas"/>       
    <h2>{name}</h2>
   
            </div>
        </div>


    );


}

export default Card;