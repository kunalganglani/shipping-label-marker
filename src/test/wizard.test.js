import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Wizard from '../core/components/wizard/wizard';
import Header from '../core/header';
import GetSenderAddress from '../features/shipping-label-maker/steps/step-one';
import GetReceiversAddress from '../features/shipping-label-maker/steps/step-two';
import GetWeight from '../features/shipping-label-maker/steps/step-three';
import GetShippingOptions from '../features/shipping-label-maker/steps/step-four';
import Confirm from '../features/shipping-label-maker/steps/step-five';

Enzyme.configure({ adapter: new Adapter() });

describe('Wizard component tests', () => {
  let wrapper;
  const props = {
    header: Header,
    steps: [
      <GetSenderAddress onAction={() => {}} wizardContext={{}} />,
      <GetReceiversAddress onAction={() => {}} wizardContext={{}} />,
      <GetWeight onAction={() => {}} wizardContext={{}} />,
      <GetShippingOptions onAction={() => {}} wizardContext={{}} />,
      <Confirm onAction={() => {}} wizardContext={{}} />,
    ],
    wizardContext: {},
    onComplete: (wizardContext) => wizardContext,
  };
  describe('Wizard should move backwards and forwards from sent by steps', () => {
    beforeEach(() => {
      wrapper = shallow(<Wizard {...props} />);
    });
    it('currentStep should update respective to next and prev selected', () => {
      expect(wrapper.state('currentStep')).toEqual(1);
      wrapper.instance().nextSteps(2);
      expect(wrapper.state('currentStep')).toEqual(2);
      wrapper.instance().previousSteps(1);
      expect(wrapper.state('currentStep')).toEqual(1);
    });

    it('should render GetReceiverAddress component when currentStep is 2', () => {
      expect(wrapper.find(GetSenderAddress).length).toEqual(1);
      wrapper.instance().nextSteps(2);
      expect(wrapper.find(GetReceiversAddress).length).toEqual(1);
    });

    it('should render GetWeight component when proceeding to next step from step 2', () => {
      expect(wrapper.find(GetSenderAddress).length).toEqual(1);
      wrapper.instance().nextSteps(2);
      wrapper.instance().nextSteps(2);
      expect(wrapper.find(GetWeight).length).toEqual(1);
    });

    it('should be able to proceed from step 1 to step 5', () => {
      expect(wrapper.find(GetSenderAddress).length).toEqual(1);
      wrapper.instance().nextSteps(2);
      expect(wrapper.find(GetReceiversAddress).length).toEqual(1);
      wrapper.instance().nextSteps(2);
      expect(wrapper.find(GetWeight).length).toEqual(1);
      wrapper.instance().nextSteps(2);
      expect(wrapper.find(GetShippingOptions).length).toEqual(1);
      wrapper.instance().nextSteps(2);
      expect(wrapper.find(Confirm).length).toEqual(1);
    });

    it('should be able to proceed from step 5 to step 1', () => {
      expect(wrapper.find(GetSenderAddress).length).toEqual(1);
      wrapper.instance().nextSteps(2);
      wrapper.instance().nextSteps(2);
      wrapper.instance().nextSteps(2);
      wrapper.instance().nextSteps(2);
      expect(wrapper.find(Confirm).length).toEqual(1);
      wrapper.instance().previousSteps(1);
      expect(wrapper.find(GetShippingOptions).length).toEqual(1);
      wrapper.instance().previousSteps(1);
      expect(wrapper.find(GetWeight).length).toEqual(1);
      wrapper.instance().previousSteps(1);
      expect(wrapper.find(GetReceiversAddress).length).toEqual(1);
      wrapper.instance().previousSteps(1);
      expect(wrapper.find(GetSenderAddress).length).toEqual(1);
    });
  });
});
