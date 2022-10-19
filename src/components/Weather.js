import styled from "styled-components";
import React from "react";

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

const Weather = ({city, descript, temputure, iconSrc, country}) => {
  return(
    <WeatherBlock>
      <dt>{city}, {country}</dt>
      <dd className="img"><img src={iconSrc} alt='날씨 이미지'/></dd>
      <dd className="temp">{temputure} C&#176;</dd>
      <dd className="descrip">{descript}</dd>
    </WeatherBlock>
  );
};

export default React.memo(Weather);