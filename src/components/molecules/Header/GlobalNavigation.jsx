import { Button, makeStyles } from '@material-ui/core';
import { CalendarToday, Home, Timer } from '@material-ui/icons';
import { MESSAGES } from 'data';
import React from 'react';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles(() => ({
  root: {
    display: 'none',
    '@media (min-width: 48rem)': { display: 'initial' },
  },
  button: {
    color: 'rgba(255, 255, 255, 0.87)',
    padding: '0.5em 1.25em',
    margin: '0 0.5em',
    '&:hover': { backgroundColor: 'rgba(255,255,255,0.24)' },
    '&.active': { backgroundColor: 'rgba(255,255,255,0.12)' },
  },
}));

export default React.memo(function Gnb() {
  const classes = useStyles();

  return (
    <nav className={classes.root}>
      <Button
        className={classes.button}
        aria-label="home-button"
        component={NavLink}
        startIcon={<Home />}
        to="/home"
      >
        {MESSAGES.header.home}
      </Button>
      <Button
        className={classes.button}
        aria-label="history-button"
        component={NavLink}
        startIcon={<CalendarToday />}
        to="/history"
      >
        {MESSAGES.header.menu1}
      </Button>
      <Button
        className={classes.button}
        aria-label="menu-button"
        component={NavLink}
        startIcon={<Timer />}
        to="/time"
      >
        {MESSAGES.header.menu2}
      </Button>
    </nav>
  );
});
