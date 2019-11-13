import React from 'react';
import axios from 'axios';

const axiosWithAuth = () => {
  return axios.create({
    headers: {
      authorization: sessionStorage.getItem("token")
    }
  });
}

const FriendList = () => {

  const isAuthenticated = () => {
    return localStorage.getItem("token") ? true : false;
  };

  return (
    <div className="friendlyPeeps">
      <h1>These are your friends:</h1>
      <h2>(Protected)</h2>
      <ul>
        <li>Ben: ben@lambdaschool.com</li>
        <li>Austen: austen@lambdaschool.com</li>
        <li>Name: email@email.com</li>
      </ul>
    </div>
  );
}

export default FriendList;