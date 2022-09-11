import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './track.module.css';
import { getRandomSpeed } from '../../../utils/get-random-speed';
import useInterval from '../../../utils/use-interval';
import Dashboard from './dashboard';

const Track = () => {
  const dispatch = useDispatch();

  const [racingCars, setRacingCars] = useState([]);

  const { selectedCar, opponentCars, isRaceStarted, isRaceFinished } =
    useSelector((state) => state);

  useInterval(() => {
    racingCars.forEach((car) => {
      moveCarHandler(car);
    });
  }, [500]);

  useEffect(() => {
    const racingCars = [selectedCar, ...opponentCars];

    setRacingCars(racingCars);

    if (racingCars.every((car) => car.currentPlace >= 575)) {
      dispatch({ type: 'SET_RACE_STARTED', payload: false });
      dispatch({ type: 'SET_RACE_FINISHED', payload: true });
    }
  }, [selectedCar, opponentCars, dispatch]);

  const startRaceHandler = () => {
    dispatch({ type: 'SET_RACE_STARTED', payload: true });
  };

  const moveCarHandler = (car) => {
    dispatch({
      type: 'SET_NEW_PLACE',
      name: car.name,
      payload: getRandomSpeed(car.speedRange[1], car.speedRange[0]),
    });
  };

  const opponentCarClassNames = (i) => {
    return `opponentCar${i + 1}`;
  };

  const opponentCarNameClassNames = (i) => {
    return `opponentCarName${i + 1}`;
  };

  const renderOpponentCars = () => {
    return opponentCars.map((car, i) => {
      return (
        <div
          key={car.name}
          className={styles[opponentCarClassNames(i)]}
          style={{ left: car.currentPlace }}
        >
          <img src={car.carImg} alt={car.name} className={styles.carImage} />
        </div>
      );
    });
  };

  const renderOpponentCarNames = () => {
    return opponentCars.map((car, i) => {
      return (
        <span
          key={car.name}
          className={`${styles.carName} ${
            styles[opponentCarNameClassNames(i)]
          }`}
        >
          {car.name}
        </span>
      );
    });
  };

  const resetCars = () => {
    dispatch({ type: 'RESET_CARS' });
  };

  const raceAgain = () => {
    dispatch({ type: 'RACE_AGAIN' });
  };

  return (
    <div className={styles.trackFieldContainer}>
      <div className={styles.trackField}>
        <span className={styles.line}></span>
        <span className={styles.line}></span>
        <span className={styles.line}></span>
        <span className={styles.line}></span>
        <span className={styles.line}></span>
      </div>

      <span className={styles.startLine}></span>
      <span className={styles.finishLine}></span>

      <div
        className={styles.selectedCar}
        style={{ left: selectedCar.currentPlace }}
      >
        <img
          src={selectedCar.carImg}
          alt={selectedCar.name}
          className={styles.carImage}
        />
      </div>

      <span className={`${styles.carName} ${styles.yourCarText}`}>
        Your Car
      </span>

      {renderOpponentCars()}
      {renderOpponentCarNames()}

      {!isRaceStarted && !isRaceFinished && (
        <div className={styles.buttonsContainer}>
          <button onClick={startRaceHandler} className={styles.startRaceButton}>
            Start The Race!
          </button>
        </div>
      )}

      {!isRaceStarted && isRaceFinished && (
        <div className={styles.buttonsContainer}>
          <button onClick={raceAgain} className={styles.startRaceButton}>
            Race Again!
          </button>
          <button onClick={resetCars} className={styles.changeCarButton}>
            Change My Car
          </button>
        </div>
      )}

      {(isRaceStarted || isRaceFinished) && (
        <Dashboard racingCars={racingCars} selectedCar={selectedCar} />
      )}
    </div>
  );
};

export default Track;
