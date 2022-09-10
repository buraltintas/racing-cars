import { legacy_createStore as createStore } from 'redux';
import { cars } from '../constants/cars';
import { getRandomOpponents } from '../utils/get-random-opponents';

const initialState = {
  selectedCar: null,
  cars: cars,
  isUserReady: false,
  isRaceStarted: false,
  isRaceFinished: false,
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

  if (action.type === 'SET_RACE_STARTED') {
    if (action.payload === true) {
      return {
        ...state,
        isRaceStarted: action.payload,
      };
    }
  }

  if (action.type === 'SET_RACE_FINISHED') {
    return {
      ...state,
      isRaceFinished: action.payload,
    };
  }

  if (action.type === 'SET_NEW_PLACE') {
    if (state.isRaceStarted === true && state.isRaceFinished === false) {
      if (action.name === state.selectedCar.name) {
        return {
          ...state,
          selectedCar: {
            ...state.selectedCar,
            currentPlace: state.selectedCar.currentPlace + action.payload,
          },
        };
      } else {
        const newArray = state.opponentCars.map((car) => {
          if (car['name'] === action.name) {
            return { ...car, currentPlace: car.currentPlace + action.payload };
          }
          return car;
        });

        return {
          ...state,
          opponentCars: newArray,
        };
      }
    }
  }

  if (action.type === 'RESET_OPPONENTS_CARS') {
    const newArray = cars.filter((car) => car.name !== state.selectedCar.name);
    return {
      ...state,
      opponentCars: newArray,
    };
  }

  if (action.type === 'RESET_SELECTED_CAR') {
    const newArray = cars.filter((car) => car.name === state.selectedCar.name);
    return {
      ...state,
      selectedCar: newArray,
    };
  }

  return state;
};

const store = createStore(carsReducer);

export default store;
