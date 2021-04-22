import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  withStyles,
} from '@material-ui/core';
import { Restaurant } from '@material-ui/icons';
import { MESSAGES } from 'data';
import React from 'react';
import _ from 'lodash';
import { inject, observer } from 'mobx-react';

const styles = (theme) => ({
  root: { gridColumnEnd: 'span 6' },
  avatar: { backgroundColor: 'orange' },
  content: {
    '& p': { fontSize: '0.75em' },
    '& b': { fontSize: '2em' },
  },
});

@withStyles(styles)
@inject('userDailyRecordStore')
@observer
class FoodCrad extends React.PureComponent {
  toNumber = (data) => _.mapValues(data, (v) => v ?? 0);

  render() {
    const { classes, userDailyRecordStore } = this.props;
    const { goal, breakfirst, lunch, dinner, snack } = this.toNumber(
      userDailyRecordStore.food
    );
    const total = breakfirst + lunch + dinner;

    return (
      <Card className={classes.root} component="article">
        <CardHeader
          avatar={
            <Avatar className={classes.avatar}>
              <Restaurant />
            </Avatar>
          }
          title={MESSAGES.homePage.title.food}
          subheader="뭐라하지"
        />
        <CardContent className={classes.content}>
          <p>
            <b>{total}</b>
            {` /${goal + MESSAGES.unit.kcal}`}
          </p>
        </CardContent>
      </Card>
    );
  }
}

export default FoodCrad;
