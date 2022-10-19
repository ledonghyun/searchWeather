import styled from 'styled-components'
import WeatherInput from './WeatherInput'
import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { config } from '../openweather';

const Templete = styled.div`
  width: 768px;
  margin: 30px auto 0;
  h1{
    font-size: 50px;
  }
  .loading{
    font-size: 40px;
  }
  & > div{
    margin: 20px 0;
  }
  dl {
    height: 350px;
    border-radius: 20px;
    border: 1px solid grey;
    margin: 30px 0;
    padding: 10px;
    background: white;
    box-shadow: 10px 10px rgba(171, 171, 171, 0.8);
  }
`;

const WeatherTemplete = () => {
  const [inputWeather, setInputWeather] = useState(''); /* axios data */
  const [input, setInput] = useState('Seoul'); /* onInsert한 data */
  const [loading, setLoading] = useState(false);

  useEffect(()=>{
    setLoading(true);
    const fetchData = async() => {
      try{
        const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${config.apikey}`);
        const nextData = response.data;
        setInputWeather(last => last=nextData);
      }catch(e){
        console.log(e);
        alert('지역명을 확인해주세요');
      }
      setLoading(false);
    }
    fetchData();
  }, [input]);

  const onInsert = useCallback(
    e => {
      setInput(last => last = e);
    }, [])

  if (loading) {
    return <Templete>불러오는중....</Templete>
  };


  return(
    <Templete>
      <h1>Weather APP</h1>
      <WeatherInput onInsert={onInsert} inputWeather={inputWeather}></WeatherInput>
    </Templete>
  );
}

export default WeatherTemplete;