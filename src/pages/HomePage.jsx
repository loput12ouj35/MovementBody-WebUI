import { Fab, makeStyles } from '@material-ui/core';
import { Edit } from '@material-ui/icons';
import {
  ActiveTimeCard,
  StepCountCard,
} from 'components';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  root: { backgroundColor: '#fafafa', height: '100%', overflow: 'hidden auto' },
  fab: { position: 'fixed', bottom: '5em', right: '2em' },
  cardContainer: {
    display: 'grid',
    padding: '0.25em',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gap: '0.5em',
  },
}));

export default React.memo(function HomePage(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.cardContainer}>
        <StepCountCard />
        <ActiveTimeCard />
      </div>
      <Fab
        color="secondary"
        className={classes.fab}
        aria-label="edit today history"
      >
        <Edit />
      </Fab>
    </div>
  );
});
