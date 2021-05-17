import { Button, CardContent, MobileStepper } from '@material-ui/core';
import {
  FitnessCenter,
  KeyboardArrowLeft,
  KeyboardArrowRight,
} from '@material-ui/icons';
import {
  ExerciseCodeSwipeableViews,
  StyledCard,
  StyledCardHeader,
} from 'components';
import { MESSAGES } from 'data';
import { inject, observer } from 'mobx-react';
import React from 'react';

@inject('profilePageStore')
@observer
class ExerciseCodeCard extends React.PureComponent {
  handleChangeIndex = (step) => {
    const { profilePageStore } = this.props;
    profilePageStore.updateProfile('exerciseCode', step);
  };

  render() {
    const max = 5;
    const { profilePageStore, update = false } = this.props;
    const { increaseCode, decreaseCode, profile } = profilePageStore;
    const value = profile.exerciseCode;
    const title = update
      ? MESSAGES.member.title.updateExercise
      : MESSAGES.member.title.createExercise;

    return (
      <StyledCard Component="div" responsiveOptions={false}>
        <StyledCardHeader
          icon={<FitnessCenter />}
          markColor="darkred"
          markShadow="rgba(139, 0, 0, 0.4)"
          title={title}
        />
        <CardContent>
          <ExerciseCodeSwipeableViews
            value={value}
            handleChangeIndex={this.handleChangeIndex}
          />
          <MobileStepper
            steps={max}
            position="static"
            activeStep={value}
            nextButton={
              <Button
                size="small"
                onClick={increaseCode}
                disabled={value >= max - 1}
              >
                <KeyboardArrowRight />
              </Button>
            }
            backButton={
              <Button size="small" onClick={decreaseCode} disabled={value <= 0}>
                <KeyboardArrowLeft />
              </Button>
            }
          />
        </CardContent>
      </StyledCard>
    );
  }
}

export default ExerciseCodeCard;
