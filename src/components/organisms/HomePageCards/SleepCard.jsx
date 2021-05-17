import { CardContent, Typography } from '@material-ui/core';
import { NightsStay } from '@material-ui/icons';
import { CardMainText, StyledCard, StyledCardHeader } from 'components';
import { MESSAGES } from 'data';
import { inject, observer } from 'mobx-react';
import React from 'react';

const FORMAT = { hour: '2-digit', minute: '2-digit' };

@inject('userDailyRecordStore')
@observer
class SleepCard extends React.PureComponent {
  render() {
    const { userDailyRecordStore } = this.props;
    const { lastSleepTime, wakeUpTime, goal } = userDailyRecordStore.sleep;
    const diff =
      wakeUpTime && lastSleepTime
        ? (wakeUpTime - lastSleepTime) / 1000 / 3600
        : '-';
    const from = lastSleepTime.toLocaleTimeString([], FORMAT);
    const to = wakeUpTime.toLocaleTimeString([], FORMAT);

    return (
      <StyledCard>
        <StyledCardHeader
          icon={<NightsStay style={{ color: 'yellow' }} />}
          markColor="darkslategray"
          markShadow="rgba(47, 79, 79, 0.4)"
          title={MESSAGES.homePage.title.sleep}
        />
        <CardContent>
          <CardMainText
            mainText={diff}
            subText={` /${(goal ?? '-') + MESSAGES.unit.hour}`}
          />
          <Typography variant="body2">{`${from} - ${to}`}</Typography>
        </CardContent>
      </StyledCard>
    );
  }
}

export default SleepCard;
