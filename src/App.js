import React from 'react';
import Navbar from '../src/components/navbar';
import Welcome from '../src/components/welcome';
import './App.css';
import Registration from './components/registration';

function App() {
  return (
    <div className="App">
      
      <div class="parallax-container">
        <div class="parallax">
          <Navbar />
          <Welcome />
        </div>
    </div>
    <div class="section white">
      <div class="row container">
        <h2 class="header">Parallax</h2>
        <Registration />
      </div>
    </div>
    <div class="parallax-container">
      <div class="parallax"></div>
    </div>
    </div>
  );
}

export default App;
