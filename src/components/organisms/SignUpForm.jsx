import {
  AirlineSeatReclineNormal,
  EmojiPeople,
  Face,
  FitnessCenter,
} from '@material-ui/icons';
import {
  SignUpExerciseCode,
  SignUpGenderInput,
  SignUpInputTitle,
  SignUpSlider,
  SignUpFormButton,
} from 'components';
import { MESSAGES } from 'data';
import React, { forwardRef, useCallback, useState } from 'react';
import 'scss/sign-up-form.scss';

export default React.memo(
  forwardRef(function (props, ref) {
    const [value, setValue] = useState({
      gender: 2,
      height: 165,
      weight: 60,
      exerciseCode: 2,
    });
    const updateValue = useCallback(
      (name, value) => setValue((v) => ({ ...v, [name]: value })),
      []
    );

    return (
      <main ref={ref} className="sign-up-form">
        <h2>{MESSAGES.signUp.title('존맥')}</h2>
        <h4>{MESSAGES.signUp.subtitle}</h4>
        <form>
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
          <SignUpInputTitle
            icon={<FitnessCenter />}
            label={MESSAGES.signUp.exercise}
          />
          <SignUpExerciseCode
            name="exerciseCode"
            value={value.exerciseCode}
            updateValue={updateValue}
          />
        </form>
        <SignUpFormButton value={value} />
      </main>
    );
  })
);
