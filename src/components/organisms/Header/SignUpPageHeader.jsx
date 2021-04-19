import React from 'react';
import {
  AppBar,
  IconButton,
  makeStyles,
  Slide,
  Toolbar,
  Typography,
  useScrollTrigger,
} from '@material-ui/core';
import { ArrowBack } from '@material-ui/icons';
import { MESSAGES } from 'data';
import { Link } from 'react-router-dom';

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
    <Slide appear={false} direction="down" in={scrolled}>
      <AppBar color="inherit">
        <Toolbar>
          <IconButton color="inherit" edge="start" component={Link} to="/home">
            <ArrowBack />
          </IconButton>
          <Typography className={classes.h6} variant="h6">
            {MESSAGES.header.signUp}
          </Typography>
        </Toolbar>
      </AppBar>
    </Slide>
  );
});
