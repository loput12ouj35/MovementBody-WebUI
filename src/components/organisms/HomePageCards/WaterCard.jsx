import { CardContent, withStyles } from '@material-ui/core';
import { LocalDrink } from '@material-ui/icons';
import {
  CardMainText,
  StyledCard,
  StyledCardHeader,
  WaterInput,
} from 'components';
import { MESSAGES } from 'data';
import { inject, observer } from 'mobx-react';
import React from 'react';

const styles = (theme) => ({
  content: { display: 'flex' },
  grow: { flexGrow: 1 },
});

@withStyles(styles)
@inject('userDailyRecordStore')
@observer
class WaterCard extends React.PureComponent {
  render() {
    const { classes, userDailyRecordStore } = this.props;
    const { cup, ml } = userDailyRecordStore.water;

    return (
      <StyledCard>
        <StyledCardHeader
          icon={<LocalDrink />}
          markColor="dodgerblue"
          markShadow="rgba(30, 144, 255, 0.4)"
          title={MESSAGES.homePage.title.water}
        />
        <CardContent className={classes.content}>
          <div className={classes.grow}>
            <CardMainText
              mainText={cup ?? 0}
              subText={` ${MESSAGES.unit.cup}`}
            />
            <p>{(ml ?? 0) + MESSAGES.unit.ml}</p>
          </div>
          <WaterInput />
        </CardContent>
      </StyledCard>
    );
  }
}

export default WaterCard;
