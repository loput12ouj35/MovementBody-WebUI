import { Drawer, makeStyles } from '@material-ui/core';
import {
  BasicInfoUpdateCard,
  ExerciseCodeCard,
  GoalCard,
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
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    flex: 'auto',
    overflow: 'hidden auto',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    maxWidth: '48em',
    padding: '1em 0',
  },
  buttons: { padding: '0.25em', textAlign: 'right' },
  form: { display: 'flex', flexDirection: 'column', padding: '0.5em 0' },
}));

export default React.memo(function ProfilePage() {
  const [ref, setRef] = useState(undefined);
  const classes = useStyles();
  const { profilePageStore } = useStore();
  const { pathname } = useLocation();
  const open = pathname.startsWith('/profile');
  const { lastPath } = profilePageStore;

  if (open) profilePageStore.fetch('tempId'); // todo: change dummy id to logined id

  return (
    <Drawer
      anchor="bottom"
      open={open}
      variant="persistent"
      PaperProps={{ className: classes.root }}
    >
      <ProfilePageHeader scrollTarget={ref} lastPath={lastPath} />
      <div ref={setRef} className={classes.main}>
        <div className={classes.container}>
          <form className={classes.form}>
            <BasicInfoUpdateCard />
            <ExerciseCodeCard update />
            <GoalCard update />
          </form>
          <div className={classes.buttons}>
            <MemberFormSubmitButton update />
          </div>
        </div>
      </div>
    </Drawer>
  );
});
