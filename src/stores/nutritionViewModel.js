import { requester } from 'custom_util';
import { observable, makeObservable, flow } from 'mobx';

const DUMMY_MEAL_CALORIE = {
  goal: 'dummy ',
  breakfirst: 100,
  lunch: 700,
  dinner: 700,
};

const DUMMY_GOAL = { carbon: 100, protein: 150, fat: 100, totalCalorie: 1900 };

export default new (class NutritionViewModel {
  @observable.ref
  mealCalorie = DUMMY_MEAL_CALORIE;

  @observable.ref
  goal = DUMMY_GOAL;

  @observable.ref
  current = {
    carbon: 0,
    fat: 0,
    protein: 0,
    totalCalorie: 0,
  };

  constructor() {
    makeObservable(this);
  }

  // -------------------requests----------------------------
  fetchAll = (id) => {
    this.fetchCurrentCalorie(id);
    // todo: add new request methods and call them below here.
  };

  @flow
  *fetchCurrentCalorie(id) {
    const calories = yield requester.calorie.get(id);
    if (!calories) return;
    this.current = parseCalories(calories);
  }
})();

const parseCalories = (calories) => ({
  carbon: (calories.carbonCalorie / 4).toFixed(1),
  protein: (calories.proteinCalorie / 4).toFixed(1),
  fat: (calories.fatCalorie / 9).toFixed(1),
  totalCalorie: calories.totalCalorie,
});
