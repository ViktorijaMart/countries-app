import styles from "./Filter.module.css";

const Filter = () => {
  return (
    <div className={styles["filter"]}>
      <div className={styles["filter__area"]}>
        <h2 className={styles.h2}>By area:</h2>
        <label>
          <input className={styles.input} type="checkbox" />
          Smaller than Lithuania
        </label>
      </div>
      <div className={styles["filter__region"]}>
        <h2 className={styles.h2}>By region:</h2>
        <label>
          <input className={styles.input} type="checkbox" />
          Oceania
        </label>
      </div>
    </div>
  );
};

export default Filter;
