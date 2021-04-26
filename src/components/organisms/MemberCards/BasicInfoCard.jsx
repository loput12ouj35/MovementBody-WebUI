import {
  CardContent,
  Divider,
  makeStyles,
  Typography,
} from '@material-ui/core';
import { Face } from '@material-ui/icons';
import {
  MemberGenderInput,
  MemberNumberInput,
  StyledCard,
  StyledCardHeader,
} from 'components';
import { MESSAGES } from 'data';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  subtitle: { margin: '1em 0' },
}));

export default React.memo(function BasicInfoCard(props) {
  const { value, updateValue } = props;
  const classes = useStyles();

  return (
    <StyledCard Component="div" responsiveOptions={false}>
      <StyledCardHeader
        icon={<Face />}
        markColor="lightseagreen"
        markShadow="rgba(32, 178, 170, 0.4)"
        title={MESSAGES.member.basicInfoTitle}
      />
      <CardContent>
        <Typography className={classes.subtitle}>
          {MESSAGES.member.gender}
        </Typography>
        <MemberGenderInput
          name="gender"
          value={value.gender}
          updateValue={updateValue}
        />
        <Divider />
        <Typography className={classes.subtitle}>
          {MESSAGES.member.height}
        </Typography>
        <MemberNumberInput
          name="height"
          value={value.height}
          updateValue={updateValue}
          min={1}
          max={300}
        />
        <Divider />
        <Typography className={classes.subtitle}>
          {MESSAGES.member.weight}
        </Typography>
        <MemberNumberInput
          name="weight"
          value={value.weight}
          updateValue={updateValue}
          min={1}
          max={300}
        />
      </CardContent>
    </StyledCard>
  );
});
