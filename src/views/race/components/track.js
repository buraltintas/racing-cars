import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './track.module.css';
import { getRandomSpeed } from '../../../utils/get-random-speed';

const Track = () => {
  const dispatch = useDispatch();
  const { selectedCar, opponentCars, isRaceStarted, isRaceFinished } =
    useSelector((state) => state);
  useEffect(() => {
    const racingCars = [selectedCar, ...opponentCars];

    if (isRaceStarted) {
      racingCars.forEach((car) => {
        moveCarHandler(car);
      });
    }
  }, [isRaceStarted]);

  useEffect(() => {
    const racingCars = [selectedCar, ...opponentCars];

    if (racingCars.some((car) => car.currentPlace >= 575)) {
      dispatch({ type: 'SET_RACE_STARTED', payload: false });
      dispatch({ type: 'SET_RACE_FINISHED', payload: true });
    }
  }, [selectedCar, opponentCars]);

  const startRaceHandler = () => {
    dispatch({ type: 'SET_RACE_STARTED', payload: true });
  };

  const moveCarHandler = (car) => {
    setInterval(() => {
      dispatch({
        type: 'SET_NEW_PLACE',
        name: car.name,
        payload: getRandomSpeed(car.speedRange[1], car.speedRange[0]),
      });
    }, 1000);
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

      <div className={styles.buttonsContainer}>
        {!isRaceStarted && !isRaceFinished && (
          <button onClick={startRaceHandler} className={styles.startRaceButton}>
            Start The Race!
          </button>
        )}
        {!isRaceStarted && isRaceFinished && (
          <div>
            <button>Race Again!</button>
            <button>Change My Car</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Track;
