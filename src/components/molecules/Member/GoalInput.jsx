import { makeStyles } from '@material-ui/core';
import { TrendingDown, TrendingFlat, TrendingUp } from '@material-ui/icons';
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';
import { MESSAGES } from 'data';
import React from 'react';

const useStyles = makeStyles(() => ({
  buttonGroup: { padding: '1em', width: '100%', whiteSpace: 'nowrap' },
  button: {
    height: '6em',
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
  icon: { marginRight: '0.25em' },
}));

export default React.memo(function GoalInput(props) {
  const { value, onChange } = props;
  const classes = useStyles();

  return (
    <ToggleButtonGroup
      className={classes.buttonGroup}
      value={value}
      exclusive
      onChange={onChange}
      aria-label="goal"
    >
      <ToggleButton className={classes.button} value={0} aria-label="losing">
        <TrendingDown className={classes.icon} />
        {MESSAGES.member.goalType.losing}
      </ToggleButton>
      <ToggleButton className={classes.button} value={1} aria-label="keeping">
        <TrendingFlat className={classes.icon} />
        {MESSAGES.member.goalType.keeping}
      </ToggleButton>
      <ToggleButton className={classes.button} value={2} aria-label="gaining">
        <TrendingUp className={classes.icon} />
        {MESSAGES.member.goalType.gaining}
      </ToggleButton>
    </ToggleButtonGroup>
  );
});
