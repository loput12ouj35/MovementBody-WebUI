import { CardContent, Typography } from '@material-ui/core';
import { DirectionsWalk } from '@material-ui/icons';
import { CardMainText, StyledCard, StyledCardHeader } from 'components';
import { MESSAGES } from 'data';
import { inject, observer } from 'mobx-react';
import React from 'react';

@inject('summaryViewModel')
@observer
class ActiveTimeCard extends React.PureComponent {
  render() {
    const { summaryViewModel } = this.props;
    const { current, goal, kcal } = summaryViewModel.activeTime;

    return (
      <StyledCard>
        <StyledCardHeader
          icon={<DirectionsWalk />}
          markColor="lightseagreen"
          markShadow="rgba(32, 178, 170, 0.4)"
          title={MESSAGES.homePage.title.activeTime}
        />
        <CardContent>
          <CardMainText
            mainText={current ?? 0}
            subText={` /${(goal ?? 0) + MESSAGES.unit.min}`}
          />
          <Typography variant="body2">
            {(kcal ?? 0) + MESSAGES.unit.kcal}
          </Typography>
        </CardContent>
      </StyledCard>
    );
  }
}

export default ActiveTimeCard;
