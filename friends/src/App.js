import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } 
  from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute'
import Login from './components/Login';
import FriendList from './components/FriendList';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/friends">Protected Friends List</Link>
          </li>
        </ul>
        <Switch>
          <PrivateRoute path="/friends">
            <FriendList />
          </PrivateRoute>
          <Route path="/login" component={Login} />
          <Route render={ () => {
            return <img src="https://http.cat/404" alt="404 Cat not Found" />;
          }}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
