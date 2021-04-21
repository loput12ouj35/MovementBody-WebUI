import { Fab, makeStyles } from '@material-ui/core';
import { Edit } from '@material-ui/icons';
import { FoodRecommandation, StepCount } from 'components';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  root: { backgroundColor: '#fafafa' },
  fab: { position: 'fixed', bottom: '5em', right: '2em' },
}));

export default React.memo(function HomePage(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <FoodRecommandation />
      <StepCount />
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
