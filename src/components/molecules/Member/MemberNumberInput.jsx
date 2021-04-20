import { Input, makeStyles } from '@material-ui/core';
import { SliderRuler } from 'components';
import React, { useCallback } from 'react';

const useStyles = makeStyles((theme) => ({
  input: { width: '4em' },
}));

export default React.memo(function (props) {
  const { name, min, max, value = min, updateValue } = props;
  const handleChange = useCallback(
    (e) => updateValue(name, Number(e.target.value)),
    []
  );
  const handleBlur = useCallback((e) => {
    const _value = Math.max(min, Math.min(e.target.value, max));
    if (e.target.value !== _value) updateValue(name, _value);
  }, []);
  const handlerSliderChange = useCallback(
    (_value) => updateValue(name, _value),
    []
  );
  const classes = useStyles();

  return (
    <>
      <Input
        className={classes.input}
        name={name}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        inputProps={{
          step: 0.1,
          min,
          max,
          type: 'number',
          'aria-labelledby': name,
          required: true,
        }}
      />
      <SliderRuler
        value={value}
        onChange={handlerSliderChange}
        min={min}
        max={max}
        precision={0.1}
      />
    </>
  );
});
