import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  withStyles,
} from '@material-ui/core';
import { AccessTime } from '@material-ui/icons';
import { CardMainText } from 'components';
import { MESSAGES } from 'data';
import { inject, observer } from 'mobx-react';
import React from 'react';

const styles = (theme) => ({
  avatar: { backgroundColor: 'lightseagreen' },
  content: { fontSize: '0.75em' },
});

@withStyles(styles)
@inject('userDailyRecordStore')
@observer
class ActiveTimeCard extends React.PureComponent {
  render() {
    const { classes, userDailyRecordStore } = this.props;
    const { current, goal, kcal } = userDailyRecordStore.activeTime;

    return (
      <Card>
        <CardHeader
          avatar={
            <Avatar className={classes.avatar}>
              <AccessTime />
            </Avatar>
          }
          title={MESSAGES.homePage.title.activeTime}
          subheader="뭐라하지"
        />
        <CardContent className={classes.content}>
          <CardMainText
            mainText={current ?? 0}
            subText={` /${(goal ?? 0) + MESSAGES.unit.min}`}
          />
          <p>{(kcal ?? 0) + MESSAGES.unit.kcal}</p>
        </CardContent>
      </Card>
    );
  }
}

export default ActiveTimeCard;
