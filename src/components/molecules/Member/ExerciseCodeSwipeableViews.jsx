import { makeStyles, Slide, Typography } from '@material-ui/core';
import {
  DirectionsBike,
  DirectionsRun,
  DirectionsWalk,
  Hotel,
  Rowing,
} from '@material-ui/icons';
import { MESSAGES } from 'data';
import React from 'react';
import SwipeableViews from 'react-swipeable-views';

const STEPS = [
  { icon: <Hotel /> },
  { icon: <DirectionsWalk /> },
  { icon: <DirectionsRun /> },
  { icon: <DirectionsBike /> },
  { icon: <Rowing /> },
];

const useStyles = makeStyles(() => ({
  view: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#fdfdfd',
    overflow: 'hidden',
    padding: '0.5em',
  },
  label: { margin: '1rem' },
  icon: { fontSize: '4em', margin: '1rem' },
}));

export default React.memo(function ExerciseCodeSwipeableViews(props) {
  const { value, handleChangeIndex } = props;
  const classes = useStyles();

  return (
    <SwipeableViews
      index={value}
      enableMouseEvents
      onChangeIndex={handleChangeIndex}
    >
      {STEPS.map(({ icon }, i) => (
        <div key={icon} className={classes.view}>
          <Slide
            in={value === i}
            direction="down"
            style={{ transitionDelay: 200 }}
          >
            {React.cloneElement(icon, { className: classes.icon })}
          </Slide>
          <Slide
            in={value === i}
            direction="up"
            style={{ transitionDelay: 100 }}
          >
            <Typography variant="h4" component="p" className={classes.label}>
              {MESSAGES.member.exerciesSteps[i]}
            </Typography>
          </Slide>
        </div>
      ))}
    </SwipeableViews>
  );
});
