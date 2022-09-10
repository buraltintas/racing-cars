import { useSelector } from 'react-redux';
import styles from './track.module.css';

const Track = () => {
  const { selectedCar, opponentCars } = useSelector((state) => state);

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
          className={styles[opponentCarClassNames(i)]}
          style={{ left: -390 }}
        >
          <img src={car.carImg} alt={car.name} className={styles.carImage} />
        </div>
      );
    });
  };

  const renderOpponentCarNames = () => {
    return opponentCars.map((car, i) => {
      return (
        <span className={styles[opponentCarNameClassNames(i)]}>{car.name}</span>
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
      <div className={styles.selectedCar} style={{ left: -390 }}>
        <img
          src={selectedCar.carImg}
          alt={selectedCar.name}
          className={styles.carImage}
        />
      </div>
      <span className={styles.yourCarText}>Your Car</span>
      {renderOpponentCars()}
      {renderOpponentCarNames()}
    </div>
  );
};

export default Track;
