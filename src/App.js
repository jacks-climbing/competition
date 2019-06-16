import React from 'react';
import Navbar from '../src/components/navbar';
import Welcome from '../src/components/welcome';
import './App.css';
import About from './components/about';
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
    <About />
      <div class="row container">
        <h2 class="header">Parallax</h2>
        <Registration />
      </div>
    </div>
  );
}

export default App;
