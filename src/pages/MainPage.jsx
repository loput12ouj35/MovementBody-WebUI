import React, { useCallback } from 'react';
import 'scss/main-page.scss';
import { Redirect, Route, Switch } from 'react-router';
import { Bnb, Header } from 'components';

export default React.memo(function MainPage(props) {
  const route = useCallback(
    (path, PageComponent) => (
      <Route path={'/' + path}>
        <div className="main-page">
          <Header />
          <main>{PageComponent}</main>
          <Bnb />
        </div>
      </Route>
    ),
    []
  );

  return (
    <Switch>
      {route('food', <p>todo</p>)}
      {route('history', <p>todo</p>)}
      {route('home', <p>todo</p>)}
      {route('account', <p>todo</p>)}
      {route('menu', <p>todo</p>)}
      <Redirect exact from="/" to="/signUp" />
      <Redirect from="*" to="/404" />
    </Switch>
  );
});
