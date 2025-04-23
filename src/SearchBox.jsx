import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import "./SearchBox.css"

export default function MaterialUI({updateInfo}) {
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);

  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "5142da0abeb4302a9eb0bd33eac0153f";

  const fetchWeather = async () => {
    try {
      let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
      let data = await response.json();
      let result = {
        city : city,
        temp : data.main.temp,
        temp_min : data.main.temp_min,
        temp_max : data.main.temp_max,
        humidity : data.main.humidity,
        feels_like : data.main.feels_like,
        description : data.weather[0].description
      }
      console.log(result);
      return result;
    } catch (error) {
      throw error;
    }
    
  }

  let handleChange = (event) => {
    setCity(event.target.value);
  }
  let handleSubmit = async (event) => {
    try {
      event.preventDefault();
      setError(false);
      console.log(city);
      setCity("");
      let info = await fetchWeather();
      updateInfo(info);
    } catch (error) {
      setError(true);
    }
  }

  return (
    <div className='searchBox'>
      <br /><br />
      <form onSubmit={handleSubmit}>
        <TextField id="city" label="City Name" variant="outlined" value={city} onChange={handleChange} required /><br /><br />
        <Button variant="contained" type='submit'>Search</Button>
      </form>
      { error ? <p style={{color:"red"}}>No Such Place or City Found, Please try again</p> : null}
    </div> 
  );
}