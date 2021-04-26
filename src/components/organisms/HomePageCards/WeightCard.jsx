import { CardContent } from '@material-ui/core';
import { AirlineSeatReclineNormal } from '@material-ui/icons';
import { CardMainText, StyledCard, StyledCardHeader } from 'components';
import { MESSAGES } from 'data';
import { inject, observer } from 'mobx-react';
import React from 'react';

@inject('userDailyRecordStore')
@observer
class WeightCard extends React.PureComponent {
  render() {
    const { userDailyRecordStore } = this.props;
    const { current, goal, last } = userDailyRecordStore.weight;
    const diff = (current ?? 0) - (last ?? 0);

    return (
      <StyledCard>
        <StyledCardHeader
          icon={<AirlineSeatReclineNormal />}
          markColor="blueviolet"
          markShadow="rgba(138, 43, 226, 0.4)"
          title={MESSAGES.homePage.title.weight}
        />
        <CardContent>
          <CardMainText
            mainText={current ?? '-'}
            subText={` →${(goal ?? '-') + MESSAGES.unit.kg}`}
          />
          <p>{MESSAGES.homePage.subheader.weightDown(diff)}</p>
        </CardContent>
      </StyledCard>
    );
  }
}

export default WeightCard;
