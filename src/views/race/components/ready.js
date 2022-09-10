import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import LoadingSpinner from '../../../constants/loading-spinner';
import RaceFlagIcon from '../../../constants/race-flag-icon';
import Title from '../../car-selection/components/title';
import styles from './ready.module.css';

const Ready = () => {
  const [isLoadingOpponents, setIsLoadingOpponents] = useState(true);
  const dispatch = useDispatch();
  const selectedCar = useSelector((state) => state.selectedCar);
  const opponentCars = useSelector((state) => state.opponentCars);

  const changeCarHandler = () => {
    dispatch({ type: 'SET_SELECTED_CAR', payload: null });
  };

  const userReadyHandler = () => {
    dispatch({ type: 'SET_USER_READY', payload: true });
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoadingOpponents(false);
    }, 2000);
  }, []);

  const renderOpponentCars = () => {
    return opponentCars.map((car) => {
      return (
        <div key={car.name} className={styles.opponentCarDetails}>
          <img
            src={car.pilotImg}
            alt={car.pilot}
            className={styles.opponentPilotImage}
          />
          <div className={styles.carInfo}>
            <span className={styles.carName}>{car.name}</span>
            <span className={styles.pilotName}>{car.pilot}</span>
          </div>
        </div>
      );
    });
  };

  const renderReadyButtons = () => {
    return (
      <>
        <Title title={'Are You Ready?'} />
        <div className={styles.buttons}>
          <button onClick={userReadyHandler}>
            <RaceFlagIcon class={styles.icon} />
            YES!
          </button>
          <button onClick={changeCarHandler}>Change My Car</button>
        </div>
      </>
    );
  };

  return (
    <div className={styles.readyContainer}>
      <div className={styles.yourCarContainer}>
        <Title title={'Your Car'} />
        <div className={styles.carDetails}>
          <img
            src={selectedCar.pilotImg}
            alt={selectedCar.pilot}
            className={styles.pilotImage}
          />
          <div className={styles.carInfo}>
            <span className={styles.carName}>{selectedCar.name}</span>
            <span className={styles.pilotName}>{selectedCar.pilot}</span>
          </div>
        </div>
        <img
          src={selectedCar.carImg}
          alt={selectedCar.name}
          className={styles.carImage}
        />
      </div>
      <div className={styles.opponentsContainer}>
        <Title
          title={
            isLoadingOpponents
              ? 'Your Opponents Are Getting Ready'
              : 'Your Opponents Are Ready!'
          }
        />
        {isLoadingOpponents ? (
          <LoadingSpinner />
        ) : (
          <div className={styles.opponentCars}>{renderOpponentCars()}</div>
        )}
      </div>
      {!isLoadingOpponents && renderReadyButtons()}
    </div>
  );
};

export default Ready;
