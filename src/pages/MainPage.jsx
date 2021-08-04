import React, { useCallback, useState } from 'react';
import { Bnb, HomePageHeader } from 'components';
import { Route } from 'react-router';
import { HomePage, ProfilePage, HistoryPage } from 'pages';

export default React.memo(function MainPage() {
  const [ref, setRef] = useState(undefined);
  const renderPage = useCallback(
    (path, page) => <Route path={path}>{page}</Route>,
    []
  );

  return (
    <>
      <HomePageHeader scrollTarget={ref ?? undefined} />
      <main ref={setRef}>
        {renderPage('/home', <HomePage />)}
        {renderPage('/history', <HistoryPage />)}
        {renderPage('/time', <p>todo</p>)}
      </main>
      <Bnb />
      <ProfilePage />
    </>
  );
});
