import React, { useState, useLocalStorage } from 'react';
import axios from 'axios';

// Username = 'Lambda School'
// Password = 'i<3Lambd4'
// Token = 'esf...QifQ'


const Login = () => {
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useLocalStorage("");
  // const [token, useToken] = useLocalStorage("");
  const [credentials, setCredentials] = useState({
      username: "Lambda School",
      password: "i<3Lambd4" 
  });
  
  const handleChange = prop => event => {
    setCredentials({ ...credentials, [prop]: event.target.value });
  };
  // const handleChange = prop => e => {
  //   setCredentials({
  //     // [e.target.name]: e.target.value
  //     ...credentials, [prop]: e.target.value
  //   });
  // }



  const handleSubmit = e => {
    e.preventDefault();
    console.log("Submitting the form.");
    axios      
    .post("http://localhost:5000/api/login", credentials)
    .then(res => {
      console.log('response', res);
      localStorage.setItem("token", res.data.payload)
      // props.history.push('/')
    })
    .catch(err => {
      console.error('Error', err);
    });
  }


  // TODO: remove duplicate code
  const isAuthenticated = () => {
    return localStorage.getItem("token") ? true : false;
  }

  return (
    <div className="formDiv">
      <h2>Login Form</h2>
      <form action="http://localhost:5000">
        Login:<br />
        <input
          type="text"
          name="username"
          value={credentials.username}
          onChange={handleChange("username")}
        />
        <br />
        Password:<br />
        <input type="password"
          name="password"
          value={credentials.password}
          onChange={handleChange("password")}
        />
        <br /><br />
        <button
          type="button"
          value="Submit"
          onClick={handleSubmit}>Login
        </button>
      </form>
    </div>
  );

}

export default Login;