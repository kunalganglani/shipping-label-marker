import React from 'react';
import renderer from 'react-test-renderer';
import ProgressBar from '../../core/components/wizard/progress-bar/progress-bar';
test('ProgressBar renders correctly', () => {
  const props = {
    progress: 10,
  };
  const tree = renderer
    .create(<ProgressBar
      progress={props.progress}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
