import { useState, useEffect } from "react";

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
  const initialCountries = props.countries;
  const [countries, setCountries] = useState(initialCountries);
  const lithuaniaArea: number = 65300;

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

  const filterCountriesHandler = (
    filterByArea: boolean,
    filterByRegion: boolean
  ) => {
    if (initialCountries && countries) {
      const filterByAreaFunction = () => {
        const filteredByArea = initialCountries.filter(
          (country) => country.area < lithuaniaArea
        );

        setCountries(filteredByArea);
      };

      const filterByRegionFunction = () => {
        const filteredByRegion = initialCountries.filter(
          (country) => country.region === "Oceania"
        );

        setCountries(filteredByRegion);
      };

      const filterByBothFunction = () => {
        const filtered = countries
          .filter((country) => country.area < lithuaniaArea)
          .filter((country) => country.region === "Oceania");

        setCountries(filtered);
      };

      const filterBoth = filterByArea && filterByRegion;

      switch (true) {
        case filterBoth:
          filterByBothFunction();
          break;
        case filterByArea:
          filterByAreaFunction();
          break;
        case filterByRegion:
          filterByRegionFunction();
          break;
        default:
          setCountries(initialCountries);
      }
    }
  };

  return (
    <Row>
      <SortAndFilter
        onSortCountries={sortCountriesHandler}
        onFilter={filterCountriesHandler}
      />
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
