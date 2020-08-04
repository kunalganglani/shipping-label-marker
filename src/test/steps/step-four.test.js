import React from 'react';
import renderer from 'react-test-renderer';
import GetShippingOptions from '../../features/shipping-label-maker/steps/step-four';
test('GetShippingOptions renders correctly', () => {
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
    .create(<GetShippingOptions wizardContext={wizardContext} onAction={handleAction} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
