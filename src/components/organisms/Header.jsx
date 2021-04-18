import React from 'react';
import { AppBar, makeStyles, Toolbar, Typography } from '@material-ui/core';
import { HeaderAccountIcon, HeaderNotiIcon } from 'components';

const useStyles = makeStyles((theme) => ({
  h6: { flex: 'auto' },
}));

export default React.memo(function (props) {
  const classes = useStyles();

  return (
    <AppBar position="relative">
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
