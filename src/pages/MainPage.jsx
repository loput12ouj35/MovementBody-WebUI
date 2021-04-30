import React from 'react';
import { withRouter } from 'react-router';
import { Bnb, HomePageHeader } from 'components';
import { HomePage, ProfilePage } from 'pages';
import { inject } from 'mobx-react';

@withRouter
@inject('profilePageStore')
class MainPage extends React.PureComponent {
  state = {};

  renderPage(path, page) {
    const { location, profilePageStore } = this.props;
    const { pathname } = location;
    const isThisPage = pathname.startsWith(path);
    const isProfilePage = pathname.startsWith('/profile');
    const wasThisPage = profilePageStore.lastPath.startsWith(path);

    return (isThisPage || (isProfilePage && wasThisPage)) && page;
  }

  render() {
    const { mainRef } = this.state;
    const { pathname } = this.props.location;

    return (
      <>
        <HomePageHeader scrollTarget={mainRef ?? undefined} />
        <main ref={(mainRef) => this.setState(mainRef)}>
          {this.renderPage('/home', <HomePage />)}
          {this.renderPage('/history', <p>todo</p>)}
          {this.renderPage('/menu', <p>todo</p>)}
          <Bnb />
        </main>
        <ProfilePage open={pathname.startsWith('/profile')} />
      </>
    );
  }
}

export default MainPage;
