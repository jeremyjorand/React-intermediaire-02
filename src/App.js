import './App.css';
import { useState } from 'react';
import axios from 'axios';

import QuoteCard from './components/QuoteCard';

function App() {
  const [quoteCard, setQuoteCard] = useState(null);

  const getQuoteCard = () => {
    axios
      .get('https://simpsons-quotes-api.herokuapp.com/quotes')
      .then(({ data }) => {
        setQuoteCard(data[0]);
      });
  };

  return (
    <div className='App'>
      <button type='button' onClick={getQuoteCard}>
        Citation
      </button>
      <QuoteCard card={quoteCard} />
    </div>
  );
}

export default App;
