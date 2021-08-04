import React from 'react';
import { Typography } from '@material-ui/core';
import { LowPriority } from '@material-ui/icons';
import { MESSAGES } from 'data';
import ActiveTimeCard from './Cards/ActiveTimeCard';
import SleepCard from './Cards/SleepCard';
import WeightCard from './Cards/WeightCard';
import WaterCard from './Cards/WaterCard';
import FoodCard from './Cards/FoodCard';

export default React.memo(function (props) {
  const { classes } = props;

  return (
    <>
      <Typography className={classes.title}>
        <LowPriority fontSize="small" />
        {MESSAGES.common.summary}
      </Typography>
      <ol className={classes.cardContainer}>
        {/* <StepCountCard /> */}
        <ActiveTimeCard />
        <FoodCard />
        <WaterCard />
        <WeightCard />
        <SleepCard />
      </ol>
    </>
  );
});
