import React from 'react';
import {
  AppBar,
  IconButton,
  makeStyles,
  Toolbar,
  Typography,
  useScrollTrigger,
} from '@material-ui/core';
import { ArrowBack } from '@material-ui/icons';
import { MESSAGES } from 'data';
import { Link } from 'react-router-dom';
import { inject } from 'mobx-react';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'darkslategray',
    backgroundImage:
      'linear-gradient(60deg, transparent, rgba(255,255,255,0.14))',
  },
  h6: { flex: 'auto' },
}));

export default React.memo(function ProfilePageHeader(props) {
  const { scrollTarget } = props;
  const scrolled = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: scrollTarget,
  });
  const classes = useStyles();

  return (
    <AppBar
      className={classes.root}
      elevation={scrolled ? 4 : 0}
      position="relative"
    >
      <Toolbar>
        <CloseButton />
        <Typography className={classes.h6} variant="h6">
          {MESSAGES.header.profile}
        </Typography>
      </Toolbar>
    </AppBar>
  );
});

@inject('profilePageStore')
class CloseButton extends React.PureComponent {
  render() {
    const { profilePageStore } = this.props;
    const { lastPath } = profilePageStore;

    return (
      <IconButton color="inherit" edge="start" component={Link} to={lastPath}>
        <ArrowBack />
      </IconButton>
    );
  }
}
