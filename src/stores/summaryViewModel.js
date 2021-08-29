import { observable, action, makeObservable } from 'mobx';

const DUMMY_STEPCOUNT = { current: 1234, goal: 6000, km: '0.9' };
const DUMMY_ACTIVETIME = { current: 40, kcal: 120, goal: 60 };
const DUMMY_WATER = { cup: 3, ml: 700 };
const DUMMY_WEIGHT = { current: 75, last: 73, goal: 70 };
const DUMMY_SLEEP = {
  lastSleepTime: new Date('2021-04-14 23:00'),
  wakeUpTime: new Date('2021-04-15 07:00'),
  goal: 7.5,
};

export default new (class SummaryViewModel {
  @observable.ref
  stepCount = DUMMY_STEPCOUNT;

  @observable.ref
  activeTime = DUMMY_ACTIVETIME;

  @observable.ref
  water = DUMMY_WATER;

  @observable.ref
  weight = DUMMY_WEIGHT;

  @observable.ref
  sleep = DUMMY_SLEEP;

  constructor() {
    makeObservable(this);
  }

  // -------------------actions-----------------------------

  createSetter = (key) => (input) => {
    const value = typeof input === 'function' ? input(this[key]) : input;
    this[key] = { ...this[key], ...value };
  };

  @action
  setStepCount = this.createSetter('stepCount');

  @action
  setActiveTime = this.createSetter('activeTime');

  @action
  setWater = this.createSetter('water');

  @action
  setWeight = this.createSetter('weight');

  @action
  setSleep = this.createSetter('sleep');
})();
