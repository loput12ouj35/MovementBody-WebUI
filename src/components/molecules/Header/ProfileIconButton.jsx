import React from 'react';
import { IconButton } from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';
import { Link } from 'react-router-dom';

export default React.memo(function ProfileIconButton() {
  return (
    <IconButton
      aria-label="user profile"
      color="inherit"
      component={Link}
      to="/profile"
    >
      <AccountCircle />
    </IconButton>
  );
});
