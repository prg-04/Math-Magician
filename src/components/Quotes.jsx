import React, { useEffect, useState } from 'react';

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
      });
  }, []);
  return (
    <div className="quote">
      <h2 style={{ alignSelf: 'center' }}>Quote of the day</h2>
      <p style={{ textAlign: 'center', fontSize: '18px' }}>{quote}</p>
    </div>
  );
};

export default Quotes;
