import { Drawer, makeStyles } from '@material-ui/core';
import {
  BasicInfoUpdateCard,
  ExerciseCodeCard,
  MemberFormSubmitButton,
  ProfilePageHeader,
} from 'components';
import { useStore } from 'custom_util';
import React, { useState } from 'react';
import { useLocation } from 'react-router';

const useStyles = makeStyles(() => ({
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
}));

export default React.memo(function ProfilePage() {
  const [ref, setRef] = useState(undefined);
  const classes = useStyles();
  const { profilePageStore } = useStore();
  const { pathname } = useLocation();
  const open = pathname.startsWith('/profile');

  if (open) profilePageStore.requestGet('0'); // todo: change dummy id to logined id

  return (
    <Drawer
      anchor="bottom"
      open={open}
      variant="persistent"
      PaperProps={{ className: classes.root }}
    >
      <ProfilePageHeader scrollTarget={ref} />
      <div ref={setRef} className={classes.main}>
        <form className={classes.form}>
          <BasicInfoUpdateCard />
          <ExerciseCodeCard update />
        </form>
        <MemberFormSubmitButton update />
      </div>
    </Drawer>
  );
});
