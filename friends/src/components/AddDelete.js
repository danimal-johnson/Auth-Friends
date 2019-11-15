import React, { useState } from 'react';
import axios from 'axios';

export default function AddDelete (props) {
  const [friendData, setFriendData] = useState({
    name: '',
    age: 0,
    email: '',
    id: 0
  });

  const handleChange = props => event => {
    setFriendData({ ...friendData, [props]: event.target.value });
  };

  const handleAdd = e => {
    e.preventDefault();
    console.log("Adding a friend. 😎");
    axios      
    .post("http://localhost:5000/api/friends", {
      name: friendData.name,
      age: friendData.age,
      email: friendData.email
    })
    .then(res => {
      console.log('response', res);
      console.log("Result of Add:", res);
      // props.history.push('/')
    })
    .catch(err => {
      console.error('Error', err);
    });
  }

  const handleDelete = e => {
    e.preventDefault();
    console.log("Deleting a friend. 💔");
    axios      
    .delete(`http://localhost:5000/delete/${friendData.id}`)
    .then(res => {
      console.log('Result of Delete:', res);
    })
    .catch(err => {
      console.error('Deletion error', err);
    });
  }

  return (
    <div className="formDiv">
      <h2>Add/Delete Friend</h2>
      <form>
        Name:<br />
        <input
          type="text"
          name="name"
          value={friendData.name}
          onChange={handleChange("name")}
        />
        <br />
        Email:<br />
        <input
          type="email"
          name="email"
          value={friendData.email}
          onChange={handleChange("email")}
        />
        <br /><br />
        <button
          type="button"
          value="Add"
          onClick={handleAdd}>Add Friend
        </button>
        <br /><br />
        <input
          type="text"
          name="id"
          value={friendData.id}
          onChange={handleChange("id")}
        />
        <br /><br />
        <button
          type="button"
          value="Delete"
          onClick={handleDelete}
        >Delete Friend</button>
      </form>
    </div>
  );



}