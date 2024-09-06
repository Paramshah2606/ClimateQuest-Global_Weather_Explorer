import SearchBox from "./SearchBox.jsx"
import InfoBox from "./InfoBox.jsx"
import Navigation from "./Navigation.jsx"
import { useState } from "react"

export default function WeatherApp(){
    const [weatherInfo,setWeatherInfo]=useState({
        city:"Ahmedabad",
        temp:33.02,
        tempmin:33.02,
        tempmax:33.02,
        humidity:50,
        feelslike:29,
        weather:"Rain",
    })

    let updateInfo=(result)=>{
        setWeatherInfo(result);
    }
    return(
        <>  
            <Navigation/>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </>
    )
}