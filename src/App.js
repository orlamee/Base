import './App.css';
import Header from './Component/Header';
import React from 'react';
import Gradient from './Component/Gradient';
import Secondlayer from './Component/SecondLayer';
import ThirdLayer from './Component/ThirdLayer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Gradient/>
      <Secondlayer/>
      <ThirdLayer/>
    </div>
  );
}

export default App;
