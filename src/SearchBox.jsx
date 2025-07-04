import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import "./SearchBox.css";

export default function SearchBox({ updateInfo }) {
    const API_URL = import.meta.env.VITE_API_URL;
    const API_KEY = import.meta.env.VITE_API_KEY;
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);

    let getWeatherInfo = async () => {
        try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonresponse = await response.json();
            if (!jsonresponse.main) throw new Error("City not found");
            let result = {
                city: city,
                temp: jsonresponse.main.temp,
                tempmin: jsonresponse.main.temp_min,
                tempmax: jsonresponse.main.temp_max,
                humidity: jsonresponse.main.humidity,
                feelslike: jsonresponse.main.feels_like,
                weather: jsonresponse.weather[0].description,
            }
            return result;
        } catch (err) {
            throw err;
        }
    }

    let handleChange = (event) => {
        setCity(event.target.value);
        setError(false);
    }

    let handleSubmit = async (event) => {
        event.preventDefault();
        try {
            let info = await getWeatherInfo();
            updateInfo(info);
            setCity("");
        } catch {
            setError(true);
        }
    }

    return (
        <div className="form-glass">
            <h2 className='form-title'>Get weather details instantly!</h2>
            <form onSubmit={handleSubmit} className="search-form-row">
                <TextField
                    size='small'
                    label="City Name"
                    color="primary"
                    value={city}
                    onChange={handleChange}
                    required
                    className="search-input"
                />
                <Button
                    variant="contained"
                    type="submit"
                    className="search-btn"
                    endIcon={<SearchIcon />}
                >
                    Search
                </Button>
            </form>
            {error && <p className="error-text">No such place exists in API</p>}
        </div>
    )
}
