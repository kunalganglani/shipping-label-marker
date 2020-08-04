import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';

/**
 * ProgressBar COMPONENT that shows the progress made on the wizard
*/
const ProgressBar = (props) => (
  <>
    <LinearProgress variant="determinate" value={props.progress} />
  </>
);

export default ProgressBar;
