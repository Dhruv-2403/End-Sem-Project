// src/components/pages/Featured.jsx
import React from 'react';
import { GameCard } from '../GameCard/GameCard';
import { games } from '../../data/games';
import './Featured.css';

const Featured = () => {
  const featuredGames = games
    .slice()
    .sort((a, b) => b.rating - a.rating || b.price - a.price)
    .slice(0, 6);

  return (
    <div className="featured-container">
      <h2>Featured Games</h2>
      <div className="featured-grid">
        {featuredGames.map((game) => (
          <GameCard
            key={game.id}
            game={game}
            featured
          />
        ))}
      </div>
    </div>
  );
};

export default Featured;