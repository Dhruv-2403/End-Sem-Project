import React from 'react';
import './Footer.css';
import { Link }  from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>GameVerse Store</h3>
          <p>Your Ultimate Destination for Gaming Adventures</p>
          <div className="payment-methods">
            <img src="https://img.icons8.com/color/48/000000/visa.png" alt="Visa" />
            <img src="https://img.icons8.com/color/48/000000/mastercard.png" alt="Mastercard" />
            <img src="https://img.icons8.com/color/48/000000/paypal.png" alt="PayPal" />
            <img src="https://img.icons8.com/color/48/000000/apple-pay.png" alt="Apple Pay" />
          </div>
        </div>
        
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">Games</a></li>
            <li><a href="#">Categories</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="">FAQ</a></li>
            <li><a href="#news">Latest News</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Support</h4>
          <ul className="footer-links">
            <li><a href="#help">Help Center</a></li>
            <li><a href="#contact">Contact Us</a></li>
            <li><a href="#terms">Terms & Conditions</a></li>
            <li><a href="#privacy">Privacy Policy</a></li>
            <li><a href="#refund">Refund Policy</a></li>
            <li><a href="#support">24/7 Support</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Connect With Us</h4>
          <div className="social-links">
            <a href="https://facebook.com" target="_blank">
              <img src="https://img.icons8.com/color/48/000000/facebook-new.png" alt="Facebook" />
            </a>
            <a href="https://twitter.com" target="_blank">
              <img src="https://img.icons8.com/color/48/000000/twitter.png" alt="Twitter" />
            </a>
            <a href="https://instagram.com" target="_blank">
              <img src="https://img.icons8.com/color/48/000000/instagram-new.png" alt="Instagram" />
            </a>
            <a href="https://youtube.com" target="_blank">
              <img src="https://img.icons8.com/color/48/000000/youtube-play.png" alt="YouTube" />
            </a>
            <a href="https://discord.com" target="_blank">
              <img src="https://img.icons8.com/color/48/000000/discord-logo.png" alt="Discord" />
            </a>
          </div>
          <div className="newsletter">
            <h5>Subscribe to our Newsletter</h5>
            <div className="newsletter-form">
              <input type="email" placeholder="Enter your email" />
              <button>Subscribe</button>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p>@2025 GameVerse Store. All rights reserved.</p>
          <div className="app-store-links">
            <a href="https://www.apple.com/in/app-store/" className="app-store-link">
              <img style={{backgroundColor:"transparent"}} src="https://cdn-1.webcatalog.io/catalog/app-store-connect/app-store-connect-icon-filled-256.png?v=1743381079347" alt="App Store" />
            </a>
            <a href="#" className="app-store-link">
              <img src="https://img.icons8.com/color/48/000000/google-play.png" alt="Google Play" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;