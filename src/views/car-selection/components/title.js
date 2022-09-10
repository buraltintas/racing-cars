import styles from './title.module.css';

const Title = ({ title }) => {
  return (
    <div className={styles.titleContainer}>
      <h1 className={styles.titleText}>{title}</h1>
    </div>
  );
};

export default Title;
