// src/components/pages/Categories.jsx
import React from 'react';
import { games } from '../../data/games';
import './Categories.css';

const Categories = () => {
  const categories = [...new Set(games.map(game => game.category))];
  
  return (
    <div className="categories-container">
      <h2>Game Categories</h2>
      <div className="categories-grid">
        {categories.map((category) => (
          <div key={category} className="category-card">
            <h3>{category}</h3>
            <div className="category-games">
              {games
                .filter(game => game.category==category)
                .slice(0, 3)
                .map(game => (
                  <div key={game.id} className="category-game">
                    <img src={game.image} alt={game.title} />
                    <h4>{game.title}</h4>
                    <p>${game.price}</p>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;