import { useState } from 'react'
import DropDown from './DropDown.jsx'
import './App.css'

// Converting each value into metres as a base unit
const toMetres = {
  metre: 1,
  kilometre: 1000,
  centimetre: 0.01,
  millimetre: 0.001,
  micrometre: 0.000001,
  nanometre: 0.000000001,
  inch: 0.0254,
  foot: 0.3048,
  mile: 1609.344,
  yard: 0.9144,
}

// Coverting metres to rest of the values
const fromMetres = {
  metre: 1,
  kilometre: 0.001,
  centimetre: 100,
  millimetre: 1000,
  micrometre: 1000000,
  nanometre: 1000000000,
  inch: 39.3701,
  foot: 3.28084,
  mile: 0.000621371,
  yard: 1.09361,
};
// The above elements are located outside app to prevent them being recreated everytime the component re-renders

function App() {
  const [inputValue, setInputValue] = useState("");
  const [unit, setUnit] = useState("metre");
  const [targetUnit, setTargetUnit] = useState("metre")
  
  
  const convertLogic = () => {
    const num = parseFloat(inputValue)
    const inMetres = num * toMetres[unit]
    const result = inMetres * fromMetres[targetUnit]
    console.log(result.toFixed(3))
  }

  return (
    <>
      <div className="header">
        <h1>Metric/Imperial Unit Conversion</h1>
        <div className="main">
          <input 
            type="text"
            id="input-box"
            className="input-bar"
            value={inputValue}
            onChange={(e) => {
              const val = e.target.value;
              // If input is a number check
              if(val === "" || !isNaN(val)){
                setInputValue(val)
              }
            }}
          />
          <DropDown value={unit} onChange={(e) => setUnit(e.target.value)}/>
          <p>to</p>
          <DropDown value={targetUnit} onChange={(e) => setTargetUnit(e.target.value)}/>
          <button id="convert-btn" onClick={convertLogic}>Convert</button>
        </div>
      </div>
      <div className="content">
      </div>
    </>
  )
}

export default App
