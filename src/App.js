import React, { useEffect, useState } from 'react';
import './App.css';


function App() {
  const [data, setData] =useState({})
  const [location, setLocation] = useState('')
  //const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=96cbb30ceede9333304be1c8e5361059`
  const searchLocation = (event) => {
    if(event.key === 'Enter') {
      useEffect(()=>fetch.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=96cbb30ceede9333304be1c8e5361059`)
      .then((response) =>{
        setData(response.data)
        console.log(response.data)
      }))
      setLocation('')
    }
  }
  return (
    <div className="app">
    <div className="search">
      <input value={location} onChange={event=> setLocation(event.target.value)} onKeyDown={searchLocation} placeholder='Enter Location' type="text" /></div>      
    
    <div className="container">
      <div className="top">
        <div className="location"><p>{data.name}</p></div>
        <div className="temp">
          {data.main ? <h1>{data.main.temp.toFixed()}</h1> : null}
        </div>
        <div className="description">
          {data.weather ? <p>{data.weather[0].main}</p> :null}
        </div>
      </div>
      {data.name !== undefined && <div className="bottom">
        <div className="feels">
          {data.main ? <p className='bold'>{data.main.feels_like.toFixed()}F</p> : null}
          <p>Feels Like</p>
        </div>
        <div className="humidity">
          {data.main ? <p className='bold'>{data.main.humidity}%</p>: null}
          <p>Humidity</p>
        </div>
        <div className="wind">
          {data.wind ? <p className='bold'> {data.wind.speed.toFixed()}MPH</p>: null}
          <p>Wind Speed</p>
        </div>
      </div> }
    </div>
    </div>
  );
}

export default App;
