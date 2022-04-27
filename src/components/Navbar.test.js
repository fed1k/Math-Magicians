import React from 'react';
import renderer from 'react-test-renderer';
import Navbar from './Navbar';
import { BrowserRouter } from 'react-router-dom';

const Navibar = ()=>{
    <BrowserRouter>
         <Navbar />
    </BrowserRouter>
 }
 
it('renders correctly', () => {
  const tree = renderer.create(<Navibar />).toJSON();
    expect(tree).toMatchSnapshot();
});

