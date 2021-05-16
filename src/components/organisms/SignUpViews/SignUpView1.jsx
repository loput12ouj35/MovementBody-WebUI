import React from 'react';
import { Slide, makeStyles, Typography } from '@material-ui/core';
import { BasicInfoCreationCard, ExerciseCodeCard } from 'components';
import { MESSAGES } from 'data';

const useStyles = makeStyles(() => ({
  root: { display: 'flex', flexDirection: 'column' },
  title: { margin: '1rem' },
  form: { display: 'flex', flexDirection: 'column', padding: '0.5em 0' },
}));

export default React.memo(function SignUpView1() {
  const classes = useStyles();

  return (
    <Slide in direction="right">
      <div className={classes.root}>
        <Typography variant="h4" className={classes.title}>
          {MESSAGES.signUp.title1('존맥')}
        </Typography>
        <Typography variant="h6" className={classes.title}>
          {MESSAGES.signUp.subtitle1}
        </Typography>
        <form className={classes.form}>
          <BasicInfoCreationCard />
          <ExerciseCodeCard />
        </form>
      </div>
    </Slide>
  );
});
