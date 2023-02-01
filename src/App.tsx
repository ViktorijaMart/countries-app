import React from "react";

import styles from "./App.module.css";
import Footer from "./components/Layout/Footer";
import Header from "./components/Layout/Header";

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Footer />
    </div>
  );
}

export default App;
