import React from 'react'
import './Spinner.css'
function Spinner() {
  return (
    <div>
        <div className="loader"></div>
        <div className='text-bold text-2xl my-4 text-white'>Loading..</div>
    </div>
  )
}

export default Spinner;