import { Button, MobileStepper } from '@material-ui/core';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@material-ui/icons';
import React, { useCallback, useReducer } from 'react';
import SwipeableViews from 'react-swipeable-views';

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

  return (
    <div>
      <SwipeableViews
        index={index}
        enableMouseEvents
        onChangeIndex={handleChangeIndex}
      >
        <span>todo</span>
        <span>todo</span>
        <span>todo</span>
      </SwipeableViews>
      <MobileStepper
        steps={max}
        position="static"
        activeStep={index}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={index >= max - 1}>
            <KeyboardArrowRight />
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={index <= 0}>
            <KeyboardArrowLeft />
          </Button>
        }
      />
    </div>
  );
});
