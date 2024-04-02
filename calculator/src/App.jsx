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
              <button className='Op' value='7' onClick={handleButtonClick}>7</button>
              <button className='Op' value='8' onClick={handleButtonClick}>8</button>
              <button className='Op' value='9' onClick={handleButtonClick}>9</button>
              <button className='Op' value='/' onClick={handleButtonClick}>/</button>
            </div>
            <div className='Row'>
              <button className='Op' value="4" onClick={handleButtonClick}>4</button>
              <button className='Op' value="5" onClick={handleButtonClick}>5</button>
              <button className='Op' value="6" onClick={handleButtonClick}>6</button>
              <button className='Op' value="*" onClick={handleButtonClick}>*</button>
            </div>
            <div className='Row' >
              <button className='Op' value='3' onClick={handleButtonClick}>3</button>
              <button className='Op' value='2' onClick={handleButtonClick}>2</button>
              <button className='Op' value='1' onClick={handleButtonClick}>1</button>
              <button className='Op' value='-' onClick={handleButtonClick}>-</button>
            </div>
            <div className='Row'>
              <button className='Op' value='C' >C</button>
              <button className='Op' value='0' onClick={handleButtonClick}>0</button>

              <button className='equal' value='=' onClick={e => setValue(eval(value))} >=</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default App
