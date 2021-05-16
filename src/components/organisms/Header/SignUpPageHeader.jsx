import React from 'react';
import {
  AppBar,
  IconButton,
  makeStyles,
  Toolbar,
  Typography,
  useScrollTrigger,
} from '@material-ui/core';
import { Close } from '@material-ui/icons';
import { MESSAGES } from 'data';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: 'mediumslateblue',
    backgroundImage: 'linear-gradient(60deg, transparent, rgba(0,0,0,0.14))',
    color: 'white',
  },
  h6: { flex: 'auto' },
}));

export default React.memo(function SignUpPageHeader(props) {
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
          {MESSAGES.header.signUp}
        </Typography>
        <IconButton color="inherit" edge="end" component={Link} to="/home">
          <Close />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
});
