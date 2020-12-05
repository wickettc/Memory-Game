import React from 'react';

const NavBar = ({ score, bestScore }) => {
  return (
    <div className="nav-bar">
      <h1>Memory Game</h1>
      <div className="scores">
        <div>
          Score: <span className="score-color">{score}</span>
        </div>
        <div>
          Best Score: <span className="score-color">{bestScore}</span>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
