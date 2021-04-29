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
    (page, header = null, footer = null) => (
      <>
        {header &&
          React.cloneElement(header, { scrollTarget: mainRef ?? undefined })}
        <main ref={(node) => setMainRef(node)} className={classes.main}>
          {page}
        </main>
        {footer}
      </>
    ),
    [mainRef]
  );

  const route = useCallback(
    (path, ...rest) => <Route path={path}>{render(...rest)}</Route>,
    [render]
  );

  // helper function for three main pages: /home, /history, and /menu.
  const routePrimary = useCallback(
    (path, page) => (
      <Route
        path={path}
        children={({ match, location }) => {
          const isProfilePage = location.pathname.startsWith('/profile');
          const isFromThis = (location.state?.from ?? '/home').startsWith(path);
          return match || (isProfilePage && isFromThis)
            ? render(page, <HomePageHeader />, <Bnb />)
            : null;
        }}
      />
    ),
    [render]
  );

  return (
    <div className={classes.root}>
      <Switch>
        <Route path={['/home', '/history', '/menu', '/profile']}>
          {routePrimary('/home', <HomePage />)}
          {routePrimary('/history', <p>todo</p>)}
          {routePrimary('/menu', <p>todo</p>)}
        </Route>
        {route('/signUp', <SignUpPage />, <SignUpPageHeader />)}
        {route('/start', <GetStartedPage />)}
        <Redirect from="*" to="/404" />
      </Switch>
      <Route
        path="/profile"
        children={({ match }) => <ProfilePage open={match !== null} />}
      />
    </div>
  );
});
