import styles from './car-selection-item.module.css';

const CarSelectionItem = ({ car }) => {
  return (
    <div className={styles.carSelectionItem}>
      <img src={car.carImg} alt={car.name} className={styles.carImage} />
    </div>
  );
};

export default CarSelectionItem;
