// react-datetime library to implement time
// import Datetime from 'react-datetime'; // a bit buggy now
import './App.css';
import React from 'react';

// import other components
import Header from './components/Header'
import MainContent from './components/MainContent'

function App() {
  return (
    <div className="App">
      <Header />
      <MainContent />
    </div>
  );
}

export default App;
