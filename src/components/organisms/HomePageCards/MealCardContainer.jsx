import React from 'react';
import { Typography } from '@material-ui/core';
import { ArrowDropDown, Restaurant } from '@material-ui/icons';
import { MESSAGES } from 'data';
import MealCard from './Cards/MealCard';

export default React.memo(function (props) {
  const { classes } = props;

  return (
    <>
      <Typography className={classes.title}>
        <Restaurant fontSize="small" />
        {MESSAGES.homePage.title.food}
        <ArrowDropDown />
      </Typography>
      <ol className={classes.cardContainer}>
        <MealCard type="breakfirst" />
        <MealCard type="lunch" />
        <MealCard type="dinner" />
      </ol>
    </>
  );
});
