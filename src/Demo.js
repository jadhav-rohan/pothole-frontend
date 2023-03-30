// import axios from 'axios';
// import React, { useState } from 'react';

// function Demo() {
//   const [address, setAddress] = useState(null);

//   // Function to get address from latitude and longitude values
//   const getAddress = async (latitude, longitude) => {
//     const response = await axios.get('http://localhost:9002/api/getAddress', {
//       params: {
//         lat: latitude,
//         lng: longitude,
//       },
//     });
//     setAddress(response.data);
//   };

//   // Function to handle success case when retrieving user's location
//   const handleSuccess = (position) => {
//     const { latitude, longitude } = position.coords;
//     getAddress(latitude, longitude);
//     console.log(latitude, longitude)
//   };

//   // Function to handle error case when retrieving user's location
//   const handleError = (error) => {
//     console.error(error);
//   };

//   navigator.geolocation.getCurrentPosition(function(pos) {
//     var longitude = pos.coords.longitude
//     var latitude = pos.coords.latitude
//     const acc = pos.coords.accuracy
//     console.log(acc)
    
//     console.log(longitude, latitude)
//   })
 
//   // Render the geolocation component
//   return (
//     <div>
//       <button onClick={() => navigator.geolocation.getCurrentPosition(handleSuccess, handleError)}>Get Current Location</button>
//       {/* {address ? <p>Address: {address}</p> : null} */}
//     </div>
//   );
// }

// export default Demo;

import React, { useEffect, useState } from "react";
// import "./styles.css";
import { useFormik } from "formik";
import Select from "react-select";
import { Country, State, City }  from 'country-state-city';
import { getStatesOfCountry } from "country-state-city/lib/state";


export default function App() {
  // const addressFromik = useFormik({
  //   initialValues: {
  //     country: "India",
  //     state: null,
  //     city: null
  //   },
  //   onSubmit: (values) => console.log(JSON.stringify(values))
  // });
  const [city, setCity] = useState("")
  const [state, setState] = useState("")
  const countries = Country.getAllCountries();
  // console.log(countries)
  const updatedCountries = countries.map((country) => ({
    label: country.name,
    value: country.id,
    ...country
  }));

  // console.log(getStatesOfCountry("AF"))
  const updatedStates = (countryId) =>
    State
      .getStatesOfCountry("IN")
      .map((state) => ({ label: state.name, value: state.id, ...state }));
  
    // console.log(getCitiesOfState)
  const updatedCities = (stateId) =>
    City
      .getCitiesOfState("IN", stateId)
      .map((city) => ({ label: city.name, value: city.id, ...city }));

  // const { values, handleSubmit, setFieldValue, setValues } = addressFromik;
  const handleSubmitState = (selectedOption) => {
    setState(selectedOption)
    console.log("first", selectedOption)
  }
  const handleSubmitCity = (selectedOption) => {
    setCity(selectedOption)
    console.log("second", selectedOption)
  }
  // useEffect(() => {}, [state, city]);
  // console.log(city)
  return (
    <div className="App">
      <form>
        <Select
          id="state"
          name="state"
          options={updatedStates()}
          value={state}
          onChange={handleSubmitState}
        />
        <Select
          id="city"
          name="city"
          options={updatedCities(state.isoCode)}
          value={city}
          onChange={handleSubmitCity}
        />
        <button type="submit">Submit</button>
        <p>{JSON.stringify(Country.get)}</p>
      </form>
      <div>
      {/* {State
      .getStatesOfCountry("AF")
      .map((state) => ({ label: state.name, value: state.id, ...state }))
      } */}
      {/* {getStatesOfCountry} */}
      </div>
    </div>
    // <div>Here</div>
  );
}
