import React from 'react';
import {
  AppBar,
  IconButton,
  makeStyles,
  Toolbar,
  Typography,
  useScrollTrigger,
} from '@material-ui/core';
import {
  GlobalNavigation,
  LogoutIconButton,
  ProfileIconButton,
} from 'components';
import { MESSAGES } from 'data';
import { Menu } from '@material-ui/icons';

const useStyles = makeStyles(() => ({
  root: {
    backgroundImage: 'linear-gradient(60deg, transparent, rgba(0,0,0,0.14))',
  },
  grow: { flexGrow: 1 },
  h6: { flex: 'auto' },
}));

export default React.memo(function HomePageHeader(props) {
  const { scrollTarget } = props;
  const scrolled = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: scrollTarget,
  });
  const classes = useStyles();

  return (
    <AppBar
      className={classes.root}
      elevation={scrolled ? 4 : 0}
      position="relative"
    >
      <Toolbar>
        <IconButton color="inherit" edge="start" onClick={null}>
          <Menu />
        </IconButton>
        <Typography variant="h6">{MESSAGES.header.logo}</Typography>
        <div className={classes.grow} />
        <GlobalNavigation />
        <ProfileIconButton />
        <LogoutIconButton />
      </Toolbar>
    </AppBar>
  );
});
