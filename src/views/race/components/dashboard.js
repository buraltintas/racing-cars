import { useEffect, useState } from 'react';
import styles from './dashboard.module.css';

const Dashboard = ({ racingCars, selectedCar, result }) => {
  const [sortedRacingCars, setSortedRacingCars] = useState([]);

  useEffect(() => {
    const sortedArray = racingCars.sort((a, b) => {
      return result?.length > 0
        ? a.time - b.time
        : b.currentPlace - a.currentPlace;
    });

    setSortedRacingCars(sortedArray);
  }, [racingCars, result]);

  return (
    <div>
      {sortedRacingCars?.map((car, i) => {
        return (
          <div key={car.name} className={styles.dashboardContainer}>
            <div className={styles.dashboardItem}>
              <span>{i + 1}.</span> &nbsp;
              <span className={styles.carName}>{car.name}</span>
              {car.name === selectedCar.name && (
                <span className={styles.youText}>You</span>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Dashboard;
