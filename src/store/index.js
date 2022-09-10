import { legacy_createStore as createStore } from 'redux';
import { cars } from '../constants/cars';
import { getRandomOpponents } from '../utils/get-random-opponents';

const initialState = {
  selectedCar: null,
  cars: cars,
  isUserReady: false,
  isGameStarted: false,
  isGameFinished: false,
  opponentCars: [],
};

const carsReducer = (state = initialState, action) => {
  if (action.type === 'SET_SELECTED_CAR') {
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
  if (action.type === 'SET_USER_READY') {
    return {
      ...state,
      isUserReady: action.payload,
    };
  }

  return state;
};

const store = createStore(carsReducer);

export default store;
