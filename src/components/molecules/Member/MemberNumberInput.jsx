import React, { useCallback } from 'react';
import SlideRule from 'react-slide-rule';
import 'scss/components/member-number-input.scss';

export default React.memo(function MemberNumberInput(props) {
  const { name, min, max, value = min, onChange } = props;
  const handleChange = useCallback((e) => onChange(Number(e.target.value)), []);
  const handleBlur = useCallback((e) => {
    const _value = Math.max(min, Math.min(e.target.value, max));
    if (e.target.value !== _value) onChange(_value);
  }, []);
  const handlerSlideChange = useCallback((_value) => onChange(_value), []);

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
      <SlideRule
        value={value}
        onChange={handlerSlideChange}
        min={min}
        max={max}
        step={0.1}
      />
    </div>
  );
});
