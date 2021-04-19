import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { MainPage } from 'pages';

export default React.memo(function App() {
  return (
    <Switch>
      <Route path="/login">로그인 페이지</Route>
      <Route path={['/error', '/404', '/403']}>에러 페이지</Route>
      <Route path={['/home', '/history', '/menu', '/signUp']}>
        <MainPage />
      </Route>
      <Redirect exact from="/" to="/signUp" />
      <Redirect from="*" to="/404" />
    </Switch>
  );
});
