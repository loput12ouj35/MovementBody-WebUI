import { Drawer, makeStyles } from '@material-ui/core';
import {
  BasicInfoUpdateCard,
  ExerciseCodeCard,
  ProfilePageHeader,
} from 'components';
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

const useStyles = makeStyles((theme) => ({
  main: {
    backgroundColor: '#fafafa',
    width: '100%',
    flex: 'auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    overflow: 'hidden auto',
  },
  form: { display: 'flex', flexDirection: 'column', padding: '0.5em 0' },
}));

const ProfilePage = React.memo(function ProfilePage(props) {
  const { close } = props;
  const [scrollTarget, setScrollTarget] = useState(undefined);
  const classes = useStyles();

  return (
    <>
      <ProfilePageHeader close={close} scrollTarget={scrollTarget} />
      <div ref={(node) => setScrollTarget(node)} className={classes.main}>
        <form className={classes.form}>
          <BasicInfoUpdateCard />
          <ExerciseCodeCard update />
        </form>
      </div>
    </>
  );
});
