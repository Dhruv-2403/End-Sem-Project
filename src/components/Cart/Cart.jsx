

import React, { useState } from 'react';
import './Cart.css';

export function Cart({ items, onRemove, onCheckout }) {
  const [showModal, setShowModal] = useState(false);
  const [checkoutSuccess, setCheckoutSuccess] = useState(false);

  const getTotalPrice = () => {
    return items.reduce((total, game) => total + game.price, 0).toFixed(2);
  };

  const handleCheckout = () => {
    setShowModal(false);
    setCheckoutSuccess(true);
    setTimeout(() => setCheckoutSuccess(false), 2500);
    onCheckout();
  };

  return (
    <div className="cart">
      <h2>Shopping Cart ({items.length} items)</h2>
      <div className="cart-items">
        {items.map(item => (
          <div key={item.cartId} className="cart-item">
            <span>{item.title}</span>
            <div>
              <span>${item.price}</span>
              <button 
                className="remove-button"
                onClick={() => onRemove(item.cartId)}
              >
                ×
              </button>
            </div>
          </div>
        ))}
      </div>
      <p>Total: ${getTotalPrice()}</p>


      {items.length > 0 && (
        <button 
          className="checkout-button"
          onClick={() => setShowModal(true)}
        >
          Checkout
        </button>
      )}



      {showModal && (
        <div className="cart-modal-overlay" onClick={() => setShowModal(false)}>
          <div className="cart-modal" onClick={e => e.stopPropagation()}>
            <h3>Confirm Checkout</h3>
            <ul>
              {items.map(item => (
                <li key={item.cartId}>{item.title} - ${item.price}</li>
              ))}
            </ul>
            <p><strong>Total: ${getTotalPrice()}</strong></p>
            <button className="confirm-btn" onClick={handleCheckout}>Confirm</button>
            <button className="cancel-btn" onClick={() => setShowModal(false)}>Cancel</button>
          </div>
        </div>
      )}
      


      {checkoutSuccess && (
        <div className="cart-success">
          <span role="img" aria-label="Success" style={{fontSize: '2rem'}}>✅</span>
          <p>Thank you for your purchase!</p>
        </div>
      )}
    </div>
  );
}

export default Cart