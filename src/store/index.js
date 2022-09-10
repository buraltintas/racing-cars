import { legacy_createStore as createStore } from 'redux';
import { cars } from '../constants/cars';
import { getRandomOpponents } from '../utils/get-random-opponents';

const carsReducer = (state = { selectedCar: null, cars: cars }, action) => {
  if (action.type === 'SELECT_CAR') {
    return {
      ...state,
      selectedCar: action.payload,
    };
  }
  if (action.type === 'SET_OPPONENT_CARS') {
    const carsWithoutSelected = cars.filter(
      (x) => x.name !== state.selectedCar.name
    );
    return {
      ...state,
      opponentCars: getRandomOpponents(carsWithoutSelected, 3),
    };
  }

  return state;
};

const store = createStore(carsReducer);

export default store;
