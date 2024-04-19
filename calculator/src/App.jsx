import React, { useState } from 'react';
import './App.css';

function App() {
  const [outputValue, setOutputValue] = useState('')
  const [value, setValue] = useState('');
  const [operator, setOperator] = useState(null);
  const [preValue, setPreValue] = useState(null);

  function handleClear() {
    setOutputValue('')
    setPreValue(null)
    setValue('')
    setOperator(null)
  }

  function handleDelete() {
    setOutputValue(outputValue.slice(0, -1))
    setValue(value.slice(0, -1))
  }

  function handleNumbers(event) {
    setOutputValue(outputValue + event.target.value)
    setValue(value + event.target.value)
  }

  function handleOperations(event) {
    setOperator(event.target.value)
    setOutputValue(outputValue + event.target.value)
    setPreValue(value)
    setValue('')
  }


  function handleEquals() {
    const current = parseInt(value)
    const prev = parseInt(preValue)

    switch (operator) {
      case '+':

        setOutputValue(current + prev)
        setPreValue(null)
        setOperator(null)
        break;
      case '-':
        setOutputValue(prev - current)
        setPreValue(null)
        setOperator(null)
        break
      case '*':
        setOutputValue(prev * current)
        setPreValue(null)
        setOperator(null)
        break
      case '/':
        if (current === 0) {
          setOutputValue("Undefined")
        } else {
          setOutputValue(prev / current)
        }
        setPreValue(null)
        setOperator(null)
        break
      default:
        setOutputValue(value)
    }
  }


  return (
    <div className="container">
      <div className="calculator">
        <form>
          <input type="text" value={outputValue} readOnly />
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

