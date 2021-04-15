import React from 'react';
import ReactDOM from 'react-dom';
import Home from './home'
import About from './about'
import Login from './login'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'


const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'red',
  textDecoration: 'none',
  color: 'white',
}
const Navbar = () =>
  <div>
    <NavLink
      to="/" exact style={link} activeStyle={{ background: 'darkblue'}}>Home</NavLink>
    <NavLink
      to="/about"
      exact
      style={link}
      activeStyle={{
        background: 'darkblue'
      }}
    >About</NavLink>
    <NavLink
      to="/login"
      exact
      style={link}
      activeStyle={{
        background: 'darkblue'
      }}
    >Login</NavLink>
  </div>;

ReactDOM.render((
  <Router>
    <div>
    <Navbar /> 
    <Route path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/login" component={Login} />
   </div>
  </Router>),
  document.getElementById('root')
);
