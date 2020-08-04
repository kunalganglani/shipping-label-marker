import React from 'react';
import renderer from 'react-test-renderer';
import NavButtons from '../../core/nav-buttons';
test('NavButtons renders correctly', () => {
  const state = {
    currentStep: 5,
  };
  const props = {
    steps: [1, 2, 3, 4, 5],
  };
  const nextSteps = jest.fn();
  const previousSteps = jest.fn();
  const isCurrentPageValid = () => true;
  const tree = renderer
    .create(<NavButtons
      nextDisabled={isCurrentPageValid ? !isCurrentPageValid() : false}
      current={state.currentStep}
      stepLength={props.steps.length}
      nextSteps={nextSteps}
      previousSteps={previousSteps}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
