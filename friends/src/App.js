import React from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import FriendsList from './components/FriendsList';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Login} />
        <PrivateRoute exact path='/friendlist' component={FriendsList} />
      </Switch>
    </div>
  );
}

export default App;
