import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router';
import App from '../../App';
test('Login renders correctly', () => {
  const tree = renderer
    .create(
      <MemoryRouter initialEntries={['/login']}>
        <App />
      </MemoryRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
test('Signup renders correctly', () => {
  const tree = renderer
    .create(
      <MemoryRouter initialEntries={['/signup']}>
        <App />
      </MemoryRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
