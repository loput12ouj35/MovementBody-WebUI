import { IconButton } from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import { inject } from 'mobx-react';
import React from 'react';

@inject('navigatorStore')
class LnbOpenIcon extends React.PureComponent {
  render() {
    const { navigatorStore } = this.props;

    return (
      <IconButton
        color="inherit"
        edge="start"
        aria-label="open drawer"
        onClick={navigatorStore.toggleLnb}
      >
        <Menu />
      </IconButton>
    );
  }
}

export default LnbOpenIcon;
