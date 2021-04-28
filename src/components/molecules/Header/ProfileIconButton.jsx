import React from 'react';
import { IconButton } from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';
import { inject } from 'mobx-react';

@inject('profilePageStore')
class ProfileIconButton extends React.PureComponent {
  render() {
    const { profilePageStore } = this.props;

    return (
      <IconButton
        aria-label="user profile"
        color="inherit"
        onClick={profilePageStore.openProfilePage}
      >
        <AccountCircle />
      </IconButton>
    );
  }
}

export default ProfileIconButton;
