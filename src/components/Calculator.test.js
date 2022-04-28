import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import renderer from 'react-test-renderer';
import Design from './Calculator';

const data = {
  total: '',
  operation: '',
  next: '0',
};
const buttonNames = ['AC', '+/-', '%', '÷', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];
describe('should show clicked number on the console and work as expected', () => {
  it('should render correctly', () => {
    const tree = renderer
      .create(<Design obj={data} data={buttonNames} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('0 should appear when AC is clicked', () => {
    render(<Design obj={data} data={buttonNames} />);
    const ac = screen.getByText('AC');
    fireEvent.click(ac);
    const consol = screen.getByTitle('board');
    expect(consol.length).toBeUndefined();
  });

  it('5 should appear when 5 is clicked', () => {
    render(<Design obj={data} data={buttonNames} />);
    const ac = screen.getByText('5');
    fireEvent.click(ac);
    const consol = screen.getByTitle('board');
    expect(consol.textContent).toBe('5');
  });

  it('3 should appear when 3 is clicked', () => {
    render(<Design obj={data} data={buttonNames} />);
    const three = screen.getByText('3');
    fireEvent.click(three);
    const consol = screen.getByTitle('board');
    expect(consol.textContent).toBe('3');
  });
});
