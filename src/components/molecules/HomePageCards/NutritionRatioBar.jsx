import { makeStyles } from '@material-ui/core';
import React from 'react';

const COLORS = ['#1a90ff', '#ff1a90', '#ff901a'];
const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    height: '0.25rem',
    borderRadius: '0.25rem',
    marginTop: '1.5rem',
    overflow: 'hidden',
  },
  carbon: { backgroundColor: COLORS[0] },
  protein: { backgroundColor: COLORS[1] },
  fat: { backgroundColor: COLORS[2] },
}));

export default function NutritionRatioBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.carbon} style={{ flexGrow: Math.random() }} />
      <div className={classes.protein} style={{ flexGrow: Math.random() }} />
      <div className={classes.fat} style={{ flexGrow: Math.random() }} />
    </div>
  );
}
