import { useScrollTrigger } from '@material-ui/core';
import { SignUpForm, SignUpHeader } from 'components';
import React, { useState } from 'react';

export default React.memo(function SiginUpPage(props) {
  const [scrollTarget, setScrollTarget] = useState(undefined); // keep it undefined here to not make it throw an error.
  const scrolled = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: scrollTarget,
  });

  return (
    <div className="main-page">
      <SignUpHeader scrolled={scrolled} />
      <SignUpForm ref={(node) => setScrollTarget(node)} />
    </div>
  );
});
