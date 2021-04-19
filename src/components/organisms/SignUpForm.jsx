import { Button } from '@material-ui/core';
import {
  AirlineSeatReclineNormal,
  EmojiPeople,
  Face,
} from '@material-ui/icons';
import { SignUpGenderInput, SignUpInputTitle, SignUpSlider } from 'components';
import { MESSAGES } from 'data';
import React, { useCallback, useState } from 'react';
import 'scss/sign-up-form.scss';

export default React.memo(function SiginUpForm(props) {
  const [value, setValue] = useState({
    gender: 2,
    height: 165,
    weight: 60,
  });
  const updateValue = useCallback(
    (name, value) => setValue((v) => ({ ...v, [name]: value })),
    []
  );

  return (
    <div>
      <h2>{MESSAGES.signUp.title('존맥')}</h2>
      <h4>{MESSAGES.signUp.subtitle}</h4>
      <form className="sign-up-form">
        <SignUpInputTitle icon={<Face />} label={MESSAGES.signUp.gender} />
        <SignUpGenderInput
          name="gender"
          value={value.gender}
          updateValue={updateValue}
        />
        <SignUpInputTitle
          icon={<EmojiPeople />}
          label={MESSAGES.signUp.height}
        />
        <SignUpSlider
          name="height"
          value={value.height}
          updateValue={updateValue}
          min={1}
          max={300}
        />
        <SignUpInputTitle
          icon={<AirlineSeatReclineNormal />}
          label={MESSAGES.signUp.weight}
        />
        <SignUpSlider
          name="weight"
          value={value.weight}
          updateValue={updateValue}
          min={1}
          max={300}
        />
      </form>
      <Button variant="contained" color="primary" disableElevation>
        {MESSAGES.common.next}
      </Button>
    </div>
  );
});

// (note) The followiong fields will be deriven from OAuth service:
// - memberId
// - birth
// - email
// - loginType

// {
//   exerciseCode: 0;
// }
