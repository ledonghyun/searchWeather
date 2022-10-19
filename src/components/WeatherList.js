import styled from "styled-components";
import React, { useEffect, useState } from 'react';
import axios from "axios";
import WeatherToList from "./WeatherToList";


const WeatherListBlock = styled.div`
  border-top: 5px dashed grey;
  padding-top: 25px;
  display: relative;
  overflow-x: auto;
  .loading{
    font-size: 30px;
  }
  .listWrap{
    display: absolute;
    width: calc(290px * 4);
    .overflow{
      display: flex;
      justify-content: space-around;
    }
  }
`;

const WeatherList = () => {
  const [cityData, setCityData] = useState([]);
  const [loading, setLoading] = useState(false)

  useEffect(()=>{
    setLoading(true);
    const fetchData = async () => {
      try{
        const seoulResponse = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=Seoul&appid=ea53b6f001e4d38c68b87795ddeea08f`);
        const newyorkResponse = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=new%20york&appid=ea53b6f001e4d38c68b87795ddeea08f`);
        const tokyoResponse = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=tokyo&appid=ea53b6f001e4d38c68b87795ddeea08f`);
        const parisResponse = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=paris&appid=ea53b6f001e4d38c68b87795ddeea08f`);
        setCityData(last => last = [
          {
            id: 1,
            data: seoulResponse.data
          },
          {
            id: 2,
            data: newyorkResponse.data
          },
          {
            id: 3,
            data: tokyoResponse.data
          },
          {
            id: 4,
            data: parisResponse.data
          }
        ]);
      }catch(e){
        console.log('weatherList : ', e);
      }
      setLoading(false);
    }
    fetchData();
  }, []);

  if(loading) {
    return <WeatherListBlock><p className="loading">불러오는중...</p></WeatherListBlock>
  };

  const cityList = cityData.map(
    city => (
      <WeatherToList key={city.id} cityData={city.data}></WeatherToList>
  ))

  return(
    <WeatherListBlock>
      <div className="listWrap">
        <div className="overflow">
          {cityList}
        </div>
      </div>
    </WeatherListBlock>
  );
}

export default React.memo(WeatherList);