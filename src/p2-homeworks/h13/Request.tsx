import React, {ChangeEvent, useState} from 'react';
import axios from "axios";

const Request = () => {
  const [value, setValue] = useState<boolean>(false)
  const [response, setResponse] = useState<string>('')
  const [error, setError] = useState<string>('')
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.checked)
  }
  const onClickRequestHandler = () => {
    axios.post(`https://neko-cafe-back.herokuapp.com/auth/test`, {success: value})
      .then(res => {
        setError('')
        return setResponse(res.data.errorText)
      })
      .catch (error =>  {
        setResponse('')
         return error.response ? setError(error.response.data.errorText)  : error.message
       })
  }
  return (
    <div>
      <button onClick={onClickRequestHandler}>Кнопка</button>
      <input onChange={onChangeHandler} type="checkbox" className="type"/>
      <p>{response}</p>
      <p>{error}</p>
    </div>
  );
};

export default Request;