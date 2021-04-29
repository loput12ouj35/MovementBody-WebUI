import { Drawer, makeStyles } from '@material-ui/core';
import {
  BasicInfoUpdateCard,
  ExerciseCodeCard,
  ProfilePageHeader,
} from 'components';
import React, { useState } from 'react';
import { useLocation } from 'react-router';

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

export default React.memo(function ProfilePage(props) {
  const { pathname } = useLocation();
  const [scrollTarget, setScrollTarget] = useState(undefined);
  const classes = useStyles();

  return (
    <Drawer
      anchor="bottom"
      open={pathname.startsWith('/profile')}
      variant="persistent"
    >
      <ProfilePageHeader scrollTarget={scrollTarget} />
      <div ref={(node) => setScrollTarget(node)} className={classes.main}>
        <form className={classes.form}>
          <BasicInfoUpdateCard />
          <ExerciseCodeCard update />
        </form>
      </div>
    </Drawer>
  );
});
