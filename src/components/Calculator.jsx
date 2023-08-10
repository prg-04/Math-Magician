import React, { useState } from 'react';
import PropTypes from 'prop-types';
import keys from '../constants/constants';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [num, setNum] = useState(0);
  const [calculatorData, setcalculatorData] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (keyName) => {
    setcalculatorData((prevData) => {
      const newData = calculate(prevData, keyName);

      if (newData.next !== null) {
        setNum(newData.next);
      } else {
        setNum(newData.total);
      }

      return newData;
    });
  };

  return (
    <div style={{ width: '50%' }}>
      <div className="container">
        <div className="display">{num || 0}</div>
        <Button handleClick={handleClick} calculatorData={calculatorData} />
      </div>
    </div>
  );
};

const Button = ({ handleClick }) => (
  <>
    {keys.map((key, idx) => (
      <button
        type="button"
        key={key}
        className="button"
        onClick={() => handleClick(key)}
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

Button.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default Calculator;
