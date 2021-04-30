import { Drawer, withStyles } from '@material-ui/core';
import {
  BasicInfoUpdateCard,
  ExerciseCodeCard,
  ProfilePageHeader,
} from 'components';
import { inject } from 'mobx-react';
import React from 'react';
import { withRouter } from 'react-router';

const styles = (theme) => ({
  root: { height: '100%' },
  main: {
    backgroundColor: '#fafafa',
    width: '100%',
    flex: 'auto',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden auto',
  },
  form: { display: 'flex', flexDirection: 'column', padding: '0.5em 0' },
});

// using class component for readability
@withStyles(styles)
@inject('profilePageStore')
@withRouter
class ProfilePage extends React.PureComponent {
  state = {};

  render() {
    const { mainRef } = this.state;
    const { classes, location, profilePageStore } = this.props;
    const open = location.pathname.startsWith('/profile');

    if (open) profilePageStore.getProfile();

    return (
      <Drawer
        anchor="bottom"
        open={open}
        variant="persistent"
        PaperProps={{ className: classes.root }}
      >
        <ProfilePageHeader scrollTarget={mainRef} />
        <div
          ref={(mainRef) => this.setState({ mainRef })}
          className={classes.main}
        >
          <form className={classes.form}>
            <BasicInfoUpdateCard />
            <ExerciseCodeCard update />
          </form>
        </div>
      </Drawer>
    );
  }
}

export default ProfilePage;
