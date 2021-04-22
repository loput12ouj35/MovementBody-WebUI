import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  IconButton,
  makeStyles,
} from '@material-ui/core';
import { AccessTime, Settings } from '@material-ui/icons';
import { MESSAGES } from 'data';
import React from 'react';

const DUMMY = { current: 30, goal: 60, kcal: 120 };

const useStyles = makeStyles((theme) => ({
  root: { gridColumnEnd: 'span 6' },
  avatar: { backgroundColor: 'lightseagreen' },
  content: {
    '& p': { fontSize: '0.75em' },
    '& b': { fontSize: '2em' },
  },
}));

export default React.memo(function ActiveTimeCard(props) {
  const { current, goal, kcal } = DUMMY;
  const classes = useStyles();

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
});
