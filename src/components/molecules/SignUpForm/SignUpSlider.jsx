import { Input, makeStyles } from '@material-ui/core';
import React, { useCallback } from 'react';

const useStyles = makeStyles((theme) => ({
  input: { width: '4em' },
}));

export default function (props) {
  const { name, min, max, value = min, updateValue } = props;
  const handleBlur = useCallback((e) => {
    const value = Math.max(min, Math.min(e.target.value, max));
    if (e.target.value !== value) updateValue({ target: { name, value } });
  }, []);
  const classes = useStyles();

  return (
    <Input
      className={classes.input}
      name={name}
      value={value}
      onChange={updateValue}
      onBlur={handleBlur}
      inputProps={{
        step: 0.1,
        min,
        max,
        type: 'number',
        'aria-labelledby': name,
        required: true,
      }}
    />
  );
}
