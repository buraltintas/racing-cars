import styles from './title.module.css';

const Title = () => {
  return (
    <div className={styles.titleContainer}>
      <h1 className={styles.titleText}>Select Your Car!</h1>
    </div>
  );
};

export default Title;
