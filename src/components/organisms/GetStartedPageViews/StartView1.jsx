import { makeStyles, Typography } from '@material-ui/core';
import { MESSAGES } from 'data';
import React from 'react';

const useStyles = makeStyles(() => ({
  root: {
    background: 'url(images/start/1.jpg) no-repeat top -200px right -400px',
    height: '100%',
    '@media (max-width: 400px)': { backgroundPositionX: 'calc(100% + 450px)' },
    '@media (max-height: 720px)': { backgroundPositionY: -250 },
    '@media (max-height: 570px)': { backgroundPositionY: -310 },
  },
  header: {
    position: 'absolute',
    bottom: '5em',
    backgroundColor: 'mediumslateblue',
    backgroundImage: 'linear-gradient(60deg, transparent, rgba(0,0,0,0.14))',
    padding: '1em',
    '@media (max-height: 660px)': { bottom: '3em' },
  },
  title: { whiteSpace: 'pre', color: 'white' },
  subtitle: { whiteSpace: 'pre', color: 'yellow', margin: '1em 0' },
}));

export default React.memo(function StartView1() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <Typography className={classes.title} variant="h4">
          {MESSAGES.getStartedPage.title1}
        </Typography>
        <Typography className={classes.subtitle} variant="body2">
          {MESSAGES.getStartedPage.subtitle1}
        </Typography>
      </div>
    </div>
  );
});
