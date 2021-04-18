import React from 'react';
import { Badge, IconButton } from '@material-ui/core';
import { Notifications } from '@material-ui/icons';

export default React.memo(function HeaderNotiIcon(props) {
  return (
    <IconButton aria-label="show notifications" color="inherit">
      <Badge badgeContent={17} color="secondary">
        <Notifications />
      </Badge>
    </IconButton>
  );
});
