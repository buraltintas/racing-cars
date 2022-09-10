import { useSelector } from 'react-redux';
import styles from './cars.module.css';
import CarSelectionItem from './car-selection-item';

const Cars = () => {
  const cars = useSelector((state) => state.cars);

  const renderCars = () => {
    return cars.map((car) => <CarSelectionItem key={car.name} car={car} />);
  };

  return <div className={styles.cars}>{renderCars()}</div>;
};

export default Cars;
