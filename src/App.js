import React from 'react';
import logo from './logo.svg';
import {Switch, Route, Link} from 'react-router-dom'
import './App.css';
import Home from './Home'

function App() {
  return (
    <div className="App">
      <nav>
        <Link to ="/">Home</Link>
        <Link to ="/temperature">Temperature</Link>
        <Link to ="/customize-image">Customize Image</Link>
        <Link to ="/celebriteis">Celebriteis</Link>
      </nav>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route render = {() => <h1>404</h1>} />
      </Switch>
    </div>
  );
}

export default App;
