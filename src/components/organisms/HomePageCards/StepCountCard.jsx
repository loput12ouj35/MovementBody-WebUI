import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  IconButton,
  makeStyles,
} from '@material-ui/core';
import { DirectionsWalk, Settings } from '@material-ui/icons';
import { MESSAGES } from 'data';
import React from 'react';

const dummy = { current: 12345, goal: 6000, km: '0.9' };

const useStyles = makeStyles((theme) => ({
  root: { gridColumnEnd: 'span 6' },
  avatar: { backgroundColor: 'lightseagreen' },
  content: {
    '& p': { fontSize: '0.75em' },
    '& b': { fontSize: '2em', marginRight: '0.25em' },
  },
}));

export default React.memo(function StepCountCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
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
        <p>
          <b>{dummy.current}</b>/{dummy.goal + MESSAGES.unit.step}
        </p>
        <p>{dummy.km + MESSAGES.unit.km}</p>
      </CardContent>
    </Card>
  );
});
