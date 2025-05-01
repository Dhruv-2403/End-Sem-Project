import React, { useState } from 'react';
import { GameCard } from '../GameCard/GameCard';
import { games } from '../../data/games';
import './Games.css';

const Games = ({ onAddToCart, cartItems }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isPending] = React.useTransition();

  const categories = ["All", ...new Set(games.map(game => game.category))];

  const filteredGames = games.filter(game => {
    const matchesCategory = selectedCategory === 'All' || game.category === selectedCategory;
    const matchesSearch = game.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className={`games-container ${isPending ? 'transitioning' : ''}`}>
      <h2>Games Library</h2>
      
      <div className="games-filters">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search games..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="category-selector">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="games-grid">
        {filteredGames.length === 0 ? (
          <div className="no-games">
            <span role="img" aria-label="sad">😕</span>
            <p>No games found. Try a different search or category.</p>
          </div>
        ) : (
          filteredGames.map((game) => {
            const isInCart = cartItems.some(item => item.id === game.id);
            return (
              <GameCard
                key={game.id}
                game={game}
                rating={game.rating}
                onRate={() => {}}
                isInCart={isInCart}
                onAddToCart={onAddToCart}
                featured={false}
              />
            );
          })
        )}
      </div>
    </div>
  );
};

export default Games;
