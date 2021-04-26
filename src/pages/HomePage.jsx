import { Fab, makeStyles } from '@material-ui/core';
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
import _ from 'lodash';

const CARD_GAP = '0.25em';
const createMediaQuery = (n) => ({
  [`@media (min-width:${12.5 * n}rem)`]: {
    maxWidth: `${100 / n}%`,
    flexBasis: `${100 / n}%`,
  },
});

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
  cardContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      padding: CARD_GAP,
      boxSizing: 'border-box',
      maxWidth: '100%',
      flexBasis: '100%',
      '& > *': { height: '100%' },
      ...Object.assign(..._.range(2, 7).map(createMediaQuery)),
    },
  },
}));

export default React.memo(function HomePage(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <p className={classes.title}>
        <PriorityHigh fontSize="small" />
        {MESSAGES.common.highPriority}
      </p>
      <ol className={classes.cardContainer}>
        <li>
          <FoodRecommandationCard />
        </li>
      </ol>
      <p className={classes.title}>
        <LowPriority fontSize="small" />
        {MESSAGES.common.other}
      </p>
      <ol className={classes.cardContainer}>
        <li>
          <StepCountCard />
        </li>
        <li>
          <ActiveTimeCard />
        </li>
        <li>
          <FoodCard />
        </li>
        <li>
          <WaterCard />
        </li>
        <li>
          <WeightCard />
        </li>
        <li>
          <SleepCard />
        </li>
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
