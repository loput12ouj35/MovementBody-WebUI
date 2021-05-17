import { CardContent, makeStyles } from '@material-ui/core';
import { PieChart } from '@material-ui/icons';
import { NutritionBar, StyledCard, StyledCardHeader } from 'components';
import { MESSAGES } from 'data';
import React from 'react';

const useStyles = makeStyles(() => ({
  root: { backgroundColor: 'ivory' },
}));

export default React.memo(function NutritionGoalCard() {
  const classes = useStyles();

  return (
    <StyledCard className={classes.root} responsiveOptions={{ widthRem: 22 }}>
      <StyledCardHeader
        icon={<PieChart />}
        markColor="blueviolet"
        markShadow="rgba(138, 43, 226, 0.4)"
        title={MESSAGES.homePage.title.nutrition}
      />
      <CardContent>
        <div>
          <NutritionBar type="carbohydrate" />
          <NutritionBar type="protein" />
          <NutritionBar type="fat" />
        </div>
      </CardContent>
    </StyledCard>
  );
});
