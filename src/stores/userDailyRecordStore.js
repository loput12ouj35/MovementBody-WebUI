import { observable, action, makeObservable } from 'mobx';

export default new (class userDailyRecordStore {
  @observable.ref
  stepCount = { current: 1234, goal: 6000, km: '0.9' };

  @observable.ref
  activeTime = { current: 40, kcal: 120, goal: 60 };

  @observable.ref
  water = { cup: 3, ml: 700 };

  @observable.ref
  food = {
    goal: 1621,
    breakfirst: 400,
    lunch: 500,
    dinner: null,
    snack: 100,
  };

  @observable.ref
  weight = { current: 75, last: 73, goal: 70 };

  @observable.ref
  sleep = {
    lastSleepTime: new Date('2021-04-14 23:00'),
    wakeUpTime: new Date('2021-04-15 07:00'),
    goal: 7.5,
  };

  @observable.ref
  currentNutrition = { carbon: 30, protein: 10, fat: 10 };

  @observable.ref
  goalNutrition = { carbon: 20, protein: 30, fat: 20 };

  constructor() {
    makeObservable(this);
  }

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
  setFood = this.createSetter('food');

  @action
  setWeight = this.createSetter('weight');

  @action
  setSleep = this.createSetter('sleep');
})();
