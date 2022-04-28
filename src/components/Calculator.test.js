import React from "react";
import Design from "./Calculator";
import renderer from 'react-test-renderer';

it('should render correctly', ()=>{
    const data = {
        total: '',
        operation: '',
        next: '0'
      }
    const buttonNames = ['AC', '+/-', '%', '÷', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];
    const tree = renderer
        .create( <Design obj={data} data={buttonNames} />)
        .toJSON();
    expect(tree).toMatchSnapshot();
})