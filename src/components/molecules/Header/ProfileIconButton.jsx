import React from 'react';
import { IconButton } from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';
import { withRouter } from 'react-router-dom';
import { inject } from 'mobx-react';
import profilePageStore from 'stores/profilePageStore';
import { pathUtil } from 'custom_util';

// using class component for readability
@inject('profilePageStore')
@withRouter
class ProfileIconButton extends React.PureComponent {
  handleClick = () => {
    const { pathname } = this.props.location;
    profilePageStore.setLastPath(pathname);
    pathUtil.history.push('/profile');
  };

  render() {
    return (
      <IconButton
        aria-label="user profile"
        color="inherit"
        onClick={this.handleClick}
      >
        <AccountCircle />
      </IconButton>
    );
  }
}

export default ProfileIconButton;
