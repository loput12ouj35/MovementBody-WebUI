import React from 'react';
import {
  AppBar,
  IconButton,
  makeStyles,
  Toolbar,
  Typography,
} from '@material-ui/core';
import { ArrowBack } from '@material-ui/icons';
import { MESSAGES } from 'data';

const useStyles = makeStyles((theme) => ({
  h6: { flex: 'auto' },
}));

export default React.memo(function ProfilePageHeader(props) {
  const { close } = props;
  const classes = useStyles();

  return (
    <AppBar position="relative" elevation={0} color="inherit">
      <Toolbar>
        <IconButton color="inherit" edge="start" onClick={close}>
          <ArrowBack />
        </IconButton>
        <Typography className={classes.h6} variant="h6">
          {MESSAGES.header.profile}
        </Typography>
      </Toolbar>
    </AppBar>
  );
});
