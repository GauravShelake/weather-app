import React, { useEffect, useState } from 'react';
import './App.css';


function App() {
  const [data, setData] =useState({});
  const [location, setLocation] = useState('');
  const fetchData = async () => {
    try{
      const res =await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=96cbb30ceede9333304be1c8e5361059`);
      const jsonData = await res.json();
      setData(jsonData);
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
  };
  /* eslint-disable */ 
  useEffect (() =>{
    if(location) {
      fetchData();
    }
  },[location]);
  const searchLocation = (event) =>{
    if(event.key === 'Enter') {
      fetchData();
    }
  };
  return (
    <div className="app">
    <div className="search">
      <input value={location} 
      onChange={(event)=> setLocation(event.target.value)} 
      onKeyDown={searchLocation} 
      placeholder='Enter city........' 
      type="text" />
      </div>          
    <div className="container">
      <div className="top">
        <div className="location"><p>{data.name}</p></div>
        <div className="temp">
          {data.main ? <h1>{data.main.temp}°F</h1> : null}
        </div>
        <div className="description">
          {data.weather ? <p>{data.weather[0].main}</p> :null}
        </div>
      </div>
      {data.name !== undefined && <div className="bottom">
        <div className="feels">
          {data.main ? <p className='bold'>{data.main.feels_like.toFixed()}°F</p> : null}
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
