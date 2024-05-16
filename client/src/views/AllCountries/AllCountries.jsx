import CountryCard from "../../components/CountryCard";
import "./AllCountries.css";

export function AllCountries() {
  return (
    <main className="AllCountriesMain">
      <CountryCard
        countryName="COUNTRY_NAME1"
        countryInfo1="country_info1"
        countryInfo2="country_info2"
        countryInfo3="country_info3"
      />
      <CountryCard
        countryName="COUNTRY_NAME2"
        countryInfo1="country_info1"
        countryInfo2="country_info2"
        countryInfo3="country_info3"
      />
      <CountryCard
        countryName="COUNTRY_NAME2"
        countryInfo1="country_info1"
        countryInfo2="country_info2"
        countryInfo3="country_info3"
      />
    </main>
  );
}
