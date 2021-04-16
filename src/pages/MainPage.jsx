import React, { useCallback } from 'react';
import 'scss/main-page.scss';
import { Redirect, Route, Switch } from 'react-router';
import { MemberPage } from 'pages';
import { Gnb, Lnb } from 'components';

export default React.memo(function MainPage(props) {
  const route = useCallback(
    (path, PageComponent) => (
      <Route path={'/' + path}>
        <div className="main-page">
          <Gnb />
          <div>
            <Lnb />
            <main>{PageComponent}</main>
          </div>
        </div>
      </Route>
    ),
    []
  );

  return (
    <Switch>
      {route('member', <MemberPage />)}
      {/* {route('food', null)} */}
      {/* {route('history', null)} */}
      <Redirect exact from="/" to="/member" />
      <Redirect from="*" to="/404" />
    </Switch>
  );
});
