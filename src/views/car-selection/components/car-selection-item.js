import styles from './car-selection-item.module.css';
import { useDispatch } from 'react-redux';

const CarSelectionItem = ({ car }) => {
  const dispatch = useDispatch();

  const selectCarHandler = () => {
    dispatch({ type: 'SELECT_CAR', payload: car });
  };

  return (
    <div
      key={car.name}
      onClick={selectCarHandler}
      className={styles.carSelectionItem}
    >
      <img src={car.carImg} alt={car.name} className={styles.carImage} />
      <div>
        <div className={styles.carDetailContainer}>
          <div className={styles.carInfo}>
            <span>{car.name}</span>
            <span>{car.pilot}</span>
          </div>
          <img
            src={car.pilotImg}
            alt={car.pilot}
            className={styles.pilotImage}
          />
        </div>
      </div>
    </div>
  );
};

export default CarSelectionItem;
