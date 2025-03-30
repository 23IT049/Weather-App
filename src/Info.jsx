import Card from '@mui/material/Card';
import './info.css'
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';



export default function Info({info}){
    let RAIN_URL="https://plus.unsplash.com/premium_photo-1700131051396-307a36e3ef85?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFpbnxlbnwwfHwwfHx8MA%3D%3D"
    let COLD_URL="https://plus.unsplash.com/premium_photo-1670098277032-cc59e6cdb51b?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    let HOT_URL="https://plus.unsplash.com/premium_photo-1669750817438-3f7f3112de8d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHN1bW1lcnxlbnwwfHwwfHx8MA%3D%3D"
    let URL=(info.humidity>80)?RAIN_URL:(info.temp>15?HOT_URL:COLD_URL)
    
    return <div>
        <h3>Weather Info </h3>
        <div className='card'>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={URL}
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {info.city}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }} component="span" >
                    
                    <p>temp = {info.temp}&deg;C</p>
                    <p>max_temp = {info.tempMax}&deg;C</p>
                    <p>min_temp = {info.tempMin}&deg;C</p>
                    <p>humidity = {info.humidity}</p>
                    <p>The weather can described as {info.weather} and feels like {info.feels_like}&deg;C </p>
                    </Typography>
                </CardContent>
            
            </Card>
        </div>
    </div>
}