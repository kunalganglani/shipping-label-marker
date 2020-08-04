import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import styled from '@emotion/styled';

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: space-around;
`;

const GetSendersAddress = (props) => {
  const sender = props.wizardContext;
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
      <h3>Enter the sender&apos;s address</h3>
      <TextField
        helperText={(sender.name === '' && touched.name) && errorMessages.fieldIsRequired}
        error={sender.name === '' && touched.name}
        fullWidth
        variant="outlined"
        id="name"
        label="Name"
        type="text"
        margin="normal"
        value={sender.name}
        onChange={changeAction}
      />
      <TextField
        variant="outlined"
        error={sender.street === '' && touched.street}
        helperText={(sender.street === '' && touched.street) && errorMessages.fieldIsRequired}
        id="street"
        fullWidth
        label="Street"
        type="text"
        margin="normal"
        value={sender.street}
        onChange={changeAction}
      />
      <FlexContainer>
        <TextField
          error={sender.city === '' && touched.city}
          helperText={(sender.city === '' && touched.city) && errorMessages.fieldIsRequired}
          variant="outlined"
          id="city"
          label="City"
          type="text"
          margin="normal"
          value={sender.city}
          onChange={changeAction}
        />
        <TextField
          error={sender.state === '' && touched.state}
          helperText={(sender.state === '' && touched.state) && errorMessages.fieldIsRequired}
          variant="outlined"
          id="state"
          label="State"
          type="text"
          margin="normal"
          value={sender.state}
          onChange={changeAction}
        />
        <TextField
          error={sender.zip === '' && touched.zip}
          helperText={(sender.zip === '' && touched.zip) && errorMessages.fieldIsRequired}
          variant="outlined"
          id="zip"
          label="Zip"
          type="number"
          margin="normal"
          value={sender.zip}
          onChange={changeAction}
        />
      </FlexContainer>
    </>
  );
};

export default GetSendersAddress;
