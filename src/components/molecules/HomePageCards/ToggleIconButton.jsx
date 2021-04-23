import { IconButton, Zoom } from '@material-ui/core';
import React, { useCallback } from 'react';

export default React.memo(function ToggleIconButton(props) {
  const { on = false, onIcon, offIcon, onToggle } = props;
  const handleOn = useCallback(() => onToggle(true), [onToggle]);
  const handleOff = useCallback(() => onToggle(false), [onToggle]);

  return (
    <>
      <Zoom in={on} style={{ position: 'absolute' }}>
        <IconButton onClick={handleOff}>{onIcon}</IconButton>
      </Zoom>
      <Zoom in={!on}>
        <IconButton onClick={handleOn}>{offIcon}</IconButton>
      </Zoom>
    </>
  );
});
