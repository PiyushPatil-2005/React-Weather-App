import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import SunnyIcon from '@mui/icons-material/Sunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

export default function InfoBox({info}) {
    let HOT_Image = "https://th.bing.com/th/id/OIP.kazE3eWU1CehiR-xJi1g1gHaE8?rs=1&pid=ImgDetMain";
    let COLD_Image = "https://www.findingtheuniverse.com/wp-content/uploads/2017/01/Blue2Bhour2BFinland_by_Laurence2BNorah.jpg";
    let RAIN_Image = "https://wallpaperaccess.com/full/674201.jpg";
    
    
    return (
        <div className="InfoBox">
            <h2>Weather {info.weather}</h2>
            <div className='cardContainer'>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={info.humidity > 70 ? RAIN_Image : info.temp >20 ? HOT_Image : COLD_Image}
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {info.city} &nbsp;&nbsp;
                        {info.humidity > 80 ? <ThunderstormIcon/> : info.temp > 20 ? <SunnyIcon/> : <AcUnitIcon/>}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" component={"span"}>
                        <p>Temperature = {info.temp}&deg;C</p>
                        <p>Humidity = {info.humidity}</p>
                        <p>Min Temp = {info.temp}</p>
                        <p>Max Temp = {info.temp}</p>
                        <p>The Weather can be describe as <i>{info.description}</i> and feels like {info.feels_like}</p>
                    </Typography>
                </CardContent>
                </Card>
            </div>
        </div>
    );
}