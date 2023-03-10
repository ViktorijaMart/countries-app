import { useState, useEffect } from "react";
import axios from "axios";

import styles from "./App.module.css";
import Countries from "./components/Countries/Countries";
import Footer from "./components/Layout/Footer";
import Header from "./components/Layout/Header";

type country = {
  name: string;
  region: string;
  area: number;
  independent: boolean;
};

function App() {
  const [countries, setCountries] = useState<country[] | null>(null);

  useEffect(() => {
    const getCountries = () => {
      axios
        .get("https://restcountries.com/v2/all?fields=name,region,area")
        .then((data) => {
          setCountries(data.data);
        })
        .catch((error) => {
          console.log(error.message);
          setCountries(null);
        });
    };
    getCountries();
  }, []);

  return (
    <div className={styles.app}>
      <Header />
      {countries && <Countries countries={countries} />}
      <Footer />
    </div>
  );
}

export default App;
