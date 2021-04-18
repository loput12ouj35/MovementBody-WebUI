import React from 'react';
import { CalendarToday, Home, Menu } from '@material-ui/icons';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import { Link, useLocation } from 'react-router-dom';
import { MESSAGES } from 'data';

const MENUS = [
  ['home', <Home />],
  ['history', <CalendarToday />],
  ['menu', <Menu />],
];

const MENU_COMPONENTS = MENUS.map(([type, icon]) => (
  <BottomNavigationAction
    key={type}
    to={`/${type}`}
    label={MESSAGES.menu[type]}
    icon={icon}
    component={Link}
  />
));

export default React.memo(function BottomNavigationBar(props) {
  const { pathname } = useLocation();
  const value = MENUS.findIndex(([type]) => pathname.startsWith(`/${type}`));

  return (
    <BottomNavigation value={value} showLabels>
      {MENU_COMPONENTS}
    </BottomNavigation>
  );
});