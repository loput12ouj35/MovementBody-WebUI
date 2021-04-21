import { Button, makeStyles, MobileStepper, Slide } from '@material-ui/core';
import {
  DirectionsBike,
  DirectionsRun,
  DirectionsWalk,
  Hotel,
  KeyboardArrowLeft,
  KeyboardArrowRight,
  Rowing,
} from '@material-ui/icons';
import { MESSAGES } from 'data';
import React, { useCallback } from 'react';
import SwipeableViews from 'react-swipeable-views';

const STEPS = [
  { icon: <Hotel /> },
  { icon: <DirectionsWalk /> },
  { icon: <DirectionsRun /> },
  { icon: <DirectionsBike /> },
  { icon: <Rowing /> },
];

const useStyles = makeStyles((theme) => ({
  view: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#fdfdfd',
    overflow: 'hidden',
    padding: '0.5em',
  },
  label: { fontSize: '2em', margin: '1rem' },
  icon: { fontSize: '4em', margin: '1rem' },
}));

export default React.memo(function MemberExerciseCodeInput(props) {
  const { name, value, updateValue } = props;
  const max = 5;
  // No need 'useCallback' in the following two methods, as this component rerenders only if the value changes.
  const handleNext = () => updateValue(name, value + 1);
  const handleBack = () => updateValue(name, value - 1);
  const handleChangeIndex = useCallback((step) => updateValue(name, step), []);
  const classes = useStyles();

  return (
    <div>
      <SwipeableViews
        index={value}
        enableMouseEvents
        onChangeIndex={handleChangeIndex}
      >
        {STEPS.map(({ icon }, i) => (
          <div key={i} className={classes.view}>
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
              <p className={classes.label}>
                {MESSAGES.signUp.exerciesSteps[i]}
              </p>
            </Slide>
          </div>
        ))}
      </SwipeableViews>
      <MobileStepper
        steps={max}
        position="static"
        activeStep={value}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={value === max - 1}
          >
            <KeyboardArrowRight />
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={value === 0}>
            <KeyboardArrowLeft />
          </Button>
        }
      />
    </div>
  );
});
