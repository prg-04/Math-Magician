import calculate, { isNumber } from './calculate';
import operate from './operate';

describe('calculate', () => {
  test('should clear calculator data when "AC" button is pressed', () => {
    const result = calculate(
      { total: '123', next: '456', operation: '+' },
      'AC',
    );
    expect(result).toEqual({ total: null, next: null, operation: null });
  });

  test('should append digits to next when a number button is pressed', () => {
    const result = calculate({ total: '123', next: '45', operation: '+' }, '6');
    expect(result).toEqual({ total: '123', next: '456', operation: '+' });
  });

  test('should update next with the pressed digit if next is "0"', () => {
    const result = calculate({ total: '123', next: '0', operation: '+' }, '7');
    expect(result).toEqual({ total: '123', next: '7', operation: '+' });
  });

  test('should handle "." button press correctly', () => {
    const result = calculate({ total: '123', next: '45', operation: '+' }, '.');
    expect(result).toEqual({ total: '123', next: '45.', operation: '+' });
  });

  test('should not allow multiple "." in next', () => {
    const result = calculate(
      { total: '123', next: '45.6', operation: '+' },
      '.',
    );
    expect(result).toEqual({ total: '123', next: '45.6', operation: '+' });
  });

  test('should perform the correct operation when "=" is pressed', () => {
    const result = calculate({ total: '12', next: '5', operation: '+' }, '=');
    expect(result).toEqual({ total: '17', next: null, operation: null });
  });

  test('should negate next value when "+/-" is pressed', () => {
    const result = calculate({ total: '12', next: '5', operation: '+' }, '+/-');
    expect(result).toEqual({ total: '12', next: '-5', operation: '+' });
  });
});
