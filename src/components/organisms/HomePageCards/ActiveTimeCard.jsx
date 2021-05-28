import { CardContent, Typography } from '@material-ui/core';
import { AccessTime } from '@material-ui/icons';
import { CardMainText, StyledCard, StyledCardHeader } from 'components';
import { MESSAGES } from 'data';
import { inject, observer } from 'mobx-react';
import React from 'react';

@inject('todayStatStore')
@observer
class ActiveTimeCard extends React.PureComponent {
  render() {
    const { todayStatStore } = this.props;
    const { current, goal, kcal } = todayStatStore.activeTime;

    return (
      <StyledCard>
        <StyledCardHeader
          icon={<AccessTime />}
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
