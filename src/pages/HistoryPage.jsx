import { makeStyles } from '@material-ui/core';
import { DailyNutritionChart } from 'components';
import React from 'react';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
  },
  barChart: {
    maxWidth: '48rem',
    height: '100%',
    maxHeight: '20rem',
    padding: '1rem',
    '@media (min-width: 48rem)': { maxHeight: '30rem' },
  },
}));

export default React.memo(function HistoryPage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.barChart}>
        <DailyNutritionChart />
      </div>
    </div>
  );
});
