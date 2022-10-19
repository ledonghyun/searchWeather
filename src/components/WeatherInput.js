import React from "react";
import { useState, useEffect } from "react";
import WeatherChange from "./WeatherChange";
import Weather from "./Weather";
import styled from "styled-components";

const InputBlock = styled.div`
  margin-top: 20px;
`;

const WeatherInput = ({onInsert, inputWeather}) => {
  const [city, setCity] = useState('');
  const [temputure, setTemputure] = useState('');
  const [iconSrc, setIconSrc] = useState('')
  const [descript, setDescript] = useState('');
  const [country, setCountry] = useState('');
  useEffect(()=>{
    if(inputWeather){
      const {name, main, weather, sys} = inputWeather; // name: 지역이름, main: 온도(켈빈), weather: 아이콘과 날씨     
      const {description, icon} = weather[0];
      const {country} = sys;
      const {temp} = main;
      setCountry(lastCountry => lastCountry = country);
      setCity(lastCity => lastCity = name);
      setTemputure(lastTemp => lastTemp = Math.ceil(temp - 273.15));
      setIconSrc(lastSrc => lastSrc = `http://openweathermap.org/img/wn/${icon}@4x.png`);
      setDescript(lastDescript => lastDescript = description);
    }
  }, [inputWeather]);
  



  return(
    <InputBlock>
      <WeatherChange onInsert={onInsert}></WeatherChange>
      <Weather country={country} city={city} descript={descript} temputure={temputure} iconSrc={iconSrc}></Weather>
    </InputBlock>
  );
}

export default React.memo(WeatherInput);