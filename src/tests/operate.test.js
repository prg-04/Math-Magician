import Big from 'big.js';
import operate from '../logic/operate';

describe('operate', () => {
  test('should add two numbers correctly', () => {
    const result = operate('5', '3', '+');
    expect(result).toBe(Big('5').plus('3').toString());
  });

  test('should subtract two numbers correctly', () => {
    const result = operate('10', '4', '-');
    expect(result).toBe(Big('10').minus('4').toString());
  });

  test('should multiply two numbers correctly', () => {
    const result = operate('7', '2', 'x');
    expect(result).toBe(Big('7').times('2').toString());
  });

  test('should divide two numbers correctly', () => {
    const result = operate('12', '3', '÷');
    expect(result).toBe(Big('12').div('3').toString());
  });

  test('should return error message when dividing by 0', () => {
    const result = operate('10', '0', '÷');
    expect(result).toBe("Can't divide by 0.");
  });

  test('should calculate modulo correctly', () => {
    const result = operate('13', '5', '%');
    expect(result).toBe(Big('13').mod('5').toString());
  });

  test('should return error message when calculating modulo with divisor 0', () => {
    const result = operate('15', '0', '%');
    expect(result).toBe("Can't find modulo as can't divide by 0.");
  });

  test('should throw an error for unknown operation', () => {
    expect(() => operate('7', '3', '^')).toThrow("Unknown operation '^'");
  });
});
