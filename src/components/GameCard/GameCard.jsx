import React, { useState } from 'react';
import StarRating from '../StarRating/StarRating';
import './GameCard.css';

export function GameCard({ game, rating, onRate, isInCart, onAddToCart, featured }) {
  const [showTrailer, setShowTrailer] = useState(false);
  const isYoutube = game.trailer && game.trailer.includes('youtube');

  return (
    <div className={`game-card${featured ? ' featured' : ''}`}>
      {featured && <span className="featured-badge">🌟</span>}
      <span className="category-label">{game.category}</span>

      <div className="game-image-container">
        <img src={game.image} alt={game.title} className="game-image" />
        {game.trailer && (
          <button
            className="trailer-btn"
            onClick={() => setShowTrailer(true)}
          >
            ▶ Watch Trailer
          </button>
        )}
      </div>

      <div className="game-details">
        <h3>{game.title}</h3>
        <div className="game-rating">
          <StarRating rating={rating} onRate={onRate} gameId={game.id} />
        </div>
        <p className="game-price">${game.price}</p>
        <p className="game-description">{game.description}</p>
        
        <div className="game-actions">
          {!isInCart ? (
            <button className="add-to-cart-btn" onClick={() => onAddToCart(game)}>
              Add to Cart
            </button>
          ) : (
            <button className="in-cart-btn" disabled>
              In Cart
            </button>
          )}
        </div>
      </div>

      {showTrailer && (
        <div className="trailer-modal" onClick={() => setShowTrailer(false)}>
          <div className="trailer-modal-content" onClick={e => e.stopPropagation()}>
            <button className="trailer-close" onClick={() => setShowTrailer(false)}>&times;</button>
            <div style={{ textAlign: 'center', marginBottom: '1em' }}>
              <h3 style={{ margin: 0, color: '#1565c0', fontWeight: 800, fontSize: '1.25em', letterSpacing: '0.01em' }}>
                Official Trailer for {game.title}
              </h3>
              <div style={{ fontSize: '1em', color: '#444', marginTop: '0.2em', marginBottom: '0.7em' }}>
                <span role="img" aria-label="video">🎬</span> {game.title} &ndash; Official Video Trailer
              </div>
            </div>
            {isYoutube ? (
              <iframe
                width="100%"
                height="315"
                src={game.trailer}
                title={`Official Trailer for ${game.title}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ) : (
              <video controls width="100%" src={game.trailer} />
            )}
          </div>
        </div>
      )}
    </div>
  );
}
