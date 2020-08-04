import React from 'react';
import styled from '@emotion/styled';
import { getShippingOption, getShippingCost } from './shipping-cost';

const LabelContainer = styled.div`
  border-radius: 11px;
  padding: 10px;
  margin: 1rem;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  :hover {
    box-shadow: 0 8px 20px 0 rgba(0,0,0,0.2);
  }
`;

const ShippingLabel = (props) => {
  const {
    from, to, weight,
    shippingOption,
  } = props.data;
  return (
    <>
      <LabelContainer>
        <h2>Shipping Information</h2>
        {
          [
            `Shipping Option: ${getShippingOption(shippingOption)}`,
            `Weight: ${weight.weightValue} ${weight.weightUnit}`,
            `Cost: $ ${getShippingCost(weight, shippingOption)}`,
          ].map((item, index) => <h3 key={index}>{item}</h3>)
        }
      </LabelContainer>
      <LabelContainer>
        <h2>Sender&apos;s Information</h2>
        {[
          `Name: ${from.name}`,
          `Street: ${from.street}`,
          `City: ${from.city}`,
          `State: ${from.state}`,
          `Zip: ${from.zip}`,
        ].map((item, index) => <h4 key={index}>{item}</h4>)}
      </LabelContainer>
      <LabelContainer>
        <h2>Receiver&apos;s Information</h2>
        {[
          `Name: ${to.name}`,
          `Street: ${to.street}`,
          `City: ${to.city}`,
          `State: ${to.state}`,
          `Zip: ${to.zip}`,
        ].map((item, index) => <h4 key={index}>{item}</h4>)}
      </LabelContainer>
    </>
  );
};

export default ShippingLabel;
