import React, { useEffect, useState } from 'react';
import { StyledH2, Styledp } from '../Styled';

const Quotes = () => {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    const url = 'https://api.api-ninjas.com/v1/quotes?category=learning';
    fetch(url, {
      headers: {
        'x-Api-Key': 'fAPtdgymqgyTlllzbvBkHw==xh7QTqNdg39f8ojz',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setQuote(data[0].quote);
      })
      .catch((err) => setQuote(err.message));
  }, []);

  return (
    <div className="quote">
      <StyledH2 fontSize="1.9rem" color="lightseagreen">
        Quote of the day
      </StyledH2>
      <Styledp>{quote || 'Loading...'}</Styledp>
    </div>
  );
};

export default Quotes;
