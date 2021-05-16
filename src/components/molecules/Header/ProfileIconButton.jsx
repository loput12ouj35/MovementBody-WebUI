import React, { useCallback } from 'react';
import { IconButton } from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';
import { useLocation } from 'react-router-dom';
import { pathUtil, useStore } from 'custom_util';

export default React.memo(function ProfileIconButton() {
  const { profilePageStore } = useStore();
  const { pathname } = useLocation();
  const handleClick = useCallback(() => {
    profilePageStore.setLastPath(pathname);
    pathUtil.history.push('/profile');
  }, [pathname]);

  return (
    <IconButton aria-label="user profile" color="inherit" onClick={handleClick}>
      <AccountCircle />
    </IconButton>
  );
});
