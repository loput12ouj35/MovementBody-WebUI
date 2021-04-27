import { CardContent, Typography } from '@material-ui/core';
import { AirlineSeatReclineNormal } from '@material-ui/icons';
import { CardMainText, StyledCard, StyledCardHeader } from 'components';
import { MESSAGES } from 'data';
import { inject, observer } from 'mobx-react';
import React from 'react';

@inject('userDailyRecordStoreStore')
@observer
class WeightCard extends React.PureComponent {
  render() {
    const { userDailyRecordStoreStore } = this.props;
    const { current, goal, last } = userDailyRecordStoreStore.weight;
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
          <Typography variant="body2">
            {MESSAGES.homePage.subheader.weightDown(diff)}
          </Typography>
        </CardContent>
      </StyledCard>
    );
  }
}

export default WeightCard;
