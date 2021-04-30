import { Button, makeStyles, MobileStepper } from '@material-ui/core';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@material-ui/icons';
import { StartView1 } from 'components';
import React, { useCallback, useReducer } from 'react';
import SwipeableViews from 'react-swipeable-views';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    maxWidth: '48em',
    overflowX: 'hidden',
    position: 'relative',
    height: '100%',
  },
  stepper: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: 'transparent',
    '& .MuiMobileStepper-dot': { backgroundColor: 'rgba(255, 255, 255, 0.6)' },
    '& .MuiMobileStepper-dotActive': {
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
    },
  },
  button: { color: 'rgba(255, 255, 255, 0.6)' },
}));

const reducer = (index, action) => {
  switch (action.type) {
    case 'next':
      return index + 1;
    case 'back':
      return index - 1;
    default:
      return action._index;
  }
};

export default React.memo(function GetStartedPage(props) {
  const [index, dispacth] = useReducer(reducer, 0);
  const max = 3;
  const handleNext = useCallback(() => dispacth({ type: 'next' }), []);
  const handleBack = useCallback(() => dispacth({ type: 'back' }), []);
  const handleChangeIndex = useCallback((_index) => dispacth({ _index }), []);
  const classes = useStyles();

  return (
    <main>
      <div className={classes.root}>
        <SwipeableViews
          style={{ height: '100%' }}
          containerStyle={{ height: '100%' }}
          index={index}
          enableMouseEvents
          onChangeIndex={handleChangeIndex}
        >
          <StartView1 />
          <span>todo</span>
          <span>todo</span>
        </SwipeableViews>
        <MobileStepper
          className={classes.stepper}
          steps={max}
          position="static"
          activeStep={index}
          nextButton={
            <Button
              className={classes.button}
              size="small"
              onClick={handleNext}
              disabled={index >= max - 1}
            >
              <KeyboardArrowRight />
            </Button>
          }
          backButton={
            <Button
              className={classes.button}
              size="small"
              onClick={handleBack}
              disabled={index <= 0}
            >
              <KeyboardArrowLeft />
            </Button>
          }
        />
      </div>
    </main>
  );
});
