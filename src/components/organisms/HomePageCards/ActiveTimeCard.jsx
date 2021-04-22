import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  IconButton,
  withStyles,
} from '@material-ui/core';
import { AccessTime, Settings } from '@material-ui/icons';
import { MESSAGES } from 'data';
import { inject, observer } from 'mobx-react';
import React from 'react';

const styles = (theme) => ({
  root: { gridColumnEnd: 'span 6' },
  avatar: { backgroundColor: 'lightseagreen' },
  content: {
    '& p': { fontSize: '0.75em' },
    '& b': { fontSize: '2em' },
  },
});

@withStyles(styles)
@inject('userDailyRecordStore')
@observer
class ActiveTimeCard extends React.PureComponent {
  render() {
    const { classes, userDailyRecordStore } = this.props;
    const { current, goal, kcal } = userDailyRecordStore.activeTime;

    return (
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar className={classes.avatar}>
              <AccessTime />
            </Avatar>
          }
          title={MESSAGES.homePage.title.activeTime}
          subheader="뭐라하지"
          action={
            <IconButton>
              <Settings />
            </IconButton>
          }
        />
        <CardContent className={classes.content}>
          <p>
            <b>{current ?? 0}</b>
            {` /${(goal ?? 0) + MESSAGES.unit.min}`}
          </p>
          <p>{(kcal ?? 0) + MESSAGES.unit.kcal}</p>
        </CardContent>
      </Card>
    );
  }
}

export default ActiveTimeCard;
