import { makeStyles } from '@material-ui/core';
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';
import { MESSAGES } from 'data';
import React, { useCallback } from 'react';

const useStyles = makeStyles((theme) => ({
  buttonGroup: { margin: '1em', width: '15em' },
  button: {
    flex: '1 1 20px',
    transition: 'flex-grow ease .3s',
    '&.Mui-selected': {
      flexGrow: 2,
      backgroundColor: 'slategray',
      backgroundImage: 'linear-gradient(60deg, transparent, rgba(0,0,0,0.14))',
      boxShadow:
        'rgb(0, 0, 0, 0.12) 0px 4px 20px 0px, rgba(112, 128, 144, 0.4) 0px 7px 10px -5px',
      color: 'white',
      '&:hover': { backgroundColor: 'slategray' },
    },
  },
}));

export default React.memo(function MemberGenderInput(props) {
  const { name, value, updateValue } = props;
  const handleChange = useCallback((e, value) => updateValue(name, value), []);
  const classes = useStyles();

  return (
    <ToggleButtonGroup
      className={classes.buttonGroup}
      value={value}
      exclusive
      onChange={handleChange}
      aria-label={name}
    >
      <ToggleButton className={classes.button} value={0} aria-label="male">
        {MESSAGES.member.male}
      </ToggleButton>
      <ToggleButton className={classes.button} value={1} aria-label="female">
        {MESSAGES.member.female}
      </ToggleButton>
      <ToggleButton className={classes.button} value={2} aria-label="other">
        {MESSAGES.member.other}
      </ToggleButton>
    </ToggleButtonGroup>
  );
});
