import {
  AirlineSeatReclineNormal,
  EmojiPeople,
  Face,
  FitnessCenter,
} from '@material-ui/icons';
import {
  MemberExerciseCodeInput,
  MemberGenderInput,
  MemberInputTitle,
  MemberNumberInput,
  SignUpFormButton,
} from 'components';
import { MESSAGES } from 'data';
import React, { useCallback, useState } from 'react';
import 'scss/components/sign-up-form.scss';

export default React.memo(function (props) {
  const [value, setValue] = useState({
    gender: 2,
    height: 165,
    weight: 60,
    exerciseCode: 2,
  });
  const updateValue = useCallback(
    (name, value) =>
      setValue((v) => (value === v?.[name] ? v : { ...v, [name]: value })),
    []
  );

  return (
    <div className="sign-up-form">
      <h2>{MESSAGES.signUp.title('존맥')}</h2>
      <h4>{MESSAGES.signUp.subtitle}</h4>
      <form>
        <MemberInputTitle icon={<Face />} label={MESSAGES.signUp.gender} />
        <MemberGenderInput
          name="gender"
          value={value.gender}
          updateValue={updateValue}
        />
        <MemberInputTitle
          icon={<EmojiPeople />}
          label={MESSAGES.signUp.height}
        />
        <MemberNumberInput
          name="height"
          value={value.height}
          updateValue={updateValue}
          min={1}
          max={300}
        />
        <MemberInputTitle
          icon={<AirlineSeatReclineNormal />}
          label={MESSAGES.signUp.weight}
        />
        <MemberNumberInput
          name="weight"
          value={value.weight}
          updateValue={updateValue}
          min={1}
          max={300}
        />
        <MemberInputTitle
          icon={<FitnessCenter />}
          label={MESSAGES.signUp.exercise}
        />
        <MemberExerciseCodeInput
          name="exerciseCode"
          value={value.exerciseCode}
          updateValue={updateValue}
        />
      </form>
      <SignUpFormButton value={value} />
    </div>
  );
});
