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

const dummy = { current: 30, goal: 60, kcal: 120 };

const useStyles = makeStyles((theme) => ({
  root: { gridColumnEnd: 'span 6' },
  avatar: { backgroundColor: 'lightseagreen' },
  content: {
    '& p': { fontSize: '0.75em' },
    '& b': { fontSize: '2em', marginRight: '0.25em' },
  },
}));

export default React.memo(function ActiveTimeCard(props) {
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
          <b>{dummy.current}</b>/{dummy.goal + MESSAGES.unit.min}
        </p>
        <p>{dummy.kcal + MESSAGES.unit.kcal}</p>
      </CardContent>
    </Card>
  );
});
