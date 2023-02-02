import { useEffect, useState } from "react";
import FilterItem from "./FilterItem";
import styles from "./Filters.module.css";

type props = {
  onFilter: (filterByArea: boolean, filterByRegion: boolean) => void;
};

const Filters = (props: props) => {
  const [filterByArea, setFilterByArea] = useState(false);
  const [filterByRegion, setFilterByRegion] = useState(false);

  const filterByAreaHandler = () => {
    setFilterByArea(!filterByArea);
  };

  const filterByRegionHandler = () => {
    setFilterByRegion(!filterByRegion);
  };

  useEffect(() => {
    props.onFilter(filterByArea, filterByRegion);
  }, [filterByArea, filterByRegion]);

  return (
    <div className={styles["filter"]}>
      <FilterItem
        title="By area:"
        filterValue="Smaller than Lithuania"
        onFilter={filterByAreaHandler}
      />
      <FilterItem
        title="By region:"
        filterValue="Oceania"
        onFilter={filterByRegionHandler}
      />
    </div>
  );
};

export default Filters;
