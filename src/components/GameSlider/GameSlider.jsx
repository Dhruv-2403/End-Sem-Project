// src/components/GameSlider/GameSlider.jsx
import React, { useState, useEffect } from 'react';
import './GameSlider.css';

const GameSlider = ({ games, autoplay = true }) => {
  const [index, setIndex] = useState(0);
  const total = games.length;

  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % total);
  };

  const prevSlide = () => {
    setIndex((prevIndex) => (prevIndex - 1 + total) % total);
  };

  useEffect(() => {
    if (autoplay) {
      const timer = setInterval(nextSlide, 5000);
      return () => clearInterval(timer);
    }
  }, [index, autoplay]);

  return (
    <div className="game-slider-container">
      <div className="game-slider">
        <button className="slider-btn prev" onClick={prevSlide}>&lt;</button>
        <div className="slider-track">
          <div 
            className="slider-item"
            style={{
              transform: `translateX(-${index * 100}%)`,
              transition: 'transform 0.5s ease-in-out'
            }}
          >
            {games.map((game) => (
              <div key={game.id} className="slider-content">
                <img 
                  src={game.image} 
                  alt={game.title} 
                  className="slider-image"
                />
                <div className="slider-info">
                  <h3>{game.title}</h3>
                  <p>Rating: {game.rating} ⭐</p>
                  <p>Price: ${game.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button className="slider-btn next" onClick={nextSlide}>&gt;</button>
      </div>

      <div className="slider-dots">
        {games.map((_, i) => (
          <span 
            key={i}
            className={`dot ${i === index ? 'active' : ''}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default GameSlider;