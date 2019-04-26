import React, { useState } from 'react';
import { postRequest } from '../utilities/ApiHelpers';
const base64 = require('base-64');

export const Login = () => {
  const [values, setValues] = useState({});

  const handleChange = event => {
    event.persist();
    setValues(values => ({
      ...values,
      [event.target.name]: event.target.value
    }));
  };
  const handleSubmit = e => {
    console.log(values);
    var auth =
      'Basic ' + base64.encode(values.userName + ':' + values.password);
    postRequest('http://localhost:3002/login', values, auth).then(response => {
      console.log(response);
    });
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          value={values.userName || ''}
          onChange={handleChange}
          placeholder='Enter User Name'
          type='text'
          name='userName'
          required
        />
      </div>
      <div>
        <input
          value={values.password || ''}
          onChange={handleChange}
          placeholder='Enter Password'
          type='password'
          name='password'
          required
        />
      </div>
      <div>
        <button type='submit'>Submit</button>
      </div>
    </form>
  );
};
export default Login;
