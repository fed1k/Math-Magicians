import operate from './operate';
// import { test, expect } from '@testing-library/jest-dom'

it('should be one of the operators and should not be string', () => {
  expect(operate('8', '4', '-')).toBe('4');
  expect(operate('8', '4', 'x')).toBe('32');
  expect(operate('8', '4', '+')).toBe('12');
  expect(operate('6', '2', '÷')).toBe('3');
});
