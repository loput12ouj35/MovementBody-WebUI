import { observable, action, makeObservable } from 'mobx';

export default new (class UserStore {
  @observable profilePageOpen = false;

  constructor() {
    makeObservable(this);
  }

  @action openProfilePage = () => (this.profilePageOpen = true);

  @action closeProfilePage = () => (this.profilePageOpen = false);
})();
