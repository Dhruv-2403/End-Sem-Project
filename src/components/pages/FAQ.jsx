// src/components/pages/FAQ.jsx
import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const faqItems = [
    {
      question: "How do I create an account?",
      answer: "To create an account, click on the 'Sign Up' button in the top right corner and follow the registration process."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept credit cards, debit cards, PayPal, and Apple Pay. All transactions are processed securely."
    },
    {
      question: "How long does shipping take?",
      answer: "Standard shipping takes 3-5 business days. Express shipping is available for 1-2 day delivery."
    },
    {
      question: "Can I return a game?",
      answer: "Yes, you can return most games within 30 days of purchase. Digital downloads are non-refundable."
    },
    {
      question: "What is your privacy policy?",
      answer: "We take privacy seriously. Your personal information is protected and never shared with third parties without your consent."
    }
  ];

  return (
    <div className="faq-container">
      <h1>Frequently Asked Questions</h1>
      <div className="faq-grid">
        {faqItems.map((item, index) => (
          <div 
            key={index} 
            className={`faq-item ${activeQuestion === index ? 'active' : ''}`}
            onClick={() => setActiveQuestion(activeQuestion === index ? null : index)}
          >
            <div className="faq-question">
              <span>{index + 1}.</span>
              <h3>{item.question}</h3>
              <span className="faq-arrow">▼</span>
            </div>
            <div className="faq-answer">
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;