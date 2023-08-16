import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { keys } from '../constants/constants';
import calculate from '../logic/calculate';
import { StyledButton, StyledH3 } from '../Styled';

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
    <div className="calc">
      <StyledH3>Let&apos;s do some math!</StyledH3>
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
      <StyledButton
        type="button"
        key={key}
        onClick={() => handleClick(key)}
        idx={idx}
      >
        {key}
      </StyledButton>
    ))}
  </>
);

Button.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default Calculator;
