import { Fab, makeStyles, Typography } from '@material-ui/core';
import { Edit, LowPriority, PriorityHigh } from '@material-ui/icons';
import {
  ActiveTimeCard,
  FoodCard,
  FoodRecommandationCard,
  SleepCard,
  StepCountCard,
  WaterCard,
  WeightCard,
} from 'components';
import { MESSAGES } from 'data';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  root: { backgroundColor: '#fafafa', height: '100%', overflow: 'hidden auto' },
  title: {
    display: 'flex',
    alignItems: 'center',
    color: 'rgba(0, 0, 0, 0.87)',
    margin: '0.5em',
    lineHeight: 'normal',
  },
  fab: { position: 'fixed', bottom: '5em', right: '2em' },
  cardContainer: { display: 'flex', flexWrap: 'wrap' },
}));

export default React.memo(function HomePage(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography className={classes.title}>
        <PriorityHigh fontSize="small" />
        {MESSAGES.common.highPriority}
      </Typography>
      <ol className={classes.cardContainer}>
        <FoodRecommandationCard />
      </ol>
      <Typography className={classes.title}>
        <LowPriority fontSize="small" />
        {MESSAGES.common.other}
      </Typography>
      <ol className={classes.cardContainer}>
        <StepCountCard />
        <ActiveTimeCard />
        <FoodCard />
        <WaterCard />
        <WeightCard />
        <SleepCard />
      </ol>
      <Fab
        color="secondary"
        className={classes.fab}
        aria-label="edit today history"
      >
        <Edit />
      </Fab>
    </div>
  );
});
