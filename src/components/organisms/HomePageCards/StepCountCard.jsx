import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  IconButton,
  withStyles,
} from '@material-ui/core';
import { DirectionsWalk, Settings } from '@material-ui/icons';
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
class StepCountCard extends React.PureComponent {
  render() {
    const { classes, userDailyRecordStore } = this.props;
    const { current, goal, km } = userDailyRecordStore.stepCount;

    return (
      <Card>
        <CardHeader
          avatar={
            <Avatar className={classes.avatar}>
              <DirectionsWalk />
            </Avatar>
          }
          title={MESSAGES.homePage.title.stepCount}
          subheader="뭐라하지"
          action={
            <IconButton>
              <Settings />
            </IconButton>
          }
        />
        <CardContent className={classes.content}>
          <CardMainText
            mainText={current ?? 0}
            subText={` /${(goal ?? 0) + MESSAGES.unit.step}`}
          />
          <p>{(km ?? 0) + MESSAGES.unit.km}</p>
        </CardContent>
      </Card>
    );
  }
}

export default StepCountCard;
