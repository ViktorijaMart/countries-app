import styles from "./Country.module.css";

const Country = () => {
  return (
    <div className={styles["country"]}>
      <p className={styles["country__name"]}>
        <b>Name:</b> Lithuania
      </p>
      <p className={styles["country__region"]}>
        <b>Region:</b> Europe
      </p>
      <p className={styles["country__area-size"]}>
        <b>Area size:</b> 3000 km
        <span className={styles["country__area-size--superscript"]}>2</span>
      </p>
    </div>
  );
};

export default Country;
