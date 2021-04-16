import { AppBar, Toolbar } from '@material-ui/core';
import { LnbOpenIcon } from 'components';
import React from 'react';

export default React.memo(function (props) {
  return (
    <AppBar position="relative">
      <Toolbar>
        <LnbOpenIcon />
        <h3>가제</h3>
      </Toolbar>
    </AppBar>
  );
});
