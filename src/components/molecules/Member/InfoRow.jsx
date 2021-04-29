import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  root: { margin: '0.5em', padding: '0.5em', display: 'flex' },
  label: { width: '4em' },
  value: {
    flex: 'auto',
    textAlign: 'right',
    overflowWrap: 'anywhere',
    wordBreak: 'break-all',
    whiteSpace: 'pre-wrap',
    fontWeight: 500,
  },
}));

export default React.memo(function InfoRow(props) {
  const { label, value } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography className={classes.label} color="textSecondary">
        {label}
      </Typography>
      <Typography className={classes.value}>{value}</Typography>
    </div>
  );
});
