import React from 'react';
import { BrowserRouter, Route, Link, NavLink, Redirect } from 'react-router-dom';
import ReactElementComponent from './components/ReactElementPage';
import { useState } from 'react';
import './App.css';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  function onClickHandle() {
    setLoggedIn(!loggedIn);
  }
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
              <NavLink className="App-link" to="/user/Harika/Valikala" exact activeClassName="link-active-style">Users</NavLink>
            </li>
          </ul>
          {loggedIn.toString()}
          <button onClick={onClickHandle}>{loggedIn ? "Logout" : "Login"}</button>

          <Route path="/" exact render={() => {
            return <h1>Welcome React Project</h1>
          }} />
          <Route path="/elements" exact component={ReactElementComponent} />
          <Route path="/user/:firstname/:lastname" exact render={({match}) => {
            return loggedIn ? (
              <h1>Welcome {match.params.firstname} {match.params.lastname}</h1>
            ) : (<Redirect to="/" />);
            }}  
          />
        </header>
      </div>
    </BrowserRouter>    
  );
}

export default App;
