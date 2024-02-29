import React from 'react';
import './App.css';
import FirstLabM1 from "./components/fisrt-lab/FirstLabM1";
import FirstLabM2 from "./components/fisrt-lab/FirstLabM2";
import FirstLabM3 from "./components/fisrt-lab/FirstLabM3";
import FirstLabM4 from "./components/fisrt-lab/FirstLabM4";

function App() {
  return (
    <div className="App">
        <h1>First lab result</h1>
        <FirstLabM1/>
        <FirstLabM2/>
        <FirstLabM3/>
        <FirstLabM4/>
    </div>
  );
}

export default App;
