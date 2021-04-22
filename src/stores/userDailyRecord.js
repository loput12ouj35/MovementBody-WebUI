import { observable, action, makeObservable } from 'mobx';

export default new (class UserDailyRecordStore {
  @observable.ref stepCount = { current: 1234, goal: 6000, km: '0.9' };
  @observable.ref activeTime = { current: 40, kcal: 120, goal: 60 };
  @observable.ref water = { cup: 3, ml: 700 };
  @observable.ref food = {
    goal: 1621,
    breakfirst: 400,
    lunch: 500,
    dinner: null,
    snack: 100,
  };

  constructor() {
    makeObservable(this);
  }

  shallowMerge = (key, value) => (this[key] = { ...this[key], ...value });
  @action setStepCount = (v) => this.shallowMerge('stepCount', v);
  @action setActiveTime = (v) => this.shallowMerge('activeTime', v);
  @action setWater = (v) => this.shallowMerge('water', v);
  @action setFood = (v) => this.shallowMerge('food', v);
})();
