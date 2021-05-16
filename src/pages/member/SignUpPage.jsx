import { makeStyles } from '@material-ui/core';
import {
  SignUpPageButtons,
  SignUpPageHeader,
  SignUpView1,
  SignUpView2,
} from 'components';
import React, { useState } from 'react';

const useStyles = makeStyles(() => ({
  root: { width: '100%', maxWidth: '48em', padding: '1em 0' },
}));

const views = [<SignUpView1 />, <SignUpView2 />];

export default React.memo(function SignUpPage() {
  const [viewIndex, setViewIndex] = useState(0);
  const [ref, setRef] = useState(undefined);
  const classes = useStyles();

  return (
    <>
      <SignUpPageHeader scrollTarget={ref ?? undefined} />
      <main ref={setRef}>
        <div className={classes.root}>{views[viewIndex]}</div>
        <SignUpPageButtons viewIndex={viewIndex} setViewIndex={setViewIndex} />
      </main>
    </>
  );
});
