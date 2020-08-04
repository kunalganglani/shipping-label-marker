import React, { Component } from 'react';
import Wizard from '../../core/components/wizard/wizard';
import ShippingLabel from './shipping-label';
import GetSendersAddress from './steps/step-one';
import GetReceiversAddress from './steps/step-two';
import GetWeight from './steps/step-three';
import GetShippingOptions from './steps/step-four';
import Confirm from './steps/step-five';

const initialWizardContext = {
  from: {
    name: '',
    street: '',
    city: '',
    state: '',
    zip: '',
  },
  to: {
    name: '',
    street: '',
    city: '',
    state: '',
    zip: '',
  },
  weight: {
    weightValue: '',
    weightUnit: 'Pounds',
  },
  shippingOption: '1',
};

const wizardHeader = () => <h2>Shipping Label Wizard</h2>;

class ShippingLabelMaker extends Component {
  state = {
    isComplete: false,
    wizardContext: initialWizardContext,
  };

  createLabel = () => {
    this.setState((prevState) => ({
      ...prevState,
      isComplete: true,
    }));
  }

  /**
   * Function to handle changes in input field to Sender
   */
  handleSender = (event) => {
    const { value, id } = event.target;
    this.setState((state) => ({
      ...state,
      wizardContext: {
        ...state.wizardContext, from: { ...state.wizardContext.from, [id]: value },
      },
    }));
  }

  /**
   * Function to handle package weight input field
   */
  handleWeight = (event) => {
    const { value } = event.target;
    const id = event.target.id || 'weightUnit';
    this.setState((prevState) => ({
      ...prevState,
      wizardContext: {
        ...prevState.wizardContext,
        weight: {
          ...prevState.wizardContext.weight,
          [id]: value,
        },
      },
    }));
  }

  /**
   * Function to handle shipping field input
   */
  handleShipping = (event) => {
    const { value, name } = event.target;
    this.setState((state) => ({
      ...state,
      wizardContext: {
        ...state.wizardContext,
        [name]: value,
      },
    }));
  }

  /**
   * Function to handle changes in input field to Receiver
   */
  handleReceiver = (event) => {
    const { value, id } = event.target;
    this.setState((prevState) => ({
      ...prevState,
      wizardContext: {
        ...prevState.wizardContext,
        to: {
          ...prevState.wizardContext.to,
          [id]: value,
        },
      },
    }));
  }

  /**
   * Function to handle success, calls onComplete function received via props, with completed data
   */
  onComplete = () => {
    this.createLabel();
  }

  isSenderValid = () => {
    const {
      name, street, city, state, zip,
    } = this.state.wizardContext.from;
    if (name.length && street.length && city.length && state.length && zip.length) {
      return true;
    }
    return false;
  }

  isReceiverValid = () => {
    const {
      name, street, city, state, zip,
    } = this.state.wizardContext.to;
    if (name.length && street.length && city.length && state.length && zip.length) {
      return true;
    }
    return false;
  }

  isWeightValid = () => !!this.state.wizardContext.weight;

  isShippingOptionValid = () => !!this.state.wizardContext.shippingOption;

  render() {
    return (
      <div>
        {(this.state.isComplete) ? (
          <ShippingLabel data={this.state.wizardContext} />
        ) : (
          <Wizard
            header={wizardHeader}
            wizardContext={this.state.wizardContext}
            steps={[
              <GetSendersAddress wizardContext={this.state.wizardContext.from} onAction={this.handleSender} />,
              <GetReceiversAddress wizardContext={this.state.wizardContext.to} onAction={this.handleReceiver} />,
              <GetWeight wizardContext={this.state.wizardContext.weight} onAction={this.handleWeight} />,
              <GetShippingOptions wizardContext={this.state.wizardContext} onAction={this.handleShipping} />,
              <Confirm wizardContext={this.state.wizardContext} onAction={this.onComplete} />,
            ]}
            stepValidator={[
              this.isSenderValid,
              this.isReceiverValid,
              this.isWeightValid,
              this.isShippingOptionValid,
            ]}
            onComplete={this.createLabel}
          />
        )}
      </div>
    );
  }
}

export default ShippingLabelMaker;
