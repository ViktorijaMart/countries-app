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

library.add(faFilter, faArrowDownAZ, faArrowDownZA);

type props = {
  onSortCountries: (sortAsc: boolean, sortDesc: boolean) => void;
};

const SortAndFilter = (props: props) => {
  const [sortAsc, setSortAsc] = useState(false);
  const [sortDesc, setSortDesc] = useState(false);

  const sortAscIcon = <FontAwesomeIcon icon={["fas", "arrow-down-a-z"]} />;
  const sortDescIcon = <FontAwesomeIcon icon={["fas", "arrow-down-z-a"]} />;

  const filterIcon = <FontAwesomeIcon icon={["fas", "filter"]} />;

  const sortAcsending = () => {
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

  return (
    <div className={styles["sort-and-filter"]}>
      <div className={styles["sort-and-filter__sort"]}>
        <Button
          icon={sortAscIcon}
          content="Sort A to Z"
          onClick={sortAcsending}
        />
        <Button
          icon={sortDescIcon}
          content="Sort Z to A"
          onClick={sortDescending}
        />
      </div>
      {/* <Button icon={filterIcon} content="Filter" /> */}
    </div>
  );
};

export default SortAndFilter;
