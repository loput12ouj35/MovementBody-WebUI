import { makeStyles } from '@material-ui/core';
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';
import { MESSAGES } from 'data';
import React, { useCallback } from 'react';

const useStyles = makeStyles((theme) => ({
  button: {
    flex: '1 1 20px',
    '&.Mui-selected': { flexGrow: 2 },
    transition: 'flex-grow ease .3s',
  },
}));

export default React.memo(function (props) {
  const { name, value, updateValue } = props;
  const handleChange = useCallback((e, value) => updateValue(name, value), []);
  const classes = useStyles();

  return (
    <ToggleButtonGroup
      value={value}
      exclusive
      onChange={handleChange}
      aria-label={name}
    >
      <ToggleButton className={classes.button} value={0} aria-label="male">
        {MESSAGES.signUp.male}
      </ToggleButton>
      <ToggleButton className={classes.button} value={1} aria-label="female">
        {MESSAGES.signUp.female}
      </ToggleButton>
      <ToggleButton className={classes.button} value={2} aria-label="other">
        {MESSAGES.signUp.other}
      </ToggleButton>
    </ToggleButtonGroup>
  );
});
