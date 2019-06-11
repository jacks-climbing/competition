import React from 'react';
import Navbar from '../src/components/navbar';
import Welcome from '../src/components/welcome';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Welcome />
    </div>
  );
}

export default App;
