import './App.css';
import Header from './Component/Header';
import React from 'react';
import Gradient from './Component/Gradient';
import Secondlayer from './Component/SecondLayer';
function App() {
  return (
    <div className="App">
      <Header/>
      <Gradient/>
      <Secondlayer/>
    </div>
  );
}

export default App;
