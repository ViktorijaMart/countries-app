import { useState, useEffect } from "react";
import ReactDom from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faFilter,
  faArrowDownAZ,
  faArrowDownZA,
} from "@fortawesome/free-solid-svg-icons";

import styles from "./SortAndFilter.module.css";

import Button from "../UI/Button";
import Row from "../UI/Row";
import Filters from "./Filters/Filters";

library.add(faFilter, faArrowDownAZ, faArrowDownZA);

type props = {
  onSortCountries: (sortAsc: boolean, sortDesc: boolean) => void;
  onFilter: (filterByArea: boolean, filterByRegion: boolean) => void;
};

const SortAndFilter = (props: props) => {
  const [sortAsc, setSortAsc] = useState(false);
  const [sortDesc, setSortDesc] = useState(false);
  const [showFilter, setShowFilter] = useState(false);

  // BUTTON ICONS
  const sortAscIcon = <FontAwesomeIcon icon={["fas", "arrow-down-a-z"]} />;
  const sortDescIcon = <FontAwesomeIcon icon={["fas", "arrow-down-z-a"]} />;
  const filterIcon = <FontAwesomeIcon icon={["fas", "filter"]} />;

  // SORT LOGIC

  const sortAscending = () => {
    setSortAsc(true);
    setSortDesc(false);
  };

  const sortDescending = () => {
    setSortDesc(true);
    setSortAsc(false);
  };

  useEffect(() => {
    props.onSortCountries(sortAsc, sortDesc);
  }, [sortAsc, sortDesc]);

  // SORT LOGIC ENDS

  // SHOW FILTER LOGIC

  const showFilterHandler = () => {
    setShowFilter(!showFilter);
  };

  // SHOW FILTER LOGIC ENDS

  // FILTER LOGIC

  const filterHandler = (filterByArea: boolean, filterByRegion: boolean) => {
    props.onFilter(filterByArea, filterByRegion);
  };

  // FILTER LOGIC ENDS

  return (
    <div className={styles["sort-and-filter-container"]}>
      <div className={styles["sort-and-filter"]}>
        <div className={styles["sort-and-filter__sort"]}>
          <Button
            icon={sortAscIcon}
            content="Sort A to Z"
            onClick={sortAscending}
          />
          <Button
            icon={sortDescIcon}
            content="Sort Z to A"
            onClick={sortDescending}
          />
        </div>
        <Button
          icon={filterIcon}
          content="Filter"
          onClick={showFilterHandler}
        />
      </div>
      {showFilter && <Filters onFilter={filterHandler} />}
    </div>
  );
};

export default SortAndFilter;
