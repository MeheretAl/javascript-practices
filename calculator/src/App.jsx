import { useState } from 'react'

import './App.css'

function App() {
  const [value, setValue] = useState(' ');

  const handleButtonClick = (e) => {
    e.preventDefault();

    setValue(value + e.target.value);
  };


  return (
    <>
      <div className="container">
        <div className="calculator">
          <form action="">
            <div className='Row'>
              <input type="text" value={value} />
            </div>
            <div className='Row'>
              <button className='Op' value='7'>7</button>
              <button className='Op' value='8'>8</button>
              <button className='Op' value='9'>9</button>
              <button className='Op' value='/'>/</button>
            </div>
            <div className='Row'>
              <button className='Op' value="4">4</button>
              <button className='Op' value="5">5</button>
              <button className='Op' value="6">6</button>
              <button className='Op' value="*">*</button>
            </div>
            <div className='Row' >
              <button className='Op' value='3'>3</button>
              <button className='Op' value='2'>2</button>
              <button className='Op' value='1'>1</button>
              <button className='Op' value='-'>-</button>
            </div>
            <div className='Row'>
              <button className='Op' value='C'>C</button>
              <button className='Op' value='0'>0</button>
              <button className='Op' value='&larr;'>&larr;</button>
              <button className='Op' value='='>=</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default App
