import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  mainText: { fontSize: '2em', fontWeight: 500 },
}));

export default React.memo(function (props) {
  const { mainText, subText } = props;
  const classes = useStyles();

  return (
    <Typography variant="body2">
      <b className={classes.mainText}>{mainText}</b>
      {subText}
    </Typography>
  );
});
