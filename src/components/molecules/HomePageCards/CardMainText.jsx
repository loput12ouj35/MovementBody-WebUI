import { Typography } from '@material-ui/core';
import React from 'react';

export default React.memo(function (props) {
  const { mainText, subText } = props;

  return (
    <Typography variant="body2">
      <b style={{ fontSize: '2em' }}>{mainText}</b>
      {subText}
    </Typography>
  );
});
