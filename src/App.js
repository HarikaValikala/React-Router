import React from 'react';
import { BrowserRouter, Route, Link, NavLink, Redirect, Prompt } from 'react-router-dom';
import ReactElementComponent from './components/ReactElementPage';
import { useState } from 'react';
import './App.css';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [age, setAge] = useState(null);
  function onClickHandle() {
    setLoggedIn(!loggedIn);
  }
  function onChangeHandle(e) {
    setAge(e.target.value);
  }
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <ul className="ul-style">
            <li className="li-style">
              <NavLink className="App-link" to="/" exact activeClassName="link-active-style">Home</NavLink>
            </li>
            <li className="li-style">
              <NavLink className="App-link" to="/elements" exact activeClassName="link-active-style">Elements</NavLink>
            </li>
            <li className="li-style">
              <NavLink className="App-link" to="/user/Harika/Valikala" exact activeClassName="link-active-style">Users</NavLink>
            </li>
          </ul>
          <Prompt when={loggedIn && !age} message ={(location) => {
            return location.pathname.startsWith('/user') ? true : 'Are you sure?';
          }}></Prompt>

          {loggedIn.toString()}
          <button className="button" onClick={onClickHandle}>{loggedIn ? "Logout" : "Login"}</button>

          <Route path="/" exact render={() => {
            return <h1>Welcome React Project</h1>
          }} />
          <Route path="/elements" exact component={ReactElementComponent} />
          <Route path="/user/:firstname/:lastname" exact render={({match}) => {
            return loggedIn ? (
              <h1>
                <h2>Age: {age}</h2>
                <input type="text" value={age} onChange={onChangeHandle}/>
                Welcome {match.params.firstname} {match.params.lastname}
              </h1>
            ) : (<Redirect to="/" />);
            }}  
          />
        </header>
      </div>
    </BrowserRouter>    
  );
}

export default App;
