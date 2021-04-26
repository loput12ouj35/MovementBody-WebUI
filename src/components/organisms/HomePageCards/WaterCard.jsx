import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  withStyles,
} from '@material-ui/core';
import { LocalDrink } from '@material-ui/icons';
import { CardMainText, WaterInput } from 'components';
import { MESSAGES } from 'data';
import { inject, observer } from 'mobx-react';
import React from 'react';

const styles = (theme) => ({
  avatar: { backgroundColor: 'dodgerblue' },
  content: { fontSize: '0.75em', display: 'flex' },
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
      <Card>
        <CardHeader
          avatar={
            <Avatar className={classes.avatar}>
              <LocalDrink />
            </Avatar>
          }
          title={MESSAGES.homePage.title.water}
          subheader="뭐라하지"
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
      </Card>
    );
  }
}

export default WaterCard;
