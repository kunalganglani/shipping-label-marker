import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const GetShippingOptions = (props) => {
  const { onAction } = props;
  const { shippingOption } = props.wizardContext;
  return (
    <div>
      <h3>Select Shipping Option</h3>
      <RadioGroup aria-label="shipping option group" name="shippingOption" value={shippingOption} onChange={onAction}>
        <FormControlLabel value="1" control={<Radio />} label="Ground" />
        <FormControlLabel value="2" control={<Radio />} label="Priority" />
      </RadioGroup>
    </div>
  );
};

export default GetShippingOptions;
