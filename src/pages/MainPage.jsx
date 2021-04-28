import React, { useCallback, useState } from 'react';
import { Route, Switch } from 'react-router';
import { Bnb, HomePageHeader, SignUpPageHeader } from 'components';
import { HomePage, ProfilePage, SignUpPage } from 'pages';
import GetStartedPage from './GetStartedPage';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100%',
    backgroundColor: '#fafafa',
  },
  main: {
    width: '100%',
    flex: 'auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    overflow: 'hidden auto',
  },
}));

export default React.memo(function MainPage(props) {
  const classes = useStyles();
  const [scrollTarget, setScrollTarget] = useState(undefined); // keep it undefined here to not make it throw an error.
  const route = useCallback(
    (path, Page, Header = null, Footer = null) => (
      <Route path={'/' + path}>
        {Header && React.cloneElement(Header, { scrollTarget })}
        <main ref={(node) => setScrollTarget(node)} className={classes.main}>
          {Page}
        </main>
        {Footer}
      </Route>
    ),
    [scrollTarget]
  );

  return (
    <div className={classes.root}>
      <Switch>
        {route('home', <HomePage />, <HomePageHeader />, <Bnb />)}
        {route('history', <p>todo</p>)}
        {route('menu', <p>todo</p>)}
        {route('signUp', <SignUpPage />, <SignUpPageHeader />)}
        {route('start', <GetStartedPage />)}
      </Switch>
      <ProfilePage />
    </div>
  );
});
