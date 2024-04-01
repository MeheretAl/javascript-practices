import { useState } from 'react'

import './App.css'

function App() {

  return (
    <>
      <div className="container">
        <div className="calculator">
          <form action="">
            <div className='Row'>
              <input type="text" name="" id="" />
            </div>
            <div className='Row'>
              <button className='Op'>7</button>
              <button className='Op'>8</button>
              <button className='Op'>9</button>
              <button className='Op'>/</button>
            </div>
            <div className='Row'>
              <button className='Op'>4</button>
              <button className='Op'>5</button>
              <button className='Op'>6</button>
              <button className='Op'>*</button>
            </div>
            <div className='Row' >
              <button className='Op'>3</button>
              <button className='Op'>2</button>
              <button className='Op'>1</button>
              <button className='Op'>-</button>
            </div>
            <div className='Row'>
              <button className='Op'>C</button>
              <button className='Op'>0</button>
              <button className='Op'>&larr;</button>
              <button className='Op'>=</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default App
