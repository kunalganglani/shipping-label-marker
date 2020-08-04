import React from 'react';
import styled from '@emotion/styled';
import { getShippingCost, getShippingOption } from '../shipping-cost';

const ConfirmationStepContainer = styled.div`
  h4 {
    margin: 0.5rem;
    font-weight: normal;
  }
`;
const Confirm = (props) => {
  const {
    from, to, weight, shippingOption,
  } = props.wizardContext;
  return (
    <ConfirmationStepContainer>
      <h3>Shipping Information</h3>
      {[
        `Shipping Option: ${getShippingOption(shippingOption)}`,
        `Weight: ${weight.weightValue} ${weight.weightUnit}`,
        `Cost: $ ${getShippingCost(weight, shippingOption)}`,
      ].map((item, index) => <h4 key={index}>{item}</h4>)}
      <h3>Sender&apos;s Information</h3>
      {[
        `Name: ${from.name}`,
        `Street: ${from.street}`,
        `City: ${from.city}`,
        `State: ${from.state}`,
        `Zip: ${from.zip}`,
      ].map((item, index) => <h4 key={index}>{item}</h4>)}
      <h3>Receiver&apos;s Information</h3>
      {[
        `Name: ${to.name}`,
        `Street: ${to.street}`,
        `City: ${to.city}`,
        `State: ${to.state}`,
        `Zip: ${to.zip}`,
      ].map((item, index) => <h4 key={index}>{item}</h4>)}
    </ConfirmationStepContainer>
  );
};

export default Confirm;
