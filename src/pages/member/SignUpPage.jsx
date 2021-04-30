import { Slide, makeStyles, Typography } from '@material-ui/core';
import {
  BasicInfoCreationCard,
  ExerciseCodeCard,
  SignUpFormButton,
  SignUpPageHeader,
} from 'components';
import { MESSAGES } from 'data';
import React, { useState } from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '48em',
    padding: '1em 0',
  },
  title: { margin: '1rem' },
  form: { display: 'flex', flexDirection: 'column', padding: '0.5em 0' },
}));

export default React.memo(function SignUpPage(props) {
  const [mainRef, setMainRef] = useState(undefined); // keep it undefined here to not make it throw an error.
  const classes = useStyles();

  return (
    <>
      <SignUpPageHeader scrollTarget={mainRef ?? undefined} />
      <main ref={(node) => setMainRef(node)}>
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
          <SignUpFormButton />
        </div>
      </main>
    </>
  );
});
