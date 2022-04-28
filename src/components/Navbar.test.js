import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Navbar';

const Navibar = () => {
  <BrowserRouter>
    <Navbar />
  </BrowserRouter>;
};

it('renders correctly', () => {
  const tree = renderer.create(<Navibar />).toJSON();
  expect(tree).toMatchSnapshot();
});


