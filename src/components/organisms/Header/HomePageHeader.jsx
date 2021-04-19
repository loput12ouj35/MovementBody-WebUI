import React from 'react';
import {
  AppBar,
  makeStyles,
  Toolbar,
  Typography,
  useScrollTrigger,
} from '@material-ui/core';
import { HeaderAccountIcon, HeaderNotiIcon } from 'components';

const useStyles = makeStyles((theme) => ({
  h6: { flex: 'auto' },
}));

export default React.memo(function (props) {
  const { scrollTarget } = props;
  const scrolled = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: scrollTarget,
  });
  const classes = useStyles();

  return (
    <AppBar position="relative" elevation={scrolled ? 4 : 0}>
      <Toolbar>
        <Typography className={classes.h6} variant="h6">
          가제
        </Typography>
        <HeaderNotiIcon />
        <HeaderAccountIcon />
      </Toolbar>
    </AppBar>
  );
});
