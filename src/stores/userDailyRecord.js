import { observable, action, makeObservable } from 'mobx';

export default new (class UserDailyRecordStore {
  @observable.ref stepCount = { current: 1234, goal: 6000, km: '0.9' };
  @observable.ref activeTime = { current: 40, kcal: 120, goal: 60 };

  constructor() {
    makeObservable(this);
  }

  shallowMerge = (o, v) => (o = { ...o, ...v });
  @action setStepCount = (v) => this.shallowMerge(this.setStepCount, v);
  @action setActiveTime = (v) => this.shallowMerge(this.setActiveTime, v);
})();
