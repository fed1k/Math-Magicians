import React from "react";
import Home from "./Home";
import renderer from 'react-test-renderer';

it('should render correctly', ()=>{
    const tree = renderer
        .create(<Home />)
        .toJSON();
    expect(tree).toMatchSnapshot();
})