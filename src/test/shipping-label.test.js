import React from 'react';
import renderer from 'react-test-renderer';
import ShippingLabel from '../features/shipping-label-maker/shipping-label';
test('ShippingLabel renders correctly', () => {
  const props = {
    data: {
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
    },
  };
  const tree = renderer
    .create(<ShippingLabel data={props.data} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
