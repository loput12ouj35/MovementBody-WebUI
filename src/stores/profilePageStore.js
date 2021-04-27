import { observable, action, makeObservable } from 'mobx';

export default new (class ProfilePageStore {
  @observable profilePageOpen = false;

  constructor() {
    makeObservable(this);
  }

  @action openProfilePage = () => (this.profilePageOpen = true);

  @action closeProfilePage = () => (this.profilePageOpen = false);
})();
