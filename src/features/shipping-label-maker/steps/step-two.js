import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import styled from '@emotion/styled';

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: space-around;
`;

const GetReceiversAddress = (props) => {
  const receiver = props.wizardContext;
  const [touched, setTouched] = useState({});
  const { onAction } = props;
  const changeAction = (evt) => {
    const idElement = evt.target.id;
    touched[idElement] = true;
    setTouched(touched);
    onAction(evt);
  };
  const errorMessages = {
    fieldIsRequired: 'Field is required',
  };
  return (
    <>
      <h3>Enter the receiver&apos;s address</h3>
      <TextField
        helperText={(receiver.name === '' && touched.name) && errorMessages.fieldIsRequired}
        error={receiver.name === '' && touched.name}
        fullWidth
        variant="outlined"
        id="name"
        label="Name"
        type="text"
        margin="normal"
        value={receiver.name}
        onChange={changeAction}
      />
      <TextField
        variant="outlined"
        error={receiver.street === '' && touched.street}
        helperText={(receiver.street === '' && touched.street) && errorMessages.fieldIsRequired}
        id="street"
        fullWidth
        label="Street"
        type="text"
        margin="normal"
        value={receiver.street}
        onChange={changeAction}
      />
      <FlexContainer>
        <TextField
          error={receiver.city === '' && touched.city}
          helperText={(receiver.city === '' && touched.city) && errorMessages.fieldIsRequired}
          variant="outlined"
          id="city"
          label="City"
          type="text"
          margin="normal"
          value={receiver.city}
          onChange={changeAction}
        />
        <TextField
          error={receiver.state === '' && touched.state}
          helperText={(receiver.state === '' && touched.state) && errorMessages.fieldIsRequired}
          variant="outlined"
          id="state"
          label="State"
          type="text"
          margin="normal"
          value={receiver.state}
          onChange={changeAction}
        />
        <TextField
          error={receiver.zip === '' && touched.zip}
          helperText={(receiver.zip === '' && touched.zip) && errorMessages.fieldIsRequired}
          variant="outlined"
          id="zip"
          label="Zip"
          type="number"
          margin="normal"
          value={receiver.zip}
          onChange={changeAction}
        />
      </FlexContainer>
    </>
  );
};

export default GetReceiversAddress;
