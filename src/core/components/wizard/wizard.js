import React, { Component } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import NavButtons from '../../nav-buttons';
import ProgressBar from './progress-bar/progress-bar';

const StepContainer = styled.div`
  min-height: 340px;
`;

const WizardContainer = styled.div`
  margin: 20px;
`;

class Wizard extends Component {
    state = {
      currentStep: 1,
    };

    /**
     * Function to set next Step
     */
    nextSteps = () => {
      const { currentStep } = this.state;
      if (currentStep === this.props.steps.length) {
        this.props.onComplete();
      } else {
        this.setState({
          currentStep: currentStep + 1,
        });
      }
    }

    /**
     * Function to set previous Step
     */
    previousSteps= () => {
      const { currentStep } = this.state;
      this.setState({
        currentStep: currentStep - 1,
      });
    }

    /**
     * Function to return wizard step basedd on current step
     */
    wizardSteps = () => {
      const { steps } = this.props;
      return steps[this.state.currentStep - 1];
    }

    render() {
      const currentPage = this.wizardSteps();
      const isCurrentPageValid = this.props.stepValidator && this.props.stepValidator[this.state.currentStep - 1];
      return (
        <WizardContainer>
          {this.props.header('')}
          <ProgressBar progress={(this.state.currentStep / this.props.steps.length) * 100}></ProgressBar>
          <StepContainer>
            {currentPage}
          </StepContainer>
          <NavButtons
            nextDisabled={isCurrentPageValid ? !isCurrentPageValid() : false}
            current={this.state.currentStep}
            stepLength={this.props.steps.length}
            nextSteps={this.nextSteps}
            previousSteps={this.previousSteps}
          />
        </WizardContainer>
      );
    }
}

Wizard.propTypes = {
  header: PropTypes.func.isRequired,
  steps: PropTypes.array.isRequired,
  wizardContext: PropTypes.object.isRequired,
  onComplete: PropTypes.func.isRequired,
};

export default Wizard;
