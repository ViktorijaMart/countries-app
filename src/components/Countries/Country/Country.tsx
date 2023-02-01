import styles from "./Country.module.css";

type props = {
  name: string;
  region: string;
  area: number;
};

const Country = (props: props) => {
  return (
    <div className={styles["country"]}>
      <p className={styles["country__name"]}>
        <b>Name:</b> {props.name}
      </p>
      <p className={styles["country__region"]}>
        <b>Region:</b> {props.region}
      </p>
      <p className={styles["country__area-size"]}>
        <b>Area size:</b> {props.area} km
        <span className={styles["country__area-size--superscript"]}>2</span>
      </p>
    </div>
  );
};

export default Country;
