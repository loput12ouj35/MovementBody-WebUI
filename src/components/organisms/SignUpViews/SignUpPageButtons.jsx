import { Button, makeStyles } from '@material-ui/core';
import { ArrowBack, ArrowForward } from '@material-ui/icons';
import { MemberFormSubmitButton } from 'components';
import React, { useCallback } from 'react';

const useStyles = makeStyles(() => ({
  root: { padding: '0.5rem 2rem' },
  button: {
    backgroundImage: 'linear-gradient(60deg, transparent, rgba(0,0,0,0.14))',
    width: '6rem',
    margin: '0 0.5rem',
  },
}));

export default function BottomButtons(props) {
  const { viewIndex, setViewIndex } = props;
  const goBack = useCallback(() => setViewIndex((v) => v - 1), []);
  const goNext = useCallback(() => setViewIndex((v) => v + 1), []);
  const classes = useStyles();

  return viewIndex === 0 ? (
    <div className={classes.root}>
      <Button
        variant="contained"
        color="primary"
        disableElevation
        className={classes.button}
        endIcon={<ArrowForward />}
        onClick={goNext}
      >
        Next
      </Button>
    </div>
  ) : (
    <div className={classes.root}>
      <Button
        variant="contained"
        color="primary"
        disableElevation
        className={classes.button}
        startIcon={<ArrowBack />}
        onClick={goBack}
      >
        Back
      </Button>
      <MemberFormSubmitButton />
    </div>
  );
}
