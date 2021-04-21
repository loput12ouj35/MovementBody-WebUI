import { SliderRuler } from 'components';
import React, { useCallback } from 'react';
import 'scss/components/MemberNumberInput.scss';

export default React.memo(function MemberNumberInput(props) {
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

  return (
    <div className="member-number-input">
      <div className="arrow" />
      <input
        name={name}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        step={0.1}
        min={min}
        max={max}
        type="number"
        aria-labelledby={name}
      />
      <SliderRuler
        value={value}
        onChange={handlerSliderChange}
        min={min}
        max={max}
        precision={0.1}
      />
    </div>
  );
});
