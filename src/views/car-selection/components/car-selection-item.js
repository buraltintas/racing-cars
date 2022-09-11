import styles from './car-selection-item.module.css';
import { useDispatch } from 'react-redux';

const CarSelectionItem = ({ car }) => {
  const dispatch = useDispatch();

  const selectCar = () => {
    dispatch({ type: 'SET_SELECTED_CAR', payload: car });
    dispatch({ type: 'SET_OPPONENT_CARS' });
  };

  const selectRandomCar = () => {
    dispatch({ type: 'SET_RANDOM_SELECTED_CAR' });
    dispatch({ type: 'SET_OPPONENT_CARS' });
  };

  return (
    <div
      key={car.name}
      onClick={car.name === '?' ? selectRandomCar : selectCar}
      className={`${styles.carSelectionItem} ${
        car.name === '?' ? styles.randomCarSelectionItem : ''
      }`}
    >
      <img
        src={car.carImg}
        alt={car.name}
        className={car.name === '?' ? styles.randomCarImage : styles.carImage}
      />
      <div>
        <div className={styles.carDetailContainer}>
          <div className={styles.carInfo}>
            <span className={styles.carName}>{car.name}</span>
            <span className={styles.pilotName}>{car.pilot}</span>
          </div>
          {car.name === '?' ? (
            <div className={styles.randomPilotImage}></div>
          ) : (
            <img
              src={car.pilotImg}
              alt={car.pilot}
              className={styles.pilotImage}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default CarSelectionItem;
