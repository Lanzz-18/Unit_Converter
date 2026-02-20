import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [inputValue, setInputValue] = useState("");

  const convertLogic = () => {
    // convert logic


    /*
    1 meter = 3.281 feet
    1 liter = 0.264 gallon
    1 kilogram = 2.204 pound

    Follow the design spec

    Generate all conversions when
    the user clicks "Convert"

    Round the numbers down to
    three decimal places
    */


    /*
    <div class="card">
        <p id="unit-header"></p>
    </div>
    */
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
          <p>to</p>
          <select id="unit-select" className="input-bar">
            <option value="metre">Metre</option>
            <option value="kilometre">Kilometre</option>
            <option value="centimetre">Centimetre</option>
            <option value="millimetre">Millimetre</option>
            <option value="micrometre">Micrometre</option>
            <option value="nanometre">Nanometre</option>
            <option value="inch">Inch</option>
            <option value="foot">Foot</option>
            <option value="mile">Mile</option>
            <option value="yard">Yard</option>
          </select>
          <button id="convert-btn" onClick={convertLogic}>Convert</button>
        </div>
      </div>
      <div className="content">
      </div>
    </>
  )
}


export default App
