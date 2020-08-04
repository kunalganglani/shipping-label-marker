import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import GetSenderAddress from '../../features/shipping-label-maker/steps/step-one';

Enzyme.configure({ adapter: new Adapter() });
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

test('GetSenderAddress renders correctly', () => {
  const handleAction = jest.fn();
  const tree = renderer
    .create(<GetSenderAddress wizardContext={wizardContext.from} onAction={handleAction} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('createAction is called', () => {
  const someFunction = jest.fn();
  const wrapper = shallow(<GetSenderAddress wizardContext={wizardContext.from} onAction={someFunction} />);
  wrapper.find('WithStyles(ForwardRef(TextField))').first().simulate('change', {
    target: {
      value: 1,
    },
  });
  expect(someFunction).toHaveBeenCalled();
});
