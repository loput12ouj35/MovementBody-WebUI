import React from 'react';
import { Button, makeStyles, Typography } from '@material-ui/core';
import { MESSAGES } from 'data';
import { GoalCard, MemberFormSubmitButton } from 'components';
import { ArrowBack } from '@material-ui/icons';

const useStyles = makeStyles(() => ({
  title: { margin: '1em' },
  form: { display: 'flex', flexDirection: 'column', padding: '0.5em 0' },
  buttons: { padding: '0.25em', textAlign: 'right' },
  button: {
    backgroundImage: 'linear-gradient(60deg, transparent, rgba(0,0,0,0.14))',
    width: '6em',
    marginRight: '0.25em',
  },
}));

export default React.memo(function SignUpView2(props) {
  const { goBack } = props;
  const classes = useStyles();

  return (
    <>
      <Typography variant="h4" className={classes.title}>
        {MESSAGES.signUp.title2}
      </Typography>
      <Typography variant="h6" className={classes.title}>
        {MESSAGES.signUp.subtitle1}
      </Typography>
      <form className={classes.form}>
        <GoalCard />
      </form>
      <div className={classes.buttons}>
        <Button
          variant="contained"
          color="primary"
          disableElevation
          className={classes.button}
          startIcon={<ArrowBack />}
          onClick={goBack}
        >
          Back
        </Button>
        <MemberFormSubmitButton />
      </div>
    </>
  );
});
