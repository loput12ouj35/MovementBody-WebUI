import {
  CardContent,
  Divider,
  Typography,
  withStyles,
} from '@material-ui/core';
import { Face } from '@material-ui/icons';
import {
  GenderInput,
  MemberNumberInput,
  StyledCard,
  StyledCardHeader,
} from 'components';
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
  // eslint-disable-next-line react/destructuring-assignment
  update = this.props.profilePageStore.updateProfile;

  handleGenderChange = (e, v) => (v === null ? null : this.update('gender', v));

  handleHeightChange = (v) => this.update('height', v);

  handleWeightChange = (v) => this.update('weight', v);

  render() {
    const { profilePageStore, classes } = this.props;
    const { gender, height, weight } = profilePageStore.profile;

    return (
      <StyledCard Component="div" responsiveOptions={false}>
        <StyledCardHeader
          icon={<Face />}
          markColor="lightseagreen"
          markShadow="rgba(32, 178, 170, 0.4)"
          title={MESSAGES.member.title.createBasic}
        />
        <CardContent>
          <Typography className={classes.subtitle}>
            {MESSAGES.member.gender}
          </Typography>
          <GenderInput value={gender} onChange={this.handleGenderChange} />
          <Divider />
          <Typography className={classes.subtitle}>
            {MESSAGES.member.height}
          </Typography>
          <MemberNumberInput
            name="height"
            value={height}
            onChange={this.handleHeightChange}
            min={1}
            max={300}
          />
          <Divider />
          <Typography className={classes.subtitle}>
            {MESSAGES.member.weight}
          </Typography>
          <MemberNumberInput
            name="weight"
            value={weight}
            onChange={this.handleWeightChange}
            min={1}
            max={300}
          />
        </CardContent>
      </StyledCard>
    );
  }
}

export default BasicInfoCreationCard;
