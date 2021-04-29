import React, { useCallback, useState } from 'react';
import { Redirect, Route, Switch } from 'react-router';
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
  },
  main: {
    backgroundColor: '#fafafa',
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
  const [mainRef, setMainRef] = useState(undefined); // keep it undefined here to not make it throw an error.
  const render = useCallback(
    (Page, Header = null, Footer = null) => (
      <>
        {Header &&
          React.cloneElement(Header, { scrollTarget: mainRef ?? undefined })}
        <main ref={(node) => setMainRef(node)} className={classes.main}>
          {Page}
        </main>
        {Footer}
      </>
    ),
    [mainRef]
  );
  const route = useCallback(
    (path, ...rest) => <Route path={path}>{render(...rest)}</Route>,
    []
  );

  return (
    <div className={classes.root}>
      <Switch>
        {route('/signUp', <SignUpPage />, <SignUpPageHeader />)}
        {route('/start', <GetStartedPage />)}
        <RouterWithProfile render={render} />
        <Redirect from="*" to="/404" />
      </Switch>
      <ProfilePage />
    </div>
  );
});

const RouterWithProfile = React.memo(function (props) {
  const { render } = props;
  const route = useCallback(
    (path, ...rest) => (
      <Route
        path={path}
        children={({ match, location }) => {
          const from = location.state?.from ?? '';
          return match || from.startsWith(path) ? render(...rest) : null;
        }}
      />
    ),
    []
  );

  return (
    <Route path={['/home', '/history', '/menu', '/profile']}>
      {route('/home', <HomePage />, <HomePageHeader />, <Bnb />)}
      {route('/history', <p>todo</p>)}
      {route('/menu', <p>todo</p>)}
    </Route>
  );
});
