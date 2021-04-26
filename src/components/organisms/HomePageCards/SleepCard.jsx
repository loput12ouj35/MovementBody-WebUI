import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  withStyles,
} from '@material-ui/core';
import { NightsStay } from '@material-ui/icons';
import { CardMainText } from 'components';
import { MESSAGES } from 'data';
import { inject, observer } from 'mobx-react';
import React from 'react';

const styles = (theme) => ({
  avatar: { backgroundColor: 'darkslategray', color: 'yellow' },
  content: { fontSize: '0.75em' },
});

@withStyles(styles)
@inject('userDailyRecordStore')
@observer
class SleepCard extends React.PureComponent {
  render() {
    const { classes, userDailyRecordStore } = this.props;
    const { lastSleepTime, wakeUpTime, goal } = userDailyRecordStore.sleep;
    const diff =
      wakeUpTime && lastSleepTime
        ? (wakeUpTime - lastSleepTime) / 1000 / 3600
        : '-';

    return (
      <Card>
        <CardHeader
          avatar={
            <Avatar className={classes.avatar}>
              <NightsStay />
            </Avatar>
          }
          title={MESSAGES.homePage.title.sleep}
          subheader="뭐라하지"
        />
        <CardContent className={classes.content}>
          <CardMainText
            mainText={diff}
            subText={` /${(goal ?? '-') + MESSAGES.unit.hour}`}
          />
          <p>{`${lastSleepTime.toLocaleTimeString()} - ${wakeUpTime.toLocaleTimeString()}`}</p>
        </CardContent>
      </Card>
    );
  }
}

export default SleepCard;
