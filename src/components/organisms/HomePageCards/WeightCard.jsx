import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  withStyles,
} from '@material-ui/core';
import { AirlineSeatReclineNormal } from '@material-ui/icons';
import { CardMainText } from 'components';
import { MESSAGES } from 'data';
import { inject, observer } from 'mobx-react';
import React from 'react';

const styles = (theme) => ({
  avatar: { backgroundColor: 'blueviolet' },
  content: { fontSize: '0.75em' },
});

@withStyles(styles)
@inject('userDailyRecordStore')
@observer
class WeightCard extends React.PureComponent {
  render() {
    const { classes, userDailyRecordStore } = this.props;
    const { current, goal, last } = userDailyRecordStore.weight;
    const diff = (current ?? 0) - (last ?? 0);

    return (
      <Card>
        <CardHeader
          avatar={
            <Avatar className={classes.avatar}>
              <AirlineSeatReclineNormal />
            </Avatar>
          }
          title={MESSAGES.homePage.title.weight}
          subheader="뭐라하지"
        />
        <CardContent className={classes.content}>
          <CardMainText
            mainText={current ?? '-'}
            subText={` →${(goal ?? '-') + MESSAGES.unit.kg}`}
          />
          <p>{MESSAGES.homePage.subheader.weightDown(diff)}</p>
        </CardContent>
      </Card>
    );
  }
}

export default WeightCard;
