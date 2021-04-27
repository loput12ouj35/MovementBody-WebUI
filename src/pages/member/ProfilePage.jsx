import { Drawer, withStyles } from '@material-ui/core';
import { ProfilePageHeader } from 'components';
import { inject, observer } from 'mobx-react';
import React from 'react';

const styles = (theme) => ({
  paper: { height: '100%' },
});

@withStyles(styles)
@inject('profilePageStore')
@observer
class ProfilePage extends React.PureComponent {
  render() {
    const { profilePageStore, classes } = this.props;

    return (
      <Drawer
        anchor="bottom"
        open={profilePageStore.profilePageOpen}
        variant="persistent"
        PaperProps={{ className: classes.paper + ' main-popup-page' }}
      >
        <ProfilePageHeader close={profilePageStore.closeProfilePage} />
        <section>test</section>
      </Drawer>
    );
  }
}

export default ProfilePage;
