import { CardContent, Typography, withStyles } from '@material-ui/core';
import { AssignmentTurnedIn } from '@material-ui/icons';
import { GoalInput, StyledCard, StyledCardHeader } from 'components';
import { MESSAGES } from 'data';
import { inject, observer } from 'mobx-react';
import React from 'react';

const styles = () => ({
  subtitle: { margin: '1em 0' },
});

@withStyles(styles)
@inject('profilePageStore')
@observer
class BasicInfoCreationCard extends React.PureComponent {
  handleGoalChange = (e, v) => {
    const { profilePageStore } = this.props;
    profilePageStore.updateProfile('goal', v);
  };

  render() {
    const { profilePageStore, classes, update } = this.props;
    const { goal } = profilePageStore.profile;
    const title = update
      ? MESSAGES.member.title.updateGoal
      : MESSAGES.member.title.createGoal;

    return (
      <StyledCard Component="div" responsiveOptions={false}>
        <StyledCardHeader
          icon={<AssignmentTurnedIn />}
          markColor="darkblue"
          markShadow="rgba(0, 0, 139, 0.4)"
          title={title}
        />
        <CardContent>
          <Typography className={classes.subtitle}>
            {MESSAGES.member.goal}
          </Typography>
          <GoalInput value={goal} onChange={this.handleGoalChange} />
        </CardContent>
      </StyledCard>
    );
  }
}

export default BasicInfoCreationCard;
