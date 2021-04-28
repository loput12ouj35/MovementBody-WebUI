import { Drawer } from '@material-ui/core';
import { ProfilePageHeader } from 'components';
import { inject, observer } from 'mobx-react';
import React, { useState } from 'react';

@inject('profilePageStore')
@observer
class ProfilePagePopUp extends React.PureComponent {
  render() {
    const { profilePageStore } = this.props;

    return (
      <Drawer
        anchor="bottom"
        open={profilePageStore.profilePageOpen}
        variant="persistent"
      >
        <ProfilePage close={profilePageStore.closeProfilePage} />
      </Drawer>
    );
  }
}

export default ProfilePagePopUp;

const ProfilePage = React.memo(function ProfilePage(props) {
  const { close } = props;
  const [scrollTarget, setScrollTarget] = useState(undefined);

  return (
    <>
      <ProfilePageHeader close={close} scrollTarget={scrollTarget} />
      <div ref={(node) => setScrollTarget(node)}>test</div>
    </>
  );
});
