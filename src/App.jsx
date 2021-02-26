import React from 'react'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Inicio from './components/Inicio'
import Admin from './components/Admin'
import Login from './components/Login'
import Menu from './components/Menu'


function App() {
  return (
    <div className="container">
      <Router>
        <Switch>
          <Route exact to="/" component={Inicio}></Route>
          <Route to="/admin" component={Admin}></Route>
          <Route to="/login" component={Login}></Route>
        </Switch>
      </Router>
      </Router>
    </div>
  );
}

export default App;
