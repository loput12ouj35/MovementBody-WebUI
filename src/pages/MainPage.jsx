import React, { useCallback, useState } from 'react';
import 'scss/main-page.scss';
import { Route, Switch } from 'react-router';
import { Bnb, HomePageHeader, SignUpPageHeader } from 'components';
import { HomePage, ProfilePage, SignUpPage } from 'pages';

export default React.memo(function MainPage(props) {
  const [scrollTarget, setScrollTarget] = useState(undefined); // keep it undefined here to not make it throw an error.
  const route = useCallback(
    (path, Page, Header = null, Footer = null) => (
      <Route path={'/' + path}>
        {Header && React.cloneElement(Header, { scrollTarget })}
        <main ref={(node) => setScrollTarget(node)}>{Page}</main>
        {Footer}
      </Route>
    ),
    [scrollTarget]
  );

  return (
    <div className="main-page">
      <Switch>
        {route('home', <HomePage />, <HomePageHeader />, <Bnb />)}
        {route('history', <p>todo</p>)}
        {route('menu', <p>todo</p>)}
        {route('signUp', <SignUpPage />, <SignUpPageHeader />)}
      </Switch>
      <ProfilePage />
    </div>
  );
});
