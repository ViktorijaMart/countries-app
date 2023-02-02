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

const SortAndFilter = () => {
  const sortAscIcon = <FontAwesomeIcon icon={["fas", "arrow-down-a-z"]} />;
  const sortDescIcon = <FontAwesomeIcon icon={["fas", "arrow-down-z-a"]} />;

  const filterIcon = <FontAwesomeIcon icon={["fas", "filter"]} />;

  return (
    <Row>
      <div className={styles["sort-and-filter"]}>
        <div className={styles["sort-and-filter__sort"]}>
          <Button icon={sortAscIcon} content="Sort A to Z" />
          <Button icon={sortDescIcon} content="Sort Z to A" />
        </div>
        <Button icon={filterIcon} content="Filter" />
      </div>
    </Row>
  );
};

export default SortAndFilter;
