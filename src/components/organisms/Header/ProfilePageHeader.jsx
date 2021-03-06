import React from 'react';
import {
  AppBar,
  IconButton,
  makeStyles,
  Toolbar,
  Typography,
  useScrollTrigger,
} from '@material-ui/core';
import { ArrowBack } from '@material-ui/icons';
import { MESSAGES } from 'data';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: 'darkslategray',
    backgroundImage:
      'linear-gradient(60deg, transparent, rgba(255,255,255,0.14))',
  },
  h6: { flex: 'auto' },
}));

export default React.memo(function ProfilePageHeader(props) {
  const { scrollTarget } = props;
  const scrolled = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: scrollTarget,
  });
  const history = useHistory();
  const classes = useStyles();

  return (
    <AppBar
      className={classes.root}
      elevation={scrolled ? 4 : 0}
      position="relative"
    >
      <Toolbar>
        <IconButton color="inherit" edge="start" onClick={history.goBack}>
          <ArrowBack />
        </IconButton>
        <Typography className={classes.h6} variant="h6">
          {MESSAGES.header.profile}
        </Typography>
      </Toolbar>
    </AppBar>
  );
});
