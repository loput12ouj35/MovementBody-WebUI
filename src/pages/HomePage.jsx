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

const CARD_MIN_WIDTH = '10em';
const CARD_GAP = '0.5em';
const rowToMinWidth = (n) =>
  `calc((${CARD_MIN_WIDTH} + ${CARD_GAP} * 2) * ${n})`;

const CARD_COANINER_STYLE = {
  display: 'flex',
  padding: `calc(${CARD_GAP} / 2)`,
  flexDirection: 'column',
  flexWrap: 'wrap',
  gap: CARD_GAP,
  '& > *': { minWidth: CARD_MIN_WIDTH, flexShrink: 0 },
};

const useStyles = makeStyles((theme) => ({
  root: { backgroundColor: '#fafafa', height: '100%', overflow: 'hidden auto' },
  title: {
    display: 'flex',
    alignItems: 'center',
    color: 'rgba(0, 0, 0, 0.87)',
    margin: CARD_GAP,
    lineHeight: 'normal',
  },
  fab: { position: 'fixed', bottom: '5em', right: '2em' },
  highCardContainer: {
    ...CARD_COANINER_STYLE,
    [`@media (min-width: ${rowToMinWidth(2)})`]: { maxHeight: 220 },
  },
  lowCardContainer: {
    ...CARD_COANINER_STYLE,
    [`@media (min-width: ${rowToMinWidth(2)})`]: { maxHeight: 500 },
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
      <div className={classes.highCardContainer}>
        <FoodRecommandationCard />
      </div>
      <p className={classes.title}>
        <LowPriority fontSize="small" />
        {MESSAGES.common.other}
      </p>
      <div className={classes.lowCardContainer}>
        <StepCountCard />
        <ActiveTimeCard />
        <FoodCard />
        <WaterCard />
        <WeightCard />
        <SleepCard />
      </div>
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
