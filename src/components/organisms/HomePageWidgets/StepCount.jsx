import { makeStyles } from '@material-ui/core';
import { DirectionsWalk } from '@material-ui/icons';
import { MESSAGES } from 'data';
import React from 'react';

const dummy = '12345';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'white',
    margin: '1em',
    padding: '1em',
    borderRadius: '1em',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

export default React.memo(function StepCount(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <DirectionsWalk />
      <span>{MESSAGES.homePage.stepCount(dummy)}</span>
    </div>
  );
});
