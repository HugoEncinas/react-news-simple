import React from 'react';
import logo from './logo.svg';
import './App.css';
import Newsfeed from './components/Newsfeed'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Newsfeed/>
      </header>
    </div>
  );
}

export default App;
