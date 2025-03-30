import Search from "./Search"
import Info from "./Info"
import { useState } from "react"
export default function Weather(){
    let [weather,setweather]=useState({
        city: "Delhi",
        feels_like: 25,
        temp: 22,
        tempMin:25,
        tempMax:24,
        humidity: 23,
        weather: "haze"
    })

    let updateinfo=(result)=>{
        setweather(result)
    }


    return <div style={{textAlign : "center"}}>
        <h3>Search for weather</h3>
        <Search updateinfo={updateinfo}/>
        <Info info={weather}/>
    </div>
}