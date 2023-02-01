import { Children, ReactNode } from "react";

import styles from "./Row.module.css";

type Props = {
  children: ReactNode;
};

const Row = (props: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.row}>{props.children}</div>
    </div>
  );
};

export default Row;
