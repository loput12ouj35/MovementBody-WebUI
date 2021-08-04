import { observable, action, makeObservable, computed, toJS, flow } from 'mobx';
import _ from 'lodash';
import { requester } from 'custom_util';

export default new (class ProfilePageStore {
  @observable
  _profile = {
    gender: 2,
    height: 165,
    weight: 60,
    exerciseCode: 2,
    memberId: 'tempId',
    birth: 'temp',
    email: 'temp@temp.temp',
    targetDietType: 0,
    // loginType: null, // TBD
  };

  constructor() {
    makeObservable(this);
  }

  @flow
  *fetch(id) {
    const profile = yield requester.member.get(id);
    if (!profile) return;
    this._profile = profile;
  }

  submitToCreate = async () => requester.member.create(this.profile);

  submitToUpdate = async () => requester.member.update(this.profile);

  @action
  updateProfile = (key, value) => _.set(this._profile, key, value);

  @computed
  get profile() {
    return toJS(this._profile);
  }

  @action
  increaseCode = () => this._profile.exerciseCode++;

  @action
  decreaseCode = () => this._profile.exerciseCode--;
})();
