import React from 'react';
import renderer from 'react-test-renderer';
import Alert from '../../core/components/wizard/alert/alert';
test('Alert renders correctly', () => {
  const handleClose = jest.fn();
  const isError = true;
  const tree = renderer
    .create(<Alert onClose={handleClose} severity={isError ? 'error' : 'success'}></Alert>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
