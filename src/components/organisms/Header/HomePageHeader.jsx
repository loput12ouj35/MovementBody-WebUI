import React from 'react';
import {
  AppBar,
  makeStyles,
  Toolbar,
  Typography,
  useScrollTrigger,
} from '@material-ui/core';
import { HeaderAccountIcon } from 'components';
import { MESSAGES } from 'data';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: 'linear-gradient(60deg, transparent, rgba(0,0,0,0.14))',
  },
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
        <Typography className={classes.h6} variant="h6">
          {MESSAGES.header.home}
        </Typography>
        <HeaderAccountIcon />
      </Toolbar>
    </AppBar>
  );
});
