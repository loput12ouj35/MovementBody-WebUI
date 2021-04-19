import { Drawer, withStyles } from '@material-ui/core';
import { ProfilePageHeader } from 'components';
import { inject, observer } from 'mobx-react';
import React from 'react';

const styles = (theme) => ({
  paper: { height: '100%' },
});

@withStyles(styles)
@inject('userStore')
@observer
class ProfilePage extends React.PureComponent {
  render() {
    const { userStore, classes } = this.props;

    return (
      <Drawer
        anchor="bottom"
        open={userStore.profilePageOpen}
        variant="persistent"
        PaperProps={{ className: classes.paper + ' main-popup-page' }}
      >
        <ProfilePageHeader close={userStore.closeProfilePage} />
        <section>test</section>
      </Drawer>
    );
  }
}

export default ProfilePage;
