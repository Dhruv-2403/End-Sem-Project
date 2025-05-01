import React from 'react';
import './AboutUs.css';


const AboutUs = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <div className="about-header">
          <h1 className="about-title">About GameVerse Store</h1>
        
        </div>
        
        <div className="about-section">
          <h2 className="section-title">Our Story</h2>
          <p className="section-text">
            Welcome to GameVerseStore, your one-stop destination for amazing games! 
            We're passionate about gaming and dedicated to providing you with the 
            best gaming experience.
          </p>
        </div>

        <div className="about-section">
          <h2 className="section-title">Our Mission</h2>
          <p className="section-text">
            Our mission is to make gaming accessible and enjoyable for everyone. 
            We carefully curate our collection to bring you the best games from 
            various genres and platforms.
          </p>
        </div>

        <div className="about-section">
          <h2 className="section-title">Why Choose Us</h2>
          <div className="features-grid">
            <div className="feature-card">
              <span className="feature-icon">🎮</span>
              <h3>Wide Selection</h3>
              <p>Explore our vast collection of games</p>
            </div>
            <div className="feature-card">
              <span className="feature-icon">⭐</span>
              <h3>Quality Games</h3>
              <p>Only the best games make it to our store</p>
            </div>
            <div className="feature-card">
              <span className="feature-icon">⚡</span>
              <h3>Fast Delivery</h3>
              <p>Get your games quickly and easily</p>
            </div>
          </div>
        </div>

        <div className="about-section">
          <h2 className="section-title">Contact Us</h2>
          <div className="contact-info">
            <div className="contact-item">
              <span className="contact-icon">📧</span>
              <p>support@gamstore.com</p>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📱</span>
              <p>+1 234 567 890</p>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📍</span>
              <p>123 Gaming Street, GameCity</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;