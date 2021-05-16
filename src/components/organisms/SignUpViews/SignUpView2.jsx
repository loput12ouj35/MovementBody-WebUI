import React from 'react';
import { Slide, makeStyles, Typography } from '@material-ui/core';
import { MESSAGES } from 'data';

const useStyles = makeStyles(() => ({
  root: { display: 'flex', flexDirection: 'column' },
  title: { margin: '1rem' },
  form: { display: 'flex', flexDirection: 'column', padding: '0.5em 0' },
}));

export default React.memo(function SignUpView1() {
  const classes = useStyles();

  return (
    <Slide in direction="left">
      <div className={classes.root}>
        <Typography variant="h4" className={classes.title}>
          {MESSAGES.signUp.title2('존맥')}
        </Typography>
        <form className={classes.form}>todo</form>
      </div>
    </Slide>
  );
});
