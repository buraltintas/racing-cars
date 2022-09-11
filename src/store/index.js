import { legacy_createStore as createStore } from 'redux';
import { cars } from '../constants/cars';
import { getRandomOpponents } from '../utils/get-random-opponents';
import { getRandomCar } from '../utils/get-random-car';

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

  if (action.type === 'SET_RANDOM_SELECTED_CAR') {
    const carsWithoutRandom = cars.filter((x) => x.name !== '?');

    return {
      ...state,
      selectedCar: getRandomCar(carsWithoutRandom),
    };
  }

  if (action.type === 'SET_OPPONENT_CARS') {
    const carsWithoutRandom = cars.filter((x) => x.name !== '?');

    const carsWithoutSelected = carsWithoutRandom.filter(
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
    return {
      ...state,
      isRaceStarted: action.payload,
    };
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
            currentPlace:
              state.selectedCar.currentPlace < 575
                ? state.selectedCar.currentPlace + action.payload
                : state.selectedCar.currentPlace,
            time:
              state.selectedCar.currentPlace < 575
                ? Math.floor(new Date().getTime() / 1000)
                : state.selectedCar.time,
          },
        };
      } else {
        const newArray = state.opponentCars.map((car) => {
          if (car['name'] === action.name) {
            return {
              ...car,
              currentPlace:
                car.currentPlace < 575
                  ? car.currentPlace + action.payload
                  : car.currentPlace,
              time:
                car.currentPlace < 575
                  ? Math.floor(new Date().getTime() / 1000)
                  : car.time,
            };
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

  if (action.type === 'RACE_AGAIN') {
    const resetOpponentCars = state.opponentCars.map((car) => {
      return { ...car, currentPlace: car.startPlace };
    });

    const resetSelectedCar = {
      ...state.selectedCar,
      currentPlace: state.selectedCar.startPlace,
    };

    return {
      ...state,
      opponentCars: resetOpponentCars,
      selectedCar: resetSelectedCar,
      isRaceStarted: false,
      isRaceFinished: false,
    };
  }

  if (action.type === 'RESET_CARS') {
    return {
      ...initialState,
    };
  }

  return state;
};

const store = createStore(carsReducer);

export default store;
