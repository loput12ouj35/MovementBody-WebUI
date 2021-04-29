import { CardContent, withStyles } from '@material-ui/core';
import { AccountBox } from '@material-ui/icons';
import { InfoRow, StyledCard, StyledCardHeader } from 'components';
import { MESSAGES } from 'data';
import { inject, observer } from 'mobx-react';
import React from 'react';

const styles = (theme) => ({
  content: { display: 'flex', flexWrap: 'wrap' },
  infos: { display: 'flex', flexDirection: 'column', width: '20em' },
});

const GENDER_TEXTS = [
  MESSAGES.member.male,
  MESSAGES.member.female,
  MESSAGES.member.other,
];

@withStyles(styles)
@inject('profilePageStore')
@observer
class BasicInfoUpdateCard extends React.PureComponent {
  render() {
    const { classes, profilePageStore } = this.props;
    const { birth, gender, memberId } = profilePageStore.profile;

    return (
      <StyledCard Component="div" responsiveOptions={false}>
        <StyledCardHeader
          icon={<AccountBox />}
          markColor="darkslategray"
          markShadow="rgba(47, 79, 79, 0.4)"
          title={MESSAGES.member.title.readBasic}
        />
        <CardContent className={classes.content}>
          <div className={classes.infos}>
            <InfoRow label={MESSAGES.member.memberId} value={memberId} />
            <InfoRow
              label={MESSAGES.member.gender}
              value={GENDER_TEXTS[gender]}
            />
            <InfoRow label={MESSAGES.member.birth} value={birth} />
          </div>
        </CardContent>
      </StyledCard>
    );
  }
}

export default BasicInfoUpdateCard;

// height, weight
// email
