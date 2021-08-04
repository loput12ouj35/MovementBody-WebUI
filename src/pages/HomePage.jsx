import { Fab, makeStyles } from '@material-ui/core';
import { Edit } from '@material-ui/icons';
import { ImportantCardContainer, SummaryCardContainer } from 'components';
import { useStore } from 'custom_util';
import React from 'react';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    maxWidth: '100rem',
  },
  title: {
    display: 'flex',
    alignItems: 'center',
    color: 'rgba(0, 0, 0, 0.87)',
    margin: '0.5em',
    lineHeight: 'normal',
  },
  fab: { position: 'fixed', bottom: '5em', right: '2em' },
  cardContainer: { display: 'flex', flexWrap: 'wrap' },
}));

export default React.memo(function HomePage() {
  const { todayStatStore } = useStore();
  todayStatStore.fetchAll('Test'); // todo: apply real id
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ImportantCardContainer classes={classes} />
      <SummaryCardContainer classes={classes} />
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
