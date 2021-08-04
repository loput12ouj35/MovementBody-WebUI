import React from 'react';
import { CalendarToday, Home, Timer } from '@material-ui/icons';
import {
  BottomNavigation,
  BottomNavigationAction,
  makeStyles,
} from '@material-ui/core';
import { Link, useLocation } from 'react-router-dom';

const MENUS = [
  ['home', <Home />],
  ['history', <CalendarToday />],
  ['time', <Timer />],
];

const MENU_COMPONENTS = MENUS.map(([type, icon]) => (
  <BottomNavigationAction
    key={type}
    to={`/${type}`}
    icon={icon}
    component={Link}
  />
));

const useStyles = makeStyles(() => ({
  root: {
    '@media (min-width: 48rem)': { display: 'none' },
  },
}));

export default React.memo(function BottomNavigationBar(props) {
  const { pathname } = useLocation();
  const value = MENUS.findIndex(([type]) => pathname.startsWith(`/${type}`));
  const classes = useStyles();

  return (
    <BottomNavigation
      className={classes.root}
      value={value}
      showLabels
      component="nav"
    >
      {MENU_COMPONENTS}
    </BottomNavigation>
  );
});
