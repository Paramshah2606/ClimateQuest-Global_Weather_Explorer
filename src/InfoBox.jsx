import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import "./InfoBox.css";

export default function InfoBox({ info }) {
    const HOT_URL = "https://images.unsplash.com/photo-1504386106331-3e4e71712b38?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHN1bnxlbnwwfHwwfHx8MA%3D%3D";
    const COLD_URL = "https://plus.unsplash.com/premium_photo-1670963964797-942df1804579?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c25vdyUyMGNvdmVyZWQlMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D";
    const RAIN_URL = "https://images.unsplash.com/photo-1552570173-43e2d76c37f4?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    // Choose background and icon based on weather
    let bgUrl = info.humidity > 80 ? RAIN_URL : info.temp > 27 ? HOT_URL : COLD_URL;
    let WeatherIcon = info.humidity > 80 ? ThunderstormIcon : info.temp > 27 ? WbSunnyIcon : AcUnitIcon;
    let iconColor = info.humidity > 80 ? "#2196f3" : info.temp > 27 ? "#FFD600" : "#00bcd4";

    return (
        <div className="infobox-glass">
            <Card className="weather-card" sx={{
                maxWidth: 600,
                borderRadius: 6,
                boxShadow: "0 8px 32px 0 rgba(31,38,135,0.15)",
                background: "rgba(255,255,255,0.35)",
                backdropFilter: "blur(8px)",
                border: "1px solid rgba(255,255,255,0.18)"
            }}>
                <CardMedia
                    sx={{ height: 200, borderTopLeftRadius: 24, borderTopRightRadius: 24 }}
                    image={bgUrl}
                    title={info.city}
                />
                <CardContent>
                    <div className="city-row">
                        <Typography gutterBottom variant="h5" component="div" className="city-name">
                            {info.city}
                        </Typography>
                        <WeatherIcon sx={{ fontSize: 48, color: iconColor, marginLeft: 16 }} />
                    </div>
                    <div className="weather-details">
                        <Typography variant="body1" className="weather-text">
                            <span>Temperature: <b>{info.temp}&deg;C</b></span>
                        </Typography>
                        <Typography variant="body1" className="weather-text">
                            <span>Humidity: <b>{info.humidity}%</b></span>
                        </Typography>
                        <Typography variant="body1" className="weather-text">
                            <span>Min Temp: <b>{info.tempmin}&deg;C</b></span>
                        </Typography>
                        <Typography variant="body1" className="weather-text">
                            <span>Max Temp: <b>{info.tempmax}&deg;C</b></span>
                        </Typography>
                        <Typography variant="body1" className="weather-text">
                            <span>
                                {`The weather can be described as `}
                                <b>{info.weather}</b>
                                {` and it feels like `}
                                <b>{info.feelslike}&deg;C</b>
                            </span>
                        </Typography>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
