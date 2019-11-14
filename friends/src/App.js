import React from 'react';
import { Route, Redirect } 
  from 'react-router-dom';
// import PrivateRoute from './components/PrivateRoute'
import Login from './components/Login';
import FriendList from './components/FriendList';

import './App.css';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      localStorage.getItem("token") ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);



function App() {
  return (
      <div className="App">
        <PrivateRoute component={FriendList} />
        <Route path="/login" component={Login} />
      </div>
  );
}

export default App;
