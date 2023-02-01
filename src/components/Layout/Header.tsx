import styles from "./Header.module.css";

import Row from "../UI/Row";

const Header = () => {
  return (
    <Row>
      <header>
        <h1 className={styles["header__title"]}>Countries</h1>
      </header>
    </Row>
  );
};

export default Header;
