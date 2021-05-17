import React from 'react';
import { Button, makeStyles, Typography } from '@material-ui/core';
import { BasicInfoCreationCard, ExerciseCodeCard } from 'components';
import { MESSAGES } from 'data';
import { ArrowForward } from '@material-ui/icons';

const useStyles = makeStyles(() => ({
  title: { margin: '1em' },
  form: { display: 'flex', flexDirection: 'column', padding: '0.5em 0' },
  buttons: { padding: '0.25em', textAlign: 'right' },
  button: {
    backgroundImage: 'linear-gradient(60deg, transparent, rgba(0,0,0,0.14))',
    width: '6em',
  },
}));

export default React.memo(function SignUpView1(props) {
  const { goNext } = props;
  const classes = useStyles();

  return (
    <>
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
      <div className={classes.buttons}>
        <Button
          variant="contained"
          color="primary"
          disableElevation
          className={classes.button}
          endIcon={<ArrowForward />}
          onClick={goNext}
        >
          Next
        </Button>
      </div>
    </>
  );
});
