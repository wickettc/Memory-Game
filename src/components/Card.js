import React from 'react';

const Card = ({ name, img, clickedCard }) => {
  return (
    // data-name on every element so onClick target returns same no matter where click occurs inside component
    <div data-name={name} onClick={clickedCard} className="card">
      <h3 data-name={name}>{name}</h3>
      <img data-name={name} src={img} alt={name} />
    </div>
  );
};

export default Card;
