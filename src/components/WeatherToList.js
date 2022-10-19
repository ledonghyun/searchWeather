import React, { useState, useEffect } from "react";
import styled from "styled-components";

const WeatherBlock = styled.dl`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 240px;
  dt{
    font-size: 31px;
    font-weight: 700;
  }
  .img{
    width: 100%;
    display: flex;
    justify-content: center;
    img{
      width: 200px;
      height: 200px;
    }
  }
  .temp{
    width: 30%;
    font-size: 25px;
    color: rgb(254, 110, 110);
  }
  .descrip{
    width: 40%;
    text-transform: capitalize;
    font-weight: 500;
    font-size: 25px;
  }
`;

const WeatherToList = ({cityData}) => {
  const [city, setCity] = useState('');
  const [temputure, setTemputure] = useState('');
  const [iconSrc, setIconSrc] = useState('')
  const [descript, setDescript] = useState('');
  const [country, setCountry] = useState('');
  
  useEffect(()=>{
    if(cityData){
      const {name, main, weather, sys} = cityData; // name: 지역이름, main: 온도(켈빈), weather: 아이콘과 날씨     
      const {description, icon} = weather[0];
      const {country} = sys;
      const {temp} = main;

      setCountry(lastCountry => lastCountry = country);
      setCity(lastCity => lastCity = name);
      setTemputure(lastTemp => lastTemp = Math.ceil(temp - 273.15));
      setIconSrc(lastSrc => lastSrc = `http://openweathermap.org/img/wn/${icon}@4x.png`);
      setDescript(lastDescript => lastDescript = description);
    }
  }, [cityData]);
  return(
    <div>
      <WeatherBlock>
        <dt>{city}, {country}</dt>
        <dd className="img"><img src={iconSrc} alt='날씨 이미지'/></dd>
        <dd className="temp">{temputure} C&#176;</dd>
        <dd className="descrip">{descript}</dd>
      </WeatherBlock>
    </div>
  );
}

export default React.memo(WeatherToList);