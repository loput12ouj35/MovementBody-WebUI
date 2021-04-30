import { observable, action, makeObservable, computed, toJS } from 'mobx';
import _ from 'lodash';

export default new (class ProfilePageStore {
  @observable _profile = {
    gender: 2,
    height: 165,
    weight: 60,
    exerciseCode: 2,
    memberId: 'tempId',
    birth: 'temp',
    email: 'temp@temp.temp',
    // loginType: null, // TBD
  };

  lastPath = '/home'; // the last path before entering /profile

  constructor() {
    makeObservable(this);
  }

  @action updateProfile = (key, value) => _.set(this._profile, key, value);

  @computed get profile() {
    return toJS(this._profile);
  }

  @action increaseCode = () => this._profile.exerciseCode++;
  @action decreaseCode = () => this._profile.exerciseCode--;

  setLastPath = (path) => (path ? (this.lastPath = path) : null);
})();
