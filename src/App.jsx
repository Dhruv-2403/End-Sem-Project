import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

import Games from './components/pages/Games';
import Categories from './components/pages/Categories';
import Featured from './components/pages/Featured';
import AboutUs from './components/pages/AboutUs';
import FAQ from './components/pages/FAQ';

import GameSlider from './components/GameSlider/GameSlider';
import { Cart } from './components/Cart/Cart';
import { games } from './data/games';

function App() {
  const [cart, setCart] = useState([]);
  const [gameRatings, setGameRatings] = useState(
    games.reduce((acc, game) => ({ ...acc, [game.id]: game.rating }), {})
  );
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['All', ...new Set(games.map(game => game.category))];

  const filteredGames = games.filter(game => {
    const matchesCategory = selectedCategory === 'All' || game.category === selectedCategory;
    const matchesSearch = game.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const addToCart = (game) => {
    if (!cart.find(item => item.id === game.id)) {
      setCart([...cart, { ...game, cartId: Date.now() }]);
    }
  };

  const removeFromCart = (cartId) => {
    setCart(cart.filter(item => item.cartId !== cartId));
  };

  const handleRating = (gameId, rating) => {
    setGameRatings(prev => ({ ...prev, [gameId]: rating }));
  };

  const handleCheckout = () => {
    alert(`Checkout completed! Total: $${cart.reduce((total, game) => total + game.price, 0).toFixed(2)}`);
    setCart([]);
  };

  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route
              path="/"
              element={
                <div className="game-store">
                  <div className="main-heading">
                    <h1
                      className="interactive-heading"
              
                      aria-label="Welcome to Game Store"
                      title="Welcome! Discover and play amazing games."
                    >
                      Welcome to{' '}
                      <span className="gamestore-highlight" >
                        Game Store
                        <span
                          className="sparkle-emoji"
                          role="img"
                          aria-label="sparkles"
                        
                        >
                          ✨
                        </span>
                      </span>
                    </h1>
                    <p>Your one-stop shop for amazing games</p>
                    <GameSlider
                      games={games}
                      cardsToShow={3}
                      onRate={(game, rating) => handleRating(game.id, rating)}
                      onAddToCart={addToCart}
                      cartGames={cart.map(item => item.id)}
                    />
                  </div>
                </div>
              }
            />
            <Route
              path="/games"
              element={
                <Games
                  onAddToCart={addToCart}
                  cartItems={cart}
                />
              }
            />
            <Route path="/categories" element={<Categories />} />
            <Route path="/featured" element={<Featured />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/faq" element={<FAQ />} />
          </Routes>
        </main>
        <Cart items={cart} onRemove={removeFromCart} onCheckout={handleCheckout} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
