import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

/**
 * HEADER COMPONENT that takes headingTitle as prop intput and renders the heading
*/
const Header = (props) => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h6" color="inherit">
        {props.headingTitle || 'Default Heading'}
      </Typography>
    </Toolbar>
  </AppBar>
);

export default Header;
