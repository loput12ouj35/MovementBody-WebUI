import { LinearProgress, Typography, withStyles } from '@material-ui/core';
import { CardMainText } from 'components';
import { MESSAGES } from 'data';
import { inject, observer } from 'mobx-react';
import React from 'react';

const styles = () => ({
  root: {
    flex: 'auto',
    margin: '0.5rem 0',
    height: '0.5rem',
    borderRadius: '0.25rem',
    backgroundColor: '#eee',
    '&.under34 $bar': { backgroundColor: '#ff1a90' },
    '&.under67 $bar': { backgroundColor: '#ff901a' },
  },
  bar: { borderRadius: '0.25rem', backgroundColor: '#1a90ff' },
  textContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

@withStyles(styles)
@inject('userDailyRecordStore')
@observer
class NutritionBar extends React.PureComponent {
  render() {
    const { classes, userDailyRecordStore, type } = this.props;
    const { currentNutrition, goalNutrition } = userDailyRecordStore;
    const current = currentNutrition[type];
    const goal = goalNutrition[type];
    const ratio = Math.min((100 * current) / goal, 100);

    return (
      <>
        <div className={classes.textContainer}>
          <Typography variant="body2">{MESSAGES.common[type]}</Typography>
          <CardMainText mainText={current} subText={`/${goal}`} />
        </div>
        <LinearProgress
          variant="determinate"
          classes={classes}
          className={ratio < 34 ? 'under34' : ratio < 67 ? 'under67' : null}
          value={ratio}
        />
      </>
    );
  }
}

export default NutritionBar;
