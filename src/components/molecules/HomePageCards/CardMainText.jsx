import React from 'react';

export default React.memo(function (props) {
  const { mainText, subText } = props;

  return (
    <p>
      <b style={{ fontSize: '2em' }}>{mainText}</b>
      {subText}
    </p>
  );
});
