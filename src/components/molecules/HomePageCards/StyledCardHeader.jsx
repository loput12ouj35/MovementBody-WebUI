import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    display: 'flex',
    padding: '0 1em',
    alignItems: 'center',
  },
  action: { position: 'absolute', right: 0, top: 0 },
  content: {
    flex: '1 1 auto',
    marginTop: '1em',
    paddingLeft: '4.5em',
    minHeight: '1.5em',
  },
  bookmark: {
    backgroundImage: 'linear-gradient(60deg, transparent, rgba(0,0,0,0.14))',
    flex: '0 0 auto',
    borderRadius: 3,
    padding: '1em',
    color: 'white',
    position: 'absolute',
    top: '-1em',
    '& > *': { verticalAlign: 'bottom' },
  },
}));

export default React.memo(function StyledCardHeader(props) {
  const { icon, markColor, title, subheader, action } = props;
  const { markShadow = 'rgba(0, 0, 0, 0.12)' } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div
        className={classes.bookmark}
        style={{
          backgroundColor: markColor,
          boxShadow: `0 4px 20px 0 rgba(0, 0, 0, 0.12), 0 7px 10px -5px ${markShadow}`,
        }}
      >
        {icon}
      </div>
      {action && <div className={classes.action}>{action}</div>}
      <div className={classes.content}>
        {title && <p>{title}</p>}
        {subheader && (
          <Typography display="block" variant="body2" color="textSecondary">
            {subheader}
          </Typography>
        )}
      </div>
    </div>
  );
});
