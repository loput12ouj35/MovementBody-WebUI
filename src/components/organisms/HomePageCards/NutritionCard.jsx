import { CardContent, makeStyles } from '@material-ui/core';
import { PieChart } from '@material-ui/icons';
import {
  NutritionBar,
  NutritionChart,
  StyledCard,
  StyledCardHeader,
} from 'components';
import { MESSAGES } from 'data';
import React from 'react';

const useStyles = makeStyles(() => ({
  root: { backgroundColor: 'ivory' },
  content: {
    display: 'flex',
    flexWrap: 'wrap',
    '& svg': { verticalAlign: 'top' },
  },
  barContainer: { flex: 'auto', marginRight: '1rem' },
  chartContainer: { width: '40%' },
}));
const TYPES = ['carbohydrate', 'protein', 'fat'];

export default React.memo(function NutritionCard() {
  const classes = useStyles();

  return (
    <StyledCard className={classes.root} responsiveOptions={{ widthRem: 22 }}>
      <StyledCardHeader
        icon={<PieChart />}
        markColor="blueviolet"
        markShadow="rgba(138, 43, 226, 0.4)"
        title={MESSAGES.homePage.title.nutrition}
      />
      <CardContent className={classes.content}>
        <div className={classes.barContainer}>
          {TYPES.map((type) => (
            <NutritionBar key={type} type={type} />
          ))}
        </div>
        <div className={classes.chartContainer}>
          <NutritionChart types={TYPES} />
        </div>
      </CardContent>
    </StyledCard>
  );
});
