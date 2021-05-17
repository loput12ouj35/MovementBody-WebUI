import { CardContent, Typography } from '@material-ui/core';
import { DirectionsWalk } from '@material-ui/icons';
import { CardMainText, StyledCard, StyledCardHeader } from 'components';
import { MESSAGES } from 'data';
import { inject, observer } from 'mobx-react';
import React from 'react';

@inject('userDailyRecordStore')
@observer
class StepCountCard extends React.PureComponent {
  render() {
    const { userDailyRecordStore } = this.props;
    const { current, goal, km } = userDailyRecordStore.stepCount;

    return (
      <StyledCard>
        <StyledCardHeader
          icon={<DirectionsWalk />}
          markColor="lightseagreen"
          markShadow="rgba(32, 178, 170, 0.4)"
          title={MESSAGES.homePage.title.stepCount}
        />
        <CardContent>
          <CardMainText
            mainText={current ?? 0}
            subText={` /${(goal ?? 0) + MESSAGES.unit.step}`}
          />
          <Typography variant="body2">
            {(km ?? 0) + MESSAGES.unit.km}
          </Typography>
        </CardContent>
      </StyledCard>
    );
  }
}

export default StepCountCard;
