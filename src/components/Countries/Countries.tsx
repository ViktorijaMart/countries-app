import internal from "stream";
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
  const countries = props.countries;

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

  return (
    <Row>
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
