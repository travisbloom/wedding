import * as React from 'react';
import * as renderer from 'react-test-renderer';
export const toMatchSnapshot = (component: React.ReactElement<any>) => {
  const tree = renderer.create(component).toJSON();
  expect(tree).toMatchSnapshot();
};
