import { useState, useEffect } from "react";

import internal from "stream";
import SortAndFilter from "../SortAndFilter/SortAndFilter";
import Row from "../UI/Row";
import Country from "./Country/Country";

type country = {
  name: string;
  region: string;
  area: number;
  independent: boolean;
};

type props = {
  countries: null | country[];
};

const Countries = (props: props) => {
  const [countries, setCountries] = useState(props.countries);

  useEffect(() => {
    setCountries(props.countries);
  }, [props.countries]);

  const createCountryItem = (country: country, index: number) => {
    return (
      <Country
        key={index}
        name={country.name}
        region={country.region}
        area={country.area}
      />
    );
  };

  const sortCountriesHandler = (sortAsc: boolean, sortDesc: boolean) => {
    if (countries) {
      if (sortAsc) {
        setCountries(
          countries.slice().sort((a, b) => a.name.localeCompare(b.name))
        );
      }

      if (sortDesc) {
        setCountries(
          countries.slice().sort((a, b) => b.name.localeCompare(a.name))
        );
      }
    }
  };

  return (
    <Row>
      <SortAndFilter onSortCountries={sortCountriesHandler} />
      <div>
        {countries &&
          countries.map((country) =>
            createCountryItem(country, countries.indexOf(country))
          )}
      </div>
    </Row>
  );
};

export default Countries;
