import React from 'react';
import keys from '../constants/constants';

const Calculator = () => (
  <div style={{ width: '50%' }}>
    <div className="container">
      <div className="display">0</div>
      <Button />
    </div>
  </div>
);

const Button = () => (
  <>
    {keys.map((key, idx) => (
      <button
        type="button"
        key={key}
        className="button"
        style={{
          gridColumn: idx === 16 ? 'span 2' : 'auto',
          backgroundColor:
            idx === 3 || idx === 7 || idx === 11 || idx === 15 || idx === 18
              ? '#ffb500'
              : 'inherit',
        }}
      >
        {key}
      </button>
    ))}
  </>
);

export default Calculator;
