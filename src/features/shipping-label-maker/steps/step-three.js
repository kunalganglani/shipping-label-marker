import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import styled from '@emotion/styled';

const WeightStepContainer = styled.div`
  div {
    margin-right: 1rem;
    margin-bottom: 1rem;
  }
`;
const GetWeight = (props) => {
  const weight = props.wizardContext;
  const [touched, setTouched] = useState({});
  const changeAction = (evt) => {
    const idElement = evt.target.id;
    touched[idElement] = true;
    setTouched(touched);
    onAction(evt);
  };
  const errorMessages = {
    fieldIsRequired: 'Field is required',
  };
  const handleChange = (evt) => {
    onAction(evt);
  };
  const { onAction } = props;
  return (
    <WeightStepContainer>
      <h3>Enter Weight</h3>
      <TextField
        helperText={(weight === '' && touched.weight) && errorMessages.fieldIsRequired}
        error={weight === '' && touched.weight}
        variant="outlined"
        id="weightValue"
        label="Weight"
        type="number"
        value={weight.weightValue}
        onChange={changeAction}
      />
      <FormControl variant="outlined">
        <InputLabel id="demo-simple-select-outlined-label">Weight Type</InputLabel>
        <Select
          labelId="get-weight-type-label"
          id="weightUnit"
          value={weight.weightUnit}
          onChange={handleChange}
          label="Weight Type"
        >
          <MenuItem value="Pounds">Pounds</MenuItem>
          <MenuItem value="KG">KG</MenuItem>
          <MenuItem value="Ounces">Ounces</MenuItem>
        </Select>
      </FormControl>
    </WeightStepContainer>
  );
};

export default GetWeight;
