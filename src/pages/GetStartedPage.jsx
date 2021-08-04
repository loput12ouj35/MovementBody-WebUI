import { Button, makeStyles, MobileStepper } from '@material-ui/core';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@material-ui/icons';
import { StartView1 } from 'components';
import { MESSAGES } from 'data';
import React, { useCallback, useReducer } from 'react';
import { Link } from 'react-router-dom';
import SwipeableViews from 'react-swipeable-views';

const useStyles = makeStyles(() => ({
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
  goHomeButton: { color: '#1a90ff' },
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

export default React.memo(function GetStartedPage() {
  const [index, dispacth] = useReducer(reducer, 0);
  const MAX = 2;
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
          <div>
            <span>[[todo. 아이디어 좀.. 옆 버튼 눌러 시작]]</span>
            <Button
              className={classes.goHomeButton}
              aria-label="menu-button"
              component={Link}
              to="/home"
            >
              {MESSAGES.getStartedPage.goHome}
            </Button>
          </div>
        </SwipeableViews>
        <MobileStepper
          className={classes.stepper}
          steps={MAX}
          position="static"
          activeStep={index}
          nextButton={
            <Button
              className={classes.button}
              size="small"
              onClick={handleNext}
              disabled={index >= MAX - 1}
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
