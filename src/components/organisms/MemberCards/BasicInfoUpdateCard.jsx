import { CardContent, withStyles } from '@material-ui/core';
import { AccountBox } from '@material-ui/icons';
import { InfoRow, StyledCard, StyledCardHeader } from 'components';
import { MESSAGES } from 'data';
import { inject, observer } from 'mobx-react';
import React from 'react';

const styles = (theme) => ({
  content: { display: 'flex', flexWrap: 'wrap' },
  infoBox: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    '@media (min-width: 48em)': {
      flexBasis: '50%',
      maxWidth: '50%',
      '&:not(:first-child)': { paddingLeft: '1em' },
      '&:not(:last-child)': { paddingRight: '1em' },
    },
  },
  infos: {
    display: 'flex',
    flexDirection: 'column',
    width: '20em',
    flex: 'auto',
  },
  divider: {
    width: '0.25em',
    height: '8.5em',
    padding: '1em 0',
    backgroundColor: 'rgba(47, 79, 79, 0.8)',
    '&:not(:first-child)': { marginLeft: 'calc(50% - 21em)' },
  },
});

const GENDER_TEXTS = [
  MESSAGES.member.male,
  MESSAGES.member.female,
  MESSAGES.member.other,
];

@withStyles(styles)
@inject('profileViewModel')
@observer
class BasicInfoUpdateCard extends React.PureComponent {
  renderInfoBox(data) {
    const { classes } = this.props;
    return (
      <div className={classes.infoBox}>
        <div className={classes.divider} />
        <div className={classes.infos}>
          {data.map(([label, value]) => (
            <InfoRow key={label} label={label} value={value} />
          ))}
        </div>
      </div>
    );
  }

  render() {
    const { classes, profileViewModel } = this.props;
    const {
      birth,
      gender,
      memberId,
      email,
      weight,
      height,
    } = profileViewModel.profile;

    return (
      <StyledCard Component="div" responsiveOptions={false}>
        <StyledCardHeader
          icon={<AccountBox />}
          markColor="darkslategray"
          markShadow="rgba(47, 79, 79, 0.4)"
          title={MESSAGES.member.title.readBasic}
        />
        <CardContent className={classes.content}>
          {this.renderInfoBox([
            [MESSAGES.member.memberId, memberId],
            [MESSAGES.member.gender, GENDER_TEXTS[gender]],
            [MESSAGES.member.birth, birth],
          ])}
          {this.renderInfoBox([
            [MESSAGES.member.email, email],
            [MESSAGES.member.height, height],
            [MESSAGES.member.weight, weight],
          ])}
        </CardContent>
      </StyledCard>
    );
  }
}

export default BasicInfoUpdateCard;
