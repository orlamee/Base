import './App.css';
import Header from './Component/Header';
import React from 'react';
import Gradient from './Component/Gradient';
import Secondlayer from './Component/SecondLayer';
import ThirdLayer from './Component/ThirdLayer';
import FourthLayer from './Component/FourthLayer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Gradient/>
      <Secondlayer/>
      <ThirdLayer/>
      <FourthLayer/>
    </div>
  );
}

export default App;
