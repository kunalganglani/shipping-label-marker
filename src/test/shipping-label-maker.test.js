import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import ShippingLabelMaker from '../features/shipping-label-maker/shipping-label-maker';
import ShippingLabel from '../features/shipping-label-maker/shipping-label';

Enzyme.configure({ adapter: new Adapter() });

describe('ShippingLabelMaker tests', () => {
  let wrapper;
  const props = {
    wizardContext: {
      from: {
        name: 'name',
        street: 'street',
        city: 'city',
        state: 'state',
        zip: 'zip',
      },
      to: {
        name: 'name',
        street: 'street',
        city: 'city',
        state: 'state',
        zip: 'zip',
      },
      weight: 11,
      shippingOption: '1',
    },
  };

  test(' renders correctly', () => {
    const tree = renderer
      .create(<ShippingLabelMaker />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('should print a shipping label when createLabel is called', () => {
    wrapper = shallow(<ShippingLabelMaker />);
    wrapper.instance().createLabel(props.wizardContext);
    expect(wrapper.find(ShippingLabel).length).toEqual(1);
  });
  test('handleSender is called', () => {
    const setStateSpy = jest.spyOn(ShippingLabelMaker.prototype, 'setState');
    wrapper = shallow(<ShippingLabelMaker />);
    const mockEvent = {
      target: {
        value: 1,
      },
    };
    wrapper.instance().handleSender(mockEvent);
    expect(setStateSpy).toHaveBeenCalled();
  });

  test('handleReceiver is called', () => {
    const setStateSpy = jest.spyOn(ShippingLabelMaker.prototype, 'setState');
    wrapper = shallow(<ShippingLabelMaker />);
    const mockEvent = {
      target: {
        value: 1,
      },
    };
    wrapper.instance().handleReceiver(mockEvent);
    expect(setStateSpy).toHaveBeenCalled();
  });

  test('handleWeight is called', () => {
    const setStateSpy = jest.spyOn(ShippingLabelMaker.prototype, 'setState');
    wrapper = shallow(<ShippingLabelMaker />);
    const mockEvent = {
      target: {
        value: 1,
      },
    };
    wrapper.instance().handleWeight(mockEvent);
    expect(setStateSpy).toHaveBeenCalled();
  });
  test('handleShipping is called', () => {
    const setStateSpy = jest.spyOn(ShippingLabelMaker.prototype, 'setState');
    wrapper = shallow(<ShippingLabelMaker />);
    const mockEvent = {
      target: {
        value: 1,
      },
    };
    wrapper.instance().handleShipping(mockEvent);
    expect(setStateSpy).toHaveBeenCalled();
  });

  test('isReceiverValid is called', () => {
    wrapper = shallow(<ShippingLabelMaker />);
    expect(wrapper.instance().isReceiverValid()).toEqual(false);
  });
});
