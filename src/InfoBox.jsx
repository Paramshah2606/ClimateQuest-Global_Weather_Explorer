import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import "./InfoBox.css"

export default function InfoBox({info}){
    const HOT_URL="https://images.unsplash.com/photo-1504386106331-3e4e71712b38?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHN1bnxlbnwwfHwwfHx8MA%3D%3D";
    const COLD_URL="https://plus.unsplash.com/premium_photo-1670963964797-942df1804579?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c25vdyUyMGNvdmVyZWQlMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D";
    const RAIN_URL="https://images.unsplash.com/photo-1552570173-43e2d76c37f4?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    return(
        <>
        <div className="InfoBox">
            <div className="card">
            <Card sx={{ maxWidth: 800 }}>
                <CardMedia sx={{ height: 220 }} image={info.humidity>80 ? RAIN_URL : info.temp>25 ? HOT_URL : COLD_URL} title={info.city}/>
                <CardContent id='color-body'>
                <Typography gutterBottom variant="h5" component="div" fontSize={40}>
                    {info.city}{info.humidity>80 ? <ThunderstormIcon/> : info.temp>27 ? <WbSunnyIcon/>  : <AcUnitIcon/>}
                </Typography>
                <Typography variant="body2" color="Black Pearl" fontSize={30} component={"span"} backgroundcolor="red">
                <div id='tex'>Temperature: {info.temp}&deg;C</div>
                <div id='tex'>Humidity: {info.humidity}</div>
                <div id='tex'>Min-Temperature: {info.tempmin}&deg;C</div>
                <div id='tex'>Max-Temperature: {info.tempmax}&deg;C</div>
                <div id='tex'>The weather can be described as {info.weather} and it feeels like {info.feelslike}&deg;C</div>
                </Typography>
                </CardContent>
            </Card>
            </div>
        </div>
        </>
    )
}