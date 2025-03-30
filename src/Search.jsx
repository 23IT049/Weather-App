import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './search.css'
import { useState } from 'react';
export default function Search({updateinfo}){
    
    let [city,setcity]=useState("")
    let API_KEY="44e00db1c0c4019faa6bd1ea1a289a52"
    let API_URL="https://api.openweathermap.org/data/2.5/weather"
    let Handlecity=(event)=>{
        setcity(event.target.value)
    }
    let getweatherinfo= async ()=>{
        let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`)
        let jsonresponse = await response.json();
        console.log(jsonresponse);
        let result={
            city:city,
            feels_like: jsonresponse.main.feels_like,
            temp: jsonresponse.main.temp,
            tempMin:jsonresponse.main.temp_min,
            tempMax:jsonresponse.main.temp_max,
            humidity: jsonresponse.main.humidity,
            weather: jsonresponse.weather[0].description
        }
        
        return result;
        
    }

   

    let handlesubmit= async (event)=>{
        event.preventDefault();
        setcity("")  
        console.log(city); 
        let info= await getweatherinfo()
        updateinfo(info);
    }

    return <div className='searchBox'>
        
        <form onSubmit={handlesubmit}>
        <TextField id="outlined-basic" label="CityName" variant="outlined" value={city} onChange={Handlecity} required/>
        <br /><br />
        <Button variant="contained" type='submit'>Search</Button>
        </form>
    </div>
}