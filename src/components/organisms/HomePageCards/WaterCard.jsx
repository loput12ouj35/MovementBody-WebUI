import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  withStyles,
} from '@material-ui/core';
import { LocalDrink } from '@material-ui/icons';
import { CardMainText, ToggleIconButton } from 'components';
import { MESSAGES } from 'data';
import { inject, observer } from 'mobx-react';
import React from 'react';

const styles = (theme) => ({
  root: { gridColumnEnd: 'span 6' },
  avatar: { backgroundColor: 'dodgerblue' },
  content: { fontSize: '0.75em' },
});

@withStyles(styles)
@inject('userDailyRecordStore')
@observer
class WaterCard extends React.PureComponent {
  render() {
    const { classes, userDailyRecordStore } = this.props;
    const { cup, ml } = userDailyRecordStore.water;

    return (
      <Card className={classes.root} component="article">
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
          <CardMainText
            mainText={cup ?? 0}
            subText={` ${MESSAGES.unit.cup} (${(ml ?? 0) + MESSAGES.unit.ml})`}
          />
        </CardContent>
      </Card>
    );
  }
}

export default WaterCard;
