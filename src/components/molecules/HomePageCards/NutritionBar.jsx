import { LinearProgress, makeStyles, Typography } from '@material-ui/core';
import { CardMainText } from 'components';
import React from 'react';

const useStyles = makeStyles(() => ({
  progress: {
    flex: 'auto',
    margin: '0.5rem 0',
    height: '0.5rem',
    borderRadius: '0.25rem',
    backgroundColor: '#eee',
    '& .MuiLinearProgress-bar': {
      borderRadius: '0.25rem',
      backgroundColor: 'currentColor',
    },
  },
  textContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
}));

export default React.memo(function NutritionBar(props) {
  const { current, goal, title, color } = props;
  const classes = useStyles();
  const ratio = Math.min((100 * current) / goal, 100);

  return (
    <>
      <div className={classes.textContainer}>
        <Typography variant="body2">{title}</Typography>
        <CardMainText mainText={current} subText={` /${goal}`} />
      </div>
      <LinearProgress
        variant="determinate"
        className={classes.progress}
        style={{ color }}
        value={ratio}
      />
    </>
  );
});
