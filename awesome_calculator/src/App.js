import './calculator/calculator.css'
import React from 'react'
import { useState } from 'react';

function App() {
  var [result, setResult] = useState('');

  function button(e) {
    let symbol = e.target.innerText
    if(symbol === '÷') { setResult(result+'/') }
    else if (symbol === '×') { setResult(result+'*') }
    else if (symbol === '−') { setResult(result+'-') }
    else { setResult(result+symbol) }
  }
  function clear(e) {
    setResult('')
  }
  function solve(e) {
    if(e.target.innerText === '=') { setResult(eval(result)) }
  }
  document.title = "Awesome Calculator"
  return (
    <div className='App'>
      <div className='calculator'>
      <div className='does'>
          <div className='do-container'><p className='do do1' onClick={clear}>AC</p></div>
          <div className='do-container'><p className='do do2' onClick={button}>÷</p></div>
          <div className='do-container'><p className='do do3' onClick={button}>×</p></div>
          <div className='do-container'><p className='do do4' onClick={button}>+</p></div>
          <div className='do-container'><p className='do do5' onClick={button}>−</p></div>
        </div>
        <div><p className='basic'><input className='result' value={result} id="result" placeholder="😉 Awesome? "></input></p></div>
        <div className='numbers'>
          <div className='number-container'><p className='number' onClick={button}>1</p></div>
          <div className='number-container'><p className='number' onClick={button}>2</p></div>
          <div className='number-container'><p className='number' onClick={button}>3</p></div>
          <div className='number-container'><p className='number' onClick={button}>4</p></div>
          <div className='number-container'><p className='number' onClick={button}>5</p></div>
          <div className='number-container'><p className='number' onClick={button}>6</p></div>
          <div className='number-container'><p className='number' onClick={button}>7</p></div>
          <div className='number-container'><p className='number' onClick={button}>8</p></div>
          <div className='number-container'><p className='number' onClick={button}>9</p></div>
          <div className='number-container'><p className='number' onClick={button}>.</p></div>
          <div className='number-container'><p className='number' onClick={button}>0</p></div>
          <div className='number-container'><p className='number number-cool' onClick={solve}>=</p></div>
        </div>
      </div>
    </div>
  );
}

export default App;
