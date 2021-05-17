import { makeStyles } from '@material-ui/core';
import { SignUpPageHeader, SignUpView1, SignUpView2 } from 'components';
import React, { useCallback, useState } from 'react';
import SwipeableViews from 'react-swipeable-views';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    maxWidth: '48em',
    padding: '1em 0',
  },
}));

export default React.memo(function SignUpPage() {
  const [index, setIndex] = useState(0);
  const [ref, setRef] = useState(undefined);
  const goBack = useCallback(() => setIndex((v) => v - 1), []);
  const goNext = useCallback(() => setIndex((v) => v + 1), []);
  const classes = useStyles();

  return (
    <>
      <SignUpPageHeader scrollTarget={ref ?? undefined} />
      <main ref={setRef}>
        <div className={classes.root}>
          <SwipeableViews
            index={index}
            enableMouseEvents
            onChangeIndex={setIndex}
          >
            <SignUpView1 goNext={goNext} />
            <SignUpView2 goBack={goBack} />
          </SwipeableViews>
        </div>
      </main>
    </>
  );
});
