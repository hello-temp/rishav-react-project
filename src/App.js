import React from 'react';
import './style.css';
import { User } from './User';
import { useState } from 'react';

/* BASIC STATE-HOOK EXAMPLE
export default function App() {
  var [age, setAge] = useState(0)

  // var age = 0; we are initialising age using the useState func.
  var increaseAge = () => {
    // age++; // This wil not render the UI
    setAge(age++) 
  };
  return (
    // This will not chnage the val of age, React doest know 
    <div>
      {age} 
      <button onClick={increaseAge}> Increase age</button>
    </div>
  );
} 
*/

// DISPLAYS THE INPUT
/*

export default function App() {
  var [inputValue, setInputValue] = useState('');

  var handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  return (
    <div>
      <input type="text" onChange={handleInputChange} />
      {inputValue}
    </div>
  );
}

*/


// SHOW / HIDE TEXT

/*
export default function App() {
  var [inputValue, setInputValue] = useState(false);

  
  return (
    <div>
      <div>
      
      <button onClick={() => { setInputValue(!inputValue)}}> Click Me </button>
      {inputValue && <h1> Hello, React</h1>}
    </div>
      {inputValue}
    </div>
  );
}

*/

// EXCERSISE -- COUNTER

export default function App() {
  var [count, setCount] = useState(0);

  
  return (
    <div>
      <button onClick={() => {setCount(count++)}}>Increase</button>
      <br/>
      <button onClick={() => {setCount(count--)}}>Decrease</button>
      <br/>
      <button onClick={() => {setCount(count=0)}}>Set to Zero</button>

      <h2>count: {count}</h2>
    </div>
  );
}