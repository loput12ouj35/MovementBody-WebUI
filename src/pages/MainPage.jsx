import React, { useCallback, useState } from 'react';
import { Bnb, HomePageHeader } from 'components';
import { HomePage, ProfilePage, HistoryPage } from 'pages';
import { useStore } from 'custom_util';
import { useLocation } from 'react-router';

export default React.memo(function MainPage() {
  const [ref, setRef] = useState(undefined);
  const { profilePageStore } = useStore();
  const { pathname } = useLocation();
  const renderPage = useCallback(
    (path, page) => {
      const isThisPage = pathname.startsWith(path);
      const isProfilePage = pathname.startsWith('/profile');
      const wasThisPage = profilePageStore.lastPath.startsWith(path);

      return (isThisPage || (isProfilePage && wasThisPage)) && page;
    },
    [pathname]
  );

  return (
    <>
      <HomePageHeader scrollTarget={ref ?? undefined} />
      <main ref={setRef}>
        {renderPage('/home', <HomePage />)}
        {renderPage('/history', <HistoryPage />)}
        {renderPage('/menu', <p>todo</p>)}
      </main>
      <Bnb />
      <ProfilePage />
    </>
  );
});
