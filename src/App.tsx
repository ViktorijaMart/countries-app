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
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getCountries = () => {
      axios
        .get("https://restcountries.com/v2/all?fields=name,region,area")
        .then((data) => {
          setCountries(data.data);
          setError(null);
        })
        .catch((error) => {
          setError(error.message);
          setCountries(null);
        });
      setLoading(false);
    };
    getCountries();
  }, []);

  return (
    <div className={styles.app}>
      <Header />
      <Countries countries={countries} />
      <Footer />
    </div>
  );
}

export default App;
