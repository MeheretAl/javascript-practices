import React, { useState } from 'react';
import './App.css';

function App() {
  const [value, setValue] = useState('');
  const [operator, setOperator] = useState(null);
  const [preValue, setPreValue] = useState(null);

  function handleNumbers(event) {
    setValue(value + event.target.value)
  }

  function handleOperations(event) {
    setOperator(event.target.value)
    setPreValue(preValue)
    setValue('0')
  }

  function handleDelete() {
    setValue(value.slice(0, -1))
  }

  function handleClear() {
    setOperator(null)
    setValue('')
    setPreValue(null)
  }

  function handleEquals() {
    const current = parseFloat(value)
    const prev = parseFloat(preValue)

    switch (operator) {
      case '+':
        setValue(current + prev)
        setPreValue(null)
        setOperator(null)
      case '-':
        setValue(prev - current)
        setPreValue(null)
        setOperator(null)
      case '*':
        setValue(prev * current)
        setPreValue(null)
        setOperator(null)
      case '/':
        setValue(current / prev)
        setPreValue(null)
        setOperator(null)
      default:
        setValue(null)
        setPreValue(null)
        setOperator(null)
    }
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
          <button value={'/'} onClick={handleOperations}>&divide;</button>

          <button value={7} onClick={handleNumbers}>7</button>
          <button value={8} onClick={handleNumbers}>8</button>
          <button value={9} onClick={handleNumbers}>9</button>
          <button value={'*'} onClick={handleOperations}>*</button>

          <button value={4} onClick={handleNumbers}>4</button>
          <button value={5} onClick={handleNumbers}>5</button>
          <button value={6} onClick={handleNumbers}>6</button>
          <button value={'-'} onClick={handleOperations}>-</button>

          <button value={1} onClick={handleNumbers}>1</button>
          <button value={2} onClick={handleNumbers}>2</button>
          <button value={3} onClick={handleNumbers}>3</button>
          <button value={'+'} onClick={handleOperations}>+</button>

          <button className="zero" value={0} onClick={handleNumbers}>0</button>
          <button value={'.'} onClick={handleNumbers}>.</button>
          <button className='equals' value={'='} onClick={handleEquals}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;

