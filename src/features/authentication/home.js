import React from 'react';
import { Button } from '@material-ui/core';
import styled from '@emotion/styled';
import app from './base';
import ShippingLabelMaker from '../shipping-label-maker/shipping-label-maker';

const UserActionContainer = styled.div`
  padding: 8px;
  height: 2em;
  Button {
    position: absolute;
    right: 8px;
  }
`;

const Home = () => (
  <>
    <UserActionContainer>
      <Button variant="contained" color="primary" onClick={() => app.auth().signOut()}>Sign out</Button>
    </UserActionContainer>

    <ShippingLabelMaker />
  </>
);

export default Home;
