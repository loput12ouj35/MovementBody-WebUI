import { makeStyles, Typography } from '@material-ui/core';
import { BasicInfoCard, ExerciseCodeCard, SignUpFormButton } from 'components';
import { MESSAGES } from 'data';
import React, { useCallback, useState } from 'react';
import 'scss/components/sign-up-form.scss';

const useStyles = makeStyles((theme) => ({
  title: { margin: '1rem' },
}));

export default React.memo(function SignUpForm(props) {
  const [value, setValue] = useState({
    gender: 2,
    height: 165,
    weight: 60,
    exerciseCode: 2,
  });
  const updateValue = useCallback(
    (name, value) =>
      setValue((v) => (value === v?.[name] ? v : { ...v, [name]: value })),
    []
  );
  const classes = useStyles();

  return (
    <article className="sign-up-form">
      <Typography variant="h4" className={classes.title}>
        {MESSAGES.signUp.title('존맥')}
      </Typography>
      <Typography variant="h6" className={classes.title}>
        {MESSAGES.signUp.subtitle}
      </Typography>
      <form>
        <BasicInfoCard value={value} updateValue={updateValue} />
        <ExerciseCodeCard
          name="exerciseCode"
          value={value.exerciseCode}
          updateValue={updateValue}
        />
      </form>
      <SignUpFormButton value={value} />
    </article>
  );
});
