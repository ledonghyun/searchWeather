import { useCallback, useState } from "react";
import styled from "styled-components";

const WeatherChangeBlock = styled.div`
  form{
    width: 500px;
    height: 30px;
    display: flex;
    input {
      display: block;
      width: 60%;
      border: 1px solid grey;
      &::placeholder{
        padding-left: 10px;
      }
    }
    button{
      width: 40px;
      border: none;
      background-color: gray;
      color: white;
    }
  }
`;

const WeatherChange = ({onInsert}) => {
  const [value, setValue] = useState('');

  const onChange = useCallback(nextCity => {
    setValue(lastCity => lastCity = nextCity.target.value); 
  }, []);

  const onSubmit = useCallback(
    e => {
      onInsert(value);
      setValue('');
      e.preventDefault();
    }, [onInsert, value]
  )

  return(
    <WeatherChangeBlock>
      <form onSubmit={onSubmit}>
        <input type='text' placeholder='원하는 지역을 입력해주세요 (영어로)' value={value} onChange={onChange}></input>
        <button>확인</button>
      </form>
    </WeatherChangeBlock>
  );
}

export default WeatherChange;