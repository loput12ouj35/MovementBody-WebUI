import { makeStyles, Typography } from '@material-ui/core';
import { BasicInfoCard, ExerciseCodeCard, SignUpFormButton } from 'components';
import { MESSAGES } from 'data';
import React, { useCallback, useState } from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#fafafa',
    display: 'flex',
    justifyContent: 'center',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '48em',
    overflowX: 'hidden',
  },
  title: { margin: '1rem' },
  form: { display: 'flex', flexDirection: 'column', padding: '0.5em 0' },
}));

export default React.memo(function SignUpForm(props) {
  const [value, setValue] = useState({
    gender: 2,
    height: 165,
    weight: 60,
    exerciseCode: 2,
  });
  const updateValue = useCallback(
    (name, input) =>
      setValue((v) => {
        const _value = typeof input === 'function' ? input(v?.[name]) : input;
        return _value === v?.[name] ? v : { ...v, [name]: _value };
      }),
    []
  );
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <Typography variant="h4" className={classes.title}>
          {MESSAGES.signUp.title('존맥')}
        </Typography>
        <Typography variant="h6" className={classes.title}>
          {MESSAGES.signUp.subtitle}
        </Typography>
        <form className={classes.form}>
          <BasicInfoCard value={value} updateValue={updateValue} />
          <ExerciseCodeCard
            name="exerciseCode"
            value={value.exerciseCode}
            updateValue={updateValue}
          />
        </form>
        <SignUpFormButton value={value} />
      </div>
    </div>
  );
});
