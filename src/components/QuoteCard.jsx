import React from 'react';

function QuoteCard({ card }) {
  return (
    card && (
      <div className='QuoteCard'>
        <img src={card.image} alt={card.character} />
        <ul>
          <li>Nom: {card.character}</li>
          <li>Quote: {card.quote}</li>
        </ul>
      </div>
    )
  );
}

export default QuoteCard;
