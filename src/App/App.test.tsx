import * as React from 'react';
import { toMatchSnapshot } from '../tests';
import { App } from './App';

it('renders without crashing', () => {
  toMatchSnapshot(<App />);
});
