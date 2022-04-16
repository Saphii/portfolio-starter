import React from 'react';
import '../Card/Card.css';

const Card = ({emoji, heading,detail}) => {
    return (
        <div>
            <div className="card">
                <img src={emoji} alt=""/>
                <span>{heading}</span>
                <span>{detail}</span>
                <button className="c-button">En savoir plus</button>
            </div>
        </div>
    );
};

export default Card;