import calculate from './calculate';

it('should return object and button name', () => {
  const object = {
    total: '',
    operation: '',
    next: '0',
  };

  const obj = {
    total: null,
    next: '0',
    operation: null,
  };
  expect(calculate(object, 'AC')).toStrictEqual(obj);
  expect(calculate({ total: '10', next: '4', operation: 'x' }, '=')).toStrictEqual({ total: '40', next: null, operation: null });
  expect(calculate({ total: '10', next: '5', operation: '÷' }, '=')).toEqual({ total: '2', next: null, operation: null });
  expect(calculate({ total: '10', next: '4', operation: '+' }, '=')).toStrictEqual({ total: '14', next: null, operation: null });
  expect(calculate({ total: '10', next: '4', operation: '-' }, '=')).toStrictEqual({ total: '6', next: null, operation: null });
});
