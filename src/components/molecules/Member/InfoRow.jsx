import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '0.5em 0.25em',
    padding: '0.5em',
    display: 'flex',
    transition: 'background-color ease .3s',
    '&:hover': { backgroundColor: 'rgba(0, 120, 255, 0.08)' },
  },
  label: { width: '8em' },
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
