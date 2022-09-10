import { legacy_createStore as createStore } from 'redux';
import { cars } from '../constants/cars';

const carsReducer = (state = { selectedCar: '', cars: cars }, action) => {
  if (action.type === 'SELECT_CAR') {
    return {
      ...state,
      selectedCar: action.payload,
    };
  }
  if (action.type === 'OPPONENT_CARS') {
    return {
      ...state,
      opponentCars: action.payload,
    };
  }

  return state;
};

const store = createStore(carsReducer);

export default store;
