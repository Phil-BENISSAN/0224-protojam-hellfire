import React from 'react';
import CountryCard from "../components/CountryCard/CountryCard";

const App = () => {
  return (
    <main className="countryCardMain">
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
    </main>
  );
};

export default App;