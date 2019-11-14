import React from  'react';
import { Route, Redirect } from 'react-router-dom';

// If the token exists, assume we are authenticated
const isAuthenticated = () =>  {
  return sessionStorage.getItem("token") ? true : false;
}

// This is very similar to the Tyler McGinnis demo:
// https://tylermcginnis.com/react-router-protected-routes-authentication/
export default function PrivateRoute ({ children, ...rest }) {
  console.log("...rest", rest); // Sanity check
  
  return (
    <Route
      {...rest}
      render={({ location }) =>
      isAuthenticated() ? ( children ) : 
        (
          <Redirect to={{
            pathname: "/login",
            state: { from: location } // Are we using state here?
          }}
        />
        )
      }
    />
  )
}