import React from 'react';
import Navbar from '../src/components/navbar';
import Welcome from '../src/components/welcome';
import './App.css';
import About from './components/about';
import Registration from './components/registration';
import Rules from './components/rules';
import { Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Switch>
            <Route exact path="/About" component={About} />
            <Route exact path="/Sign_Up" component={Registration} />
          </Switch>
      <Navbar />
      <Welcome />
      <About />
      <Registration />
      <Rules />
    </div>
  );
}

export default App;
