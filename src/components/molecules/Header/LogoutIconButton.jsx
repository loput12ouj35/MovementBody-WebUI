import { IconButton } from '@material-ui/core';
import { ExitToApp } from '@material-ui/icons';
import React from 'react';

export default React.memo(function LogoutIconButton() {
  return (
    <IconButton color="inherit" edge="end" aria-label="logout">
      <ExitToApp />
    </IconButton>
  );
});
