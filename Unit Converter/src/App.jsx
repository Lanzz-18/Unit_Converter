import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <>
      <div class="header">
        <h1>Metric/Imperial Unit Conversion</h1>
        <div id="input-box"></div>
        <button id="convert-btn">Convert</button>
      </div>
      <div class="content">
      </div>
    </>
  )
}

export default App
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