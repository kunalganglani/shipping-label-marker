import React from 'react';
import renderer from 'react-test-renderer';
import Confirm from '../../features/shipping-label-maker/steps/step-five';
test('Confirm renders correctly', () => {
  const wizardContext = {
    from: {
      name: '',
      street: '',
      city: '',
      state: '',
      zip: '',
    },
    to: {
      name: '',
      street: '',
      city: '',
      state: '',
      zip: '',
    },
    weight: {
      weightValue: '',
      weightUnit: 'Pounds',
    },
    shippingOption: '1',
  };
  const handleAction = jest.fn();
  const tree = renderer
    .create(<Confirm wizardContext={wizardContext} onAction={handleAction} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
