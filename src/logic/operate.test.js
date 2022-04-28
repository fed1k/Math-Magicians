import operate from './operate';
// import { test, expect } from '@testing-library/jest-dom'

it('should be one of the operators and should not be string', () => {
  expect(operate('1', '4', '-')).toMatch(/.+/i);
  expect(operate('8', '4', '-')).not.toMatch(/a-zA-Z/i);
});
