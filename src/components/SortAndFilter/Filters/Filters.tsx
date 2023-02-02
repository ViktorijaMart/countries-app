import { isPropertySignature } from "typescript";
import FilterItem from "./FilterItem";
import styles from "./Filters.module.css";

const Filters = () => {
  return (
    <div className={styles["filter"]}>
      <FilterItem title="By area:" filterValue="Smaller than Lithuania" />
      <FilterItem title="By region:" filterValue="Oceania" />
    </div>
  );
};

export default Filters;
