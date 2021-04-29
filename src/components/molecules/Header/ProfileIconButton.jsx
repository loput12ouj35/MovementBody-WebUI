import React from 'react';
import { IconButton } from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';
import { Link } from 'react-router-dom';

export default React.memo(function (props) {
  return (
    <IconButton
      aria-label="user profile"
      color="inherit"
      component={Link}
      to={({ pathname }) => ({
        pathname: '/profile',
        state: { from: pathname },
      })}
    >
      <AccountCircle />
    </IconButton>
  );
});
