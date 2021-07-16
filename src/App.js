import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Route path="/" exact render={() => {
            return <h1>Welcome React Project</h1>
          }} />
          <Route path="/elements" exact render={() => {
            return <h1>Welcome to React Elements</h1>
          }} />
        </header>
      </div>
    </BrowserRouter>    
  );
}

export default App;
