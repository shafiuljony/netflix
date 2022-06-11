import React from 'react';
import Route from 'react-router-dom/es/Route';

export function IsUserRedirect({ user, loggedInPath, children, ...restProps }) {
  return <Route {...restProps}
    render={() ={
      if(!user){
        return children
    }
    }
    }
}
