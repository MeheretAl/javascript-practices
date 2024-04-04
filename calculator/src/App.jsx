import React, { useState } from 'react';
import './App.css';

function App() {
  const [value, setValue] = useState('');

  function handleClear() {
    setValue('')
  }

  function handleDelete() {
    setValue(value.slice(0, -1))
  }

  function handleClick(event) {
    setValue(value + event.target.value)
  }

  function handleOperations(event) {
    setValue(eval(value))
  }

  return (
    <div className="container">
      <div className="calculator">
        <form>
          <input type="text" value={value} readOnly />
        </form>

        <div className="keys">
          <button className='clear' onClick={handleClear}>C</button>
          <button onClick={handleDelete}>&larr;</button>
          <button value={'/'} onClick={handleClick}>&divide;</button>

          <button value={7} onClick={handleClick}>7</button>
          <button value={8} onClick={handleClick}>8</button>
          <button value={9} onClick={handleClick}>9</button>
          <button value={'*'} onClick={handleClick}>*</button>

          <button value={4} onClick={handleClick}>4</button>
          <button value={5} onClick={handleClick}>5</button>
          <button value={6} onClick={handleClick}>6</button>
          <button value={'-'} onClick={handleClick}>-</button>

          <button value={1} onClick={handleClick}>1</button>
          <button value={2} onClick={handleClick}>2</button>
          <button value={3} onClick={handleClick}>3</button>
          <button value={'+'} onClick={handleClick}>+</button>

          <button className="zero" value={0} onClick={handleClick}>0</button>
          <button value={'.'} onClick={handleClick}>.</button>
          <button className='equals' value={'='} onClick={handleOperations}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;

