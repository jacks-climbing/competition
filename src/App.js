import React from 'react';
import Navbar from '../src/components/navbar';
import Welcome from '../src/components/welcome';
import './App.css';
import About from './components/about';
import Registration from './components/registration';
import Rules from './components/rules';
import Routes from './components/routes';
import Directions from './components/directions';
import Camping from './components/camping';


function App() {
  return (
    <div className="App">   
      <Navbar />
      <div id="home">
        <Welcome />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="sign_up">
        <Registration />
      </div>
      <div id="comp_rules">
        <Rules />
      </div>
      <div id="route_list">
        <Routes />
      </div>
      <div id="directions">
        <Directions />
      </div>
      <div id="camping-info">
        <Camping />
      </div>
    </div>
  );
}

export default App;
