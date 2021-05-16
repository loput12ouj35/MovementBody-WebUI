import { Slide, makeStyles, Typography } from '@material-ui/core';
import {
  BasicInfoCreationCard,
  ExerciseCodeCard,
  MemberFormSubmitButton,
  SignUpPageHeader,
} from 'components';
import { MESSAGES } from 'data';
import React, { useState } from 'react';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    maxWidth: '48em',
    padding: '1em 0',
  },
  title: { margin: '1rem' },
  form: { display: 'flex', flexDirection: 'column', padding: '0.5em 0' },
}));

export default React.memo(function SignUpPage() {
  const [ref, setRef] = useState(undefined);
  const classes = useStyles();

  return (
    <>
      <SignUpPageHeader scrollTarget={ref ?? undefined} />
      <main ref={setRef}>
        <div className={classes.root}>
          <Typography variant="h4" className={classes.title}>
            {MESSAGES.signUp.title('존맥')}
          </Typography>
          <Typography variant="h6" className={classes.title}>
            {MESSAGES.signUp.subtitle}
          </Typography>
          <Slide in direction="up">
            <form className={classes.form}>
              <BasicInfoCreationCard />
              <ExerciseCodeCard />
            </form>
          </Slide>
          <MemberFormSubmitButton />
        </div>
      </main>
    </>
  );
});
