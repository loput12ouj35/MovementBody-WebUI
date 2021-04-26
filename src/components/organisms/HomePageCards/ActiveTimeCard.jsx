import { CardContent } from '@material-ui/core';
import { AccessTime } from '@material-ui/icons';
import { CardMainText, StyledCard, StyledCardHeader } from 'components';
import { MESSAGES } from 'data';
import { inject, observer } from 'mobx-react';
import React from 'react';

@inject('userDailyRecordStore')
@observer
class ActiveTimeCard extends React.PureComponent {
  render() {
    const { userDailyRecordStore } = this.props;
    const { current, goal, kcal } = userDailyRecordStore.activeTime;

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
          <p>{(kcal ?? 0) + MESSAGES.unit.kcal}</p>
        </CardContent>
      </StyledCard>
    );
  }
}

export default ActiveTimeCard;
