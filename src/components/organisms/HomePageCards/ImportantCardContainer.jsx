import React from 'react';
import { Typography } from '@material-ui/core';
import { PriorityHigh } from '@material-ui/icons';
import { MESSAGES } from 'data';
import FoodRecommandationCard from './Cards/FoodRecommandationCard';
import NutritionCard from './Cards/NutritionCard';

export default React.memo(function (props) {
  const { classes } = props;

  return (
    <>
      <Typography className={classes.title}>
        <PriorityHigh fontSize="small" />
        {MESSAGES.common.highPriority}
      </Typography>
      <ol className={classes.cardContainer}>
        <FoodRecommandationCard />
        <NutritionCard />
      </ol>
    </>
  );
});
