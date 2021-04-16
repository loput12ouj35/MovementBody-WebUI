import { observable, action, makeObservable } from 'mobx';

// stores used in navigators
class NavigatorStore {
  @observable lnbOpen = false;

  constructor() {
    makeObservable(this);
  }

  @action toggleLnb = () => (this.lnbOpen = !this.lnbOpen);
}

export default new NavigatorStore();
