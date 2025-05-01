import React, { useState } from 'react';
import './StarRating.css'

const StarRating = ({ rating, maxRating = 5, onRate }) => {
  const [currentRating, setCurrentRating] = useState(rating);

  const handleStarClick = (starIndex) => {

    if (starIndex <= currentRating) {
      setCurrentRating(starIndex - 1);
      if (onRate) {
        onRate(starIndex - 1);
      }
    }

    else {
      setCurrentRating(starIndex);
      if (onRate) {
        onRate(starIndex);
      }
    }
  };

  return (
    <div className="star-rating">
      {[...Array(maxRating)].map((_, index) => {
        const starIndex = index + 1;
        const isFilled = starIndex <= currentRating;
        
        return (
          <span
            key={index}
            className={`star ${isFilled ? 'filled' : 'empty'}`}
            onClick={() => handleStarClick(starIndex)}
            title={`Click to ${isFilled ? 'unfill' : 'fill'} this star`}
          >
            ★
          </span>
        );
      })}
    </div>
  );
};

export default StarRating;