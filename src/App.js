import React from 'react';
import { BrowserRouter, Route, Link, NavLink } from 'react-router-dom';
import ReactElementComponent from './components/ReactElementPage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <ul>
            <li>
              <NavLink className="App-link" to="/" exact activeClassName="link-active-style">Home</NavLink>
            </li>
            <li>
              <NavLink className="App-link" to="/elements" exact activeClassName="link-active-style">Elements</NavLink>
            </li>
            <li>
              <NavLink className="App-link" to="/user/harika/valikala" exact activeClassName="link-active-style">Users</NavLink>
            </li>
          </ul>
          <Route path="/" exact render={() => {
            return <h1>Welcome React Project</h1>
          }} />
          <Route path="/elements" exact component={ReactElementComponent} />
          <Route path="/user/:firstname/:lastname" exact render={({match}) => {
            return <h1>Welcome {match.params.firstname} {match.params.lastname}</h1>
          }}  />
        </header>
      </div>
    </BrowserRouter>    
  );
}

export default App;
