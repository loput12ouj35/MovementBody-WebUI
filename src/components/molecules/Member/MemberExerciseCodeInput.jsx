import { Button, makeStyles, MobileStepper } from '@material-ui/core';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@material-ui/icons';
import { MESSAGES } from 'data';
import React, { useCallback } from 'react';
import SwipeableViews from 'react-swipeable-views';
import step1Img from 'img/execise_steps/1.jpg';
import step2Img from 'img/execise_steps/1.jpg';
import step3Img from 'img/execise_steps/1.jpg';
import step4Img from 'img/execise_steps/1.jpg';
import step5Img from 'img/execise_steps/1.jpg';

const STEPS_IMGS = [step1Img, step2Img, step3Img, step4Img, step5Img];

const useStyles = makeStyles((theme) => ({
  label: {
    backgroundColor: '#fafafa',
    height: '3rem',
    fontSize: '0.875em',
    display: 'flex',
    alignItems: 'center',
    paddingLeft: '2rem',
  },
  img: { width: '100%', display: 'block', overflow: 'hidden' },
}));

export default React.memo(function (props) {
  const { name, value, updateValue } = props;
  const max = 5;
  // No need 'useCallback' in the following two methods, as this component rerenders only if the value changes.
  const handleNext = () => updateValue(name, value + 1);
  const handleBack = () => updateValue(name, value - 1);
  const handleChangeIndex = useCallback((step) => updateValue(name, step), []);
  const classes = useStyles();

  return (
    <div>
      <p className={classes.label}>{MESSAGES.signUp.exerciesSteps[value]}</p>
      <SwipeableViews
        index={value}
        enableMouseEvents
        onChangeIndex={handleChangeIndex}
      >
        {STEPS_IMGS.map((src, i) => (
          <div key={i}>
            {Math.abs(value - i) <= 2 ? (
              <img className={classes.img} src={src} alt={`exercise-${i}`} />
            ) : null}
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
