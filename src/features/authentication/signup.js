import React, { useCallback } from 'react';
import { withRouter } from 'react-router';
import styled from '@emotion/styled';
import { TextField, Button, Snackbar } from '@material-ui/core';
import Alert from '../../core/components/wizard/alert/alert';
import app from './base';

const SignupContainer = styled.div`
  padding: 8px;
  form {
    max-width: 300px;
    margin: auto;
  }
  button {
    margin: 8px 8px 0px 0px;
  }
`;

const SignUp = ({ history }) => {
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = React.useState('');
  const [isError, setIsError] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  const handleSignUp = useCallback(async (event) => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      await app
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value);
      history.push('/');
    } catch (error) {
      console.log(error);
      setMessage(error.message);
      setIsError(true);
      setOpen(true);
    }
  }, [history]);

  return (
    <SignupContainer>
      <h1>Sign Up</h1>
      <form onSubmit={handleSignUp}>
        <TextField
          fullWidth
          variant="outlined"
          id="email"
          label="Email"
          type="text"
          name="email"
          margin="normal"
        />
        <TextField
          fullWidth
          variant="outlined"
          id="password"
          label="Password"
          type="password"
          margin="normal"
        />
        <Button variant="contained" color="primary" type="submit">Sign Up</Button>
      </form>
      <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={isError ? 'error' : 'success'}>
          {message}
        </Alert>
      </Snackbar>
    </SignupContainer>
  );
};

export default withRouter(SignUp);
