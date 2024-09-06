import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import "./SearchBox.css"

export default function SearchBox({updateInfo}){
    let [city,setCity]=useState("");
    let [error,setError]=useState(false);

    let getWeatherInfo=async ()=>{
        try {
            let response=await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonresponse=await response.json();
        console.log(jsonresponse);
        let result={
            city:city,
            temp:jsonresponse.main.temp,
            tempmin:jsonresponse.main.temp_min,
            tempmax:jsonresponse.main.temp_max,
            humidity:jsonresponse.main.humidity,
            feelslike:jsonresponse.main.feels_like,
            weather:jsonresponse.weather[0].description,
        }
        console.log(result);
        return result;
        } catch (err) {
            throw err;
        }
    }

    let handleChange=(event)=>{
        setCity(event.target.name=event.target.value);
        // console.log(event.target.value);
    }

    let handleSubmit=async (event)=>{
        try {
            event.preventDefault();
        console.log(city);
        let info=await getWeatherInfo();
        updateInfo(info);
        setCity("");
        } catch (error) {
            setError(true);
        }
    }

    return(
        <div className="form">
            <h1 className='text'>Get weather details in just 1 second!</h1>
            <form onSubmit={handleSubmit}>
                <div id='searchbox'>
                    <TextField size='large' fullWidth label="City Name" color="success" id="fullWidth" value={city} onChange={handleChange} required />
                </div>
                {/* <TextField id="searchbox outlined-basic" label="City Name" variant="outlined" value={city} onChange={handleChange} required/> */}
                <br></br><br></br>
                <Button variant="contained" type="submit" id="search" endIcon={<SearchIcon />}>Search</Button>
                {error ? <p style={{color:"red"}}>No such place exists in API</p> : ""}
            </form>
        </div>
    )
}
