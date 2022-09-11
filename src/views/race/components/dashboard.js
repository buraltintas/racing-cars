import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styles from './dashboard.module.css';

const Dashboard = ({ racingCars, selectedCar }) => {
  const [sortedRacingCars, setSortedRacingCars] = useState([]);
  const { isRaceFinished } = useSelector((state) => state);

  useEffect(() => {
    const sortedArray = racingCars.sort((a, b) => {
      return isRaceFinished ? a.time - b.time : b.currentPlace - a.currentPlace;
    });

    setSortedRacingCars(sortedArray);
  }, [racingCars, isRaceFinished]);

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
