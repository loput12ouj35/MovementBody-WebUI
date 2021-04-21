import { Button, makeStyles, MobileStepper } from '@material-ui/core';
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
  label: {
    fontSize: '2em',
    margin: '1rem',
    transition: 'all ease .3s',
    transitionDelay: 200,
    transform: 'translateY(0)',
    '&.inactive': { opacity: 0, transform: 'translateY(-1.25rem)' },
  },
  icon: {
    fontSize: '4em',
    margin: '1rem',
    transition: 'all ease .3s',
    transitionDelay: 100,
    transform: 'translateY(0)',
    '&.inactive': { opacity: 0, transform: 'translateY(1.25rem)' },
  },
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
            {Math.abs(value - i) <= 2
              ? React.cloneElement(icon, {
                  className: classes.icon + (value === i ? '' : ' inactive'),
                })
              : null}
            <p className={classes.label + (value === i ? '' : ' inactive')}>
              {MESSAGES.signUp.exerciesSteps[i]}
            </p>
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
