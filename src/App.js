import React, { useState } from 'react';
import Login from './login/LoginComponent';
import { Route, Link, BrowserRouter } from 'react-router-dom';

export const App = () => {
  return (
    <BrowserRouter>
      <div>
        <li>
          <Link to='/login'>Login/</Link>
        </li>
        <Route path='/login' component={Login} />
      </div>
    </BrowserRouter>
  );
};

export default App;
