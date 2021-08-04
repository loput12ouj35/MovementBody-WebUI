import React, { useCallback } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { GetStartedPage, MainPage, SignUpPage } from 'pages';

export default React.memo(function App() {
  const route = useCallback(
    (path, child) => <Route path={path}>{child}</Route>,
    []
  );

  return (
    <Switch>
      {route('/start', <GetStartedPage />)}
      {route('/login', <p>todo</p>)}
      {route('/signUp', <SignUpPage />)}
      {route(['/error', '/404', '/403'], <p>todo</p>)}
      <Redirect exact from="/" to="/start" />
      {route(['/home', '/history', '/time', '/profile'], <MainPage />)}
      <Redirect from="*" to="/404" />
    </Switch>
  );
});
