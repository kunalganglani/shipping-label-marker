import React from 'react';
import Button from '@material-ui/core/Button';
import styled from '@emotion/styled';

const NavButtonsContainer = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: center;
  Button {
    margin: 10px;
  }
`;

const NavButtons = (props) => {
  const {
    current, nextSteps, previousSteps, stepLength,
  } = props;
  return (
    <NavButtonsContainer>
      {current === 1 ? null : (
        <Button variant="contained" color="secondary" onClick={previousSteps}>Back</Button>
      )}
      {current > stepLength - 1 ? <Button disabled={props.nextDisabled} variant="contained" color="primary" onClick={nextSteps}>Confirm</Button>
        : <Button disabled={props.nextDisabled} variant="contained" color="primary" onClick={nextSteps}>Next</Button>}
    </NavButtonsContainer>
  );
};

export default NavButtons;
