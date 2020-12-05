import React, { useEffect, useState } from 'react';
import '../css/App.css';
import NavBar from './NavBar';
import Card from './Card';
import Footer from './Footer';

const picturePath = process.env.PUBLIC_URL + '/assets/pictures/';

const cards = [
  {
    id: 1,
    img: 'lion.jpg',
    name: 'Lion',
  },
  {
    id: 2,
    img: 'bear.jpg',
    name: 'Bear',
  },
  {
    id: 3,
    img: 'deer.jpg',
    name: 'Deer',
  },
  {
    id: 4,
    img: 'owl.jpg',
    name: 'Owl',
  },
  {
    id: 5,
    img: 'eagle.jpg',
    name: 'Eagle',
  },
  {
    id: 6,
    img: 'giraffe.jpg',
    name: 'Giraffe',
  },
  {
    id: 7,
    img: 'octopus.jpg',
    name: 'Octopus',
  },
  {
    id: 8,
    img: 'shark.jpg',
    name: 'Shark',
  },
  {
    id: 9,
    img: 'zebra.jpg',
    name: 'Zebra',
  },
  {
    id: 10,
    img: 'kangaroo.jpg',
    name: 'Kangaroo',
  },
];

const reOrder = (cards) => {
  for (let i = cards.length - 1; i > 0; i--) {
    let randomNum = Math.floor(Math.random() * i);
    [cards[randomNum], cards[i]] = [cards[i], cards[randomNum]];
  }
};

function App() {
  const [clickedCards, setClickedCards] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const clickedCard = ({ name }) => {
    if (clickedCards.includes(name)) {
      if (score > bestScore) {
        setBestScore(score);
      }
      setScore(0);
      setClickedCards([]);
    } else {
      setScore(score + 1);
      setClickedCards([...clickedCards, name]);
    }
  };

  useEffect(() => {
    reOrder(cards);
  });

  const renderedCards = cards.map((card) => {
    return (
      <Card
        key={card.id}
        name={card.name}
        img={`${picturePath}${card.img}`}
        clickedCard={(e) => clickedCard(e.target.dataset)}
      />
    );
  });
  return (
    <div>
      <NavBar score={score} bestScore={bestScore} />
      <div className="card-container">{renderedCards}</div>
      <Footer />
    </div>
  );
}

export default App;
