import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddDelete from './AddDelete';

const axiosWithAuth =() => {
  const token = localStorage.getItem('token');

  return axios.create({
      headers: {
          'Content-Type': 'application/json',
          'Authorization': `${token}`,
      },
  });
};

const FriendList = () => {
  const [friendData, setFriendData] = useState([]);

  useEffect(() => {
    const authAxios = axiosWithAuth();
    authAxios
    .get("http://localhost:5000/api/friends")
    .then(response => {
      console.log(response);
      setFriendData(response.data);
    })
    .catch(error => {
      console.log(error);
    })
  },[])

  return (
    <div className="friend-list">
      <AddDelete />
      <h1>Your friends:</h1>
      <button type="button" onClick={ () => {localStorage.clear()} } >Log Out</button>
      <ul>
        {friendData.map(friend => {
          return <li key={friend.id}>{friend.name}</li>
        })}
      </ul>
    </div>
  );
}

export default FriendList;