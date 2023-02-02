import styles from "./FilterItem.module.css";

type props = {
  title: string;
  filterValue: string;
};

const FilterItem = (props: props) => {
  return (
    <div>
      <h2 className={styles.h2}>{props.title}</h2>
      <label>
        <input className={styles.input} type="checkbox" />
        {props.filterValue}
      </label>
    </div>
  );
};

export default FilterItem;
