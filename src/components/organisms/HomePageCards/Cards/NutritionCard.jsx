import { CardContent, withStyles } from '@material-ui/core';
import { PieChart } from '@material-ui/icons';
import {
  CardMainText,
  NutritionBar,
  NutritionChart,
  StyledCard,
  StyledCardHeader,
} from 'components';
import { MESSAGES } from 'data';
import { inject, observer } from 'mobx-react';
import React from 'react';

const styles = () => ({
  root: { backgroundColor: 'ivory' },
  content: {
    display: 'flex',
    flexWrap: 'wrap',
    '& svg': { verticalAlign: 'top' },
  },
  barContainer: { flex: 'auto', marginRight: '1rem' },
  chartContainer: { width: '40%', position: 'relative' },
  calorie: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '& p': { textAlign: 'center' },
  },
});
const TYPES = ['carbon', 'protein', 'fat'];
const COLORS = ['#1a90ff', '#ff1a90', '#ff901a'];

@withStyles(styles)
@inject('nutritionViewModel')
@observer
class NutritionCard extends React.PureComponent {
  createChartData = (values) =>
    TYPES.map((type) => ({
      id: type,
      label: MESSAGES.common[type],
      value: values[type],
    }));

  renderBars = (values, goals) =>
    TYPES.map((type, i) => (
      <NutritionBar
        key={type}
        current={values[type]}
        goal={goals[type]}
        title={MESSAGES.common[type]}
        color={COLORS[i]}
      />
    ));

  render() {
    const { classes, nutritionViewModel } = this.props;
    const { current, goal } = nutritionViewModel;

    return (
      <StyledCard
        className={classes.root}
        responsiveOptions={{ widthRem: 27.5 }}
      >
        <StyledCardHeader
          icon={<PieChart />}
          markColor="blueviolet"
          markShadow="rgba(138, 43, 226, 0.4)"
          title={MESSAGES.homePage.title.nutrition}
        />
        <CardContent className={classes.content}>
          <div className={classes.barContainer}>
            {this.renderBars(current, goal)}
          </div>
          <div className={classes.chartContainer}>
            <NutritionChart
              data={this.createChartData(current)}
              colors={COLORS}
            />
            <div className={classes.calorie}>
              <CardMainText
                mainText={current.totalCalorie}
                subText={`\n/dummy ${MESSAGES.unit.kcal}`}
              />
            </div>
          </div>
        </CardContent>
      </StyledCard>
    );
  }
}

export default NutritionCard;
