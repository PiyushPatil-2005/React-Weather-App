import SearchBox from './SearchBox';
import InfoBox from './InfoBox';
import { useState } from 'react';

export default function WeatherApp() {
    let [newWeather, setNewWeather] = useState({
        city : "Delhi",
        temp : 24.04,
        temp_max : 24.04,
        temp_min : 24.04,
        humidity : 50,
        feels_like : 24.04,
        description : "clear sky"
    })
    let updateInfo = (result) => {
        setNewWeather(result);
    }
    return (
        <div>
            <h2 style={{textAlign:"center"}}>Weather App Developed By Piyush Patil</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={newWeather}/>
        </div>
    );
}