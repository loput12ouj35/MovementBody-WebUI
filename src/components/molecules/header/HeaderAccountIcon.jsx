import React, { useCallback, useState } from 'react';
import { Divider, IconButton, Menu, MenuItem } from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';
import { MESSAGES } from 'data';
import { inject } from 'mobx-react';

const MENU_ID = 'account-menu';

export default React.memo(function HeaderAccountIcon(props) {
  const [anchorEl, setAnchorEl] = useState(null);
  const openMenu = useCallback((e) => setAnchorEl(e.currentTarget), []);
  const closeMenu = useCallback(() => setAnchorEl(null), []);

  return (
    <>
      <IconButton
        edge="end"
        aria-label="account of current user"
        aria-controls={MENU_ID}
        aria-haspopup="true"
        onClick={openMenu}
        color="inherit"
      >
        <AccountCircle />
      </IconButton>
      <AccountMenu anchorEl={anchorEl} closeMenu={closeMenu} />
    </>
  );
});

const ORIGIN = { vertical: 'top', horizontal: 'right' };

@inject('profilePageStore')
class AccountMenu extends React.Component {
  openProfilePage = () => {
    const { closeMenu, profilePageStore } = this.props;
    profilePageStore.openProfilePage();
    closeMenu();
  };

  render() {
    const { anchorEl, closeMenu } = this.props;

    return (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={ORIGIN}
        id={MENU_ID}
        keepMounted
        transformOrigin={ORIGIN}
        open={anchorEl !== null}
        onClose={closeMenu}
      >
        <MenuItem onClick={this.openProfilePage}>
          {MESSAGES.menu.profile}
        </MenuItem>
        <MenuItem onClick={closeMenu}>{MESSAGES.menu.account}</MenuItem>
        <Divider />
        <MenuItem onClick={closeMenu}>{MESSAGES.menu.logout}</MenuItem>
      </Menu>
    );
  }
}
