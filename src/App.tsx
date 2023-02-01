import React from "react";

import styles from "./App.module.css";
import Countries from "./components/Countries/Countries";
import Footer from "./components/Layout/Footer";
import Header from "./components/Layout/Header";

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Countries />
      <Footer />
    </div>
  );
}

export default App;
