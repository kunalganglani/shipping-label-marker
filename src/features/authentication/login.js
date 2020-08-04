import React, { useCallback, useContext } from 'react';
import { withRouter, Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import { TextField, Button, Snackbar } from '@material-ui/core';
import styled from '@emotion/styled';
import Alert from '../../core/components/wizard/alert/alert';
import app from './base';
import { AuthContext } from './Auth';

const LoginContainer = styled.div`
  padding: 8px;
  form {
    max-width: 300px;
    margin: auto;
  }
  button {  
    margin: 8px 8px 0px 0px;
  }
`;
const Login = ({ history }) => {
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = React.useState('');
  const [isError, setIsError] = React.useState(false);
  const handleLogin = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push('/');
      } catch (error) {
        setMessage(error.message);
        setIsError(true);
        setOpen(true);
      }
    },
    [history]
  );

  const handleClose = () => {
    setOpen(false);
  };
  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <LoginContainer>
      <h1>Log in</h1>
      <form onSubmit={handleLogin}>
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
        <Button variant="contained" color="primary" type="submit">Log In</Button>
        <Button component={Link} to="/signup">
          Sign up
        </Button>
      </form>
      <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={isError ? 'error' : 'success'}>
          {message}
        </Alert>
      </Snackbar>
    </LoginContainer>

  );
};

export default withRouter(Login);
