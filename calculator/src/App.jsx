import { useState } from 'react'

import './App.css'

function App() {
  const [value, setValue] = useState(' ');

  const handleButtonClick = (e) => {
    setValue(value + e.target.value);
  };


  return (
    <>
      <div className="container">
        <div className="calculator">
          <form action="" onSubmit={e => e.preventDefault()}>
            <div className='Row'>
              <input type="text" value={value} />
            </div>
            <div className='Row'>
              <button value='7' onClick={handleButtonClick}>7</button>
              <button value='8' onClick={handleButtonClick}>8</button>
              <button value='9' onClick={handleButtonClick}>9</button>
              <button value='/' onClick={handleButtonClick}>/</button>
            </div>
            <div className='Row'>
              <button value="4" onClick={handleButtonClick}>4</button>
              <button value="5" onClick={handleButtonClick}>5</button>
              <button value="6" onClick={handleButtonClick}>6</button>
              <button value="*" onClick={handleButtonClick}>*</button>
            </div>
            <div className='Row' >
              <button value='3' onClick={handleButtonClick}>3</button>
              <button value='2' onClick={handleButtonClick}>2</button>
              <button value='1' onClick={handleButtonClick}>1</button>
              <button value='-' onClick={handleButtonClick}>-</button>
            </div>
            <div className='Row'>
              <button onClick={e => setValue(" ")}>C</button>
              <button value='0' onClick={handleButtonClick}>0</button>
              <button className='equal' value='=' onClick={e => setValue(eval(value))} >=</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default App
